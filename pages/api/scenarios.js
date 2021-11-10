import { setCors } from "../../_helpers/cors";
import { handleResponse, handleError } from "./apiUtils";
const ObjectID = require("mongodb").ObjectID;
let dbClient;
const COLLECTION = "scenarios";
const db = require("../../_lib/crud/_config");
const read = require("../../_lib/crud/read");
const count = require("../../_lib/crud/count");
const schema = require("../../_lib/scenarios.schema");

const typeCastQuery = (schema, query) => {
  Object.keys(query).forEach((key) => {
    if (schema.schema[key] && schema.schema[key].type === "boolean") query[key] = query[key] === "!!" || query[key] === "true";
    if (schema.schema[key] && schema.schema[key].type === "number") query[key] = Number(query[key]);
  });
  return query;
};

const createSortQuery = (sort) => {
  let query = {};
  sort.split(",").forEach((e) => (query[e] = 1));
  return query;
};

export default async (req, res) => {
  await setCors(req, res, ["GET", "HEAD"]);
  let scenarios = {},
    skip,
    sort,
    limit,
    query = typeCastQuery(schema, Object.assign({}, { ...req.query }));
  delete query.q;
  delete query.limit;
  delete query.skip;
  delete query.sort;
  delete query.populate;
  if (query._category) query.$or = query._category.split(",").map((e) => ({ _category: e }));
  if (query._subcategory) query.$or = query._subcategory.split(",").map((e) => ({ _subcategory: e }));
  delete query._category;
  delete query._subcategory;

  dbClient = await (async () => {
    try {
      return await db();
    } catch (err) {
      console.error(err.stack || err);
    }
  })();

  Object.keys(query).forEach((key) => {
    if (query[key] === "!!") return (query[key] = { $exists: true, $ne: "", $ne: null });
    if (query[key] === "!") return (query[key] = null);
    // ---
    if (!schema.schema[key]) return;
    if (key === "_id") return (query[key] = new ObjectID(query[key]));
    if (query[key] === null) return;
    if (key.includes("_id") && Object.keys(query[key]).includes("$exists")) return;
    if (!!schema.schema[key].schema && key.includes("_ids")) return (query[key] = query[key].map((e) => new ObjectID(e)));
    if (!!schema.schema[key].schema && key.includes("_id") && !key.includes("_ids")) return (query[key] = new ObjectID(query[key]));
  });

  if (req.query.skip !== null) skip = Number(req.query.skip);
  if (req.query.limit !== null) limit = Number(req.query.limit);
  if (req.query.sort) sort = createSortQuery(req.query.sort);

  scenarios.data = await read(dbClient, schema, COLLECTION, query, skip || 0, limit || 25, sort, false);
  scenarios.count = await count(dbClient, schema, COLLECTION, query);

  return res.status(200).send(JSON.stringify(scenarios));
};
