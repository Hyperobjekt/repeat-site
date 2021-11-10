import * as types from "./_types";
// import * as filtersApi from "../../pages/api/filters";

export const setFilterAction = (filters) => ({ type: types.SET_FILTER_ACTION, filters });
export const loadFilterAction = (filters) => ({ type: types.LOAD_FILTER_ACTION, filters });

const getFilters = async (query) => {
  let result;
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  const requestOptions = {
    method: "GET",
    headers: headers,
    redirect: "follow",
  };
  const results = await fetch(`/api/filters`, requestOptions);
  if (results.status === 200) result = await results.json();
  result.usStates = result.usStates.map((state) => ({ ...state, active: state.slug === query.state }));

  result.levelOneFilters = result.levelOneFilters.map((cat) => ({ ...cat, active: query.category.includes(cat.slug) }));
  result.levelTwoFilters = result.levelTwoFilters.map((subcat) => ({ ...subcat, active: query.subcategory.includes(subcat.slug) }));
  return result;
};

export const loadFilters = (query) => async (dispatch) => {
  let filters = await getFilters(query);
  return await dispatch(loadFilterAction(filters));
};
