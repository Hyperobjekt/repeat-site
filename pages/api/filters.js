// const axios = require("axios");
const data = require("../../_data/nzap_filters.json");
import { setCors } from "../../_helpers/cors";

export default async (req, res) => {
  await setCors(req, res, ["GET", "HEAD"]);
  // let headers = { "Content-Type": "application/json" };

  return res.status(200).send(JSON.stringify(data));

  // let url = `${process.env.REPEAT_API}filters`;
  // let config = { method: "get", url, headers };
  // return axios(config)
  //   .then((response) => {
  //     return res.status(200).send(JSON.stringify(response.data));
  //   })
  //   .catch((error) => {
  //     return res.status(error.response.status).send(error.response.data);
  //   });
};

// import { handleResponse, handleError } from "./apiUtils";
// const baseUrl = process.env.REPEAT_API + "/filters";
// export function getFilters() {
//   console.log("FETCHING...", process.env.NEXT_REPEAT_API);
//   return fetch(baseUrl, {
//     method: "GET",
//     headers: { "content-type": "application/json" },
//   })
//     .then(handleResponse)
//     .catch(handleError);
// }
