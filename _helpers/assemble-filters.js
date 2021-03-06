import { generateUrl } from "./get-query-string";

const getCategories = (filters) => {
  return [...filters.levelOneFilters].map((e) => {
    let category = { ...e };
    return category;
  });
};
const getSubcategories = (filters) => {
  return [...filters.levelTwoFilters].map((e) => {
    let category = { ...e };
    return category;
  });
};

const getUsStates = (filters) => {
  let selectedState = [...filters.usStates].filter((state) => state.active);
  if (!selectedState.length)
    return [...filters.usStates].map((state) => {
      state.active = state.slug === "national";
      return state;
    });
  return [...filters.usStates];
};

export const assembleFilters = (stateFilters, actionFilters) => {
  /*? URL: 
  - comparison=
  - usstate=
  - categories
  - subcategories
  - vsBy=
  - deltaas=
  - q=
  */

  // let comparison = localStorage.getItem("comparison") || actionFilters.comparison || "benchmark";
  let filter = {
    ...stateFilters,
    comparison: actionFilters.comparison || "benchmark",
    usStates: getUsStates(actionFilters),
    levelOneFilters: getCategories(actionFilters),
    levelTwoFilters: getSubcategories(actionFilters),
    page: actionFilters.page || 1,
    limit: actionFilters.limit || 25,
  };
  filter.url = generateUrl(filter);
  return { ...filter };
};
