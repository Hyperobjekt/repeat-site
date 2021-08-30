import * as types from "./_types";

const policyMapper = {
  "biden-administration-plan": "Biden",
};

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
  throw results;
};

export const loadScenarios = (policy) => async (dispatch) => {
  let query = {
    policy: policyMapper[policy.policy],
  };
  let scenarios = await getScenarios(query);
  await dispatch(loadScenariosActionSuccess(scenarios.data || scenarios));

  // return function (dispatch) {
  //   dispatch(beginApiCall());
  // let assembledQuery = assembleQuery(filterUrl);
  //   return scenariosApi
  //     .getScenarios(assembledQuery)
  //     .then((scenarios) => {
  //       dispatch(loadScenariosActionSuccess(scenarios.data));
  //       dispatch(setCountAction(scenarios.count));
  //     })
  //     .catch((err) => {
  //       dispatch(loadScenariosActionFailure());
  //       throw err;
  //     });
  // };
};
