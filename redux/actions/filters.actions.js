import * as types from "./_types";

export const setFilterAction = (filters) => ({ type: types.SET_FILTER_ACTION, filters });
export const loadFilterAction = (filters) => ({ type: types.LOAD_FILTER_ACTION, filters });

const getFilters = async (query) => {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  const requestOptions = {
    method: "GET",
    headers: headers,
    redirect: "follow",
  };
  let response;
  const request = await fetch(`/api/filters`, requestOptions);
  if (request.status === 200) filters = await request.json();
  let filters = { ...filters, ...query };
  filters.usStates = filters.usStates.map((state) => ({ ...state, active: state.slug === query.state }));
  filters.levelOneFilters = filters.levelOneFilters.map((cat) => ({ ...cat, active: query.category ? query.category.includes(cat.slug) : false }));
  filters.levelTwoFilters = filters.levelTwoFilters.map((subcat) => ({ ...subcat, active: query.subcategory ? query.subcategory.includes(subcat.slug) : false }));
  return filters;
};

export const loadFilters = (query) => async (dispatch) => {
  let filters = await getFilters(query);
  return await dispatch(loadFilterAction(filters));
};