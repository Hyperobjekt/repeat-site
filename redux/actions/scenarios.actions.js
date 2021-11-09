import * as types from "./_types";

// Export Action creators
export function createScenarioAction(scenario) {
  return { type: types.CREATE_SCENARIO_ACTION, scenario };
}

export function loadScenariosActionSuccess(scenarios = null) {
  return { type: types.LOAD_SCENARIOS_ACTION_SUCCESS, scenarios };
}
export function loadScenariosActionFailure(scenarios = []) {
  return { type: types.LOAD_SCENARIOS_ACTION_FAILURE, scenarios };
}

export function updateScenarioAction(scenario) {
  return { type: types.UPDATE_SCENARIO_ACTION, scenario };
}

export function deleteScenarioAction(scenario) {
  return { type: types.DELETE_SCENARIO_ACTION, scenario };
}

const getScenarios = async (query) => {
  let queryString = Object.keys(query)
    .map((key) => `${key}=${query[key]}`)
    .join("&");
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  const requestOptions = {
    method: "GET",
    headers: headers,
    redirect: "follow",
  };

  const results = await fetch(`/api/scenarios?${queryString}`, requestOptions);
  if (results.status === 200) return await results.json();

  return [];
};

export const loadScenarios = (query) => async (dispatch) => {
  let q = {};
  Object.keys(query).forEach((e) => {
    if (e === "categories") return (q["_category"] = query[e].split(","));
    if (e === "subcategories") return (q["_subcategory"] = query[e].split(","));
    return (q[`_${e}`] = query[e]);
  });
  let scenarios = await getScenarios(q);
  await dispatch(loadScenariosActionSuccess(scenarios.data || scenarios));
};
