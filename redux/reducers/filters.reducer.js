import * as types from "../actions/_types";
import initialState from "../initial_state";
import { assembleFilters } from "../../_helpers";

// const resetLevelTwo = (filters) => {
//   let activeCategories = [...filters.levelOneFilters].filter((e) => e.active).map((e) => e.slug);
//   let levelTwoFilters = [...filters.levelTwoFilters].map((e) => {
//     let subcategory = { ...e };
//     if (!activeCategories.includes(e.levelOneSlug)) {
//       subcategory.active = false;
//     }
//     return subcategory;
//   });
//   let newFilters = { ...filters, levelTwoFilters };

//   return { ...newFilters, url: generateUrl(newFilters) };
// };

// const setFilters = (stateFilters, actionFilters) => {
//   return { ...stateFilters, ...resetLevelTwo(actionFilters) };
// };

export default function filtersReducer(state = initialState.filters, action) {
  switch (action.type) {
    case types.LOAD_FILTER_ACTION:
      return assembleFilters(state.filters, action.filters);
    // case types.SET_FILTER_ACTION:
    //   return setFilters(state.filters, action.filters);
    default:
      return state;
  }
}
