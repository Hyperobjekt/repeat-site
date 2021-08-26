import * as types from "./_types";
// import * as filtersApi from "../../pages/api/filters";

// export const setFilterAction = (filters) => ({ type: types.SET_FILTER_ACTION, filters });
export const loadFilterAction = (filters) => ({ type: types.LOAD_FILTER_ACTION, filters });

const getFilters = async () => {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  const requestOptions = {
    method: "GET",
    headers: headers,
    redirect: "follow",
  };
  const results = await fetch(`/api/filters`, requestOptions);
  if (results.status === 200) return await results.json();
  throw results;
};

export const loadFilters = () => async (dispatch) => {
  let filters = await getFilters();
  await dispatch(loadFilterAction(filters));
};
