const axios = require("axios");
import { setCors } from "../../_helpers/cors";

export default async (req, res) => {
  await setCors(req, res, ["GET", "HEAD"]);
  let headers = { "Content-Type": "application/json" };

  let queryString = Object.keys(req.query)
    .map((key) => `${key}=${req.query[key]}`)
    .join("&");

  let url = `${process.env.REPEAT_API}scenarios?${queryString}`;
  let config = { method: "get", url, headers };
  return axios(config)
    .then((response) => {
      return res.status(200).send(JSON.stringify(response.data));
    })
    .catch((error) => {
      return res.status(error.response.status).send(error.response.data);
    });
};

// import { handleResponse, handleError } from "./apiUtils";
// export function getScenarios(query = null) {
//   let baseUrl = `${process.env.API_URL}/scenarios?limit=${query.limit}&skip=${query.skip || 0}&sort=${query.sort || 'filter_level_1'}`;
//   delete query.limit;
//   delete query.skip;
//   delete query.sort;
//   return fetch(baseUrl, {
//     method: 'POST',
//     headers: { "content-type": "application/json" },
//     body: JSON.stringify(query)
//   })
//     .then(handleResponse)
//     .catch(handleError);
// }
