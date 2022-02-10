export const updateFiltersFromQuery = (filters, query) => {
  let data = { ...filters }
  // Explorer
  data.explorer = query.explorer || data.explorer
  // levelOneFilters - categories
  data.levelOneFilters = [...filters.levelOneFilters].map(category => ({ ...category, active: query.categories.includes(category.slug) }))
  // levelTwoFilters - subcategories
  data.levelTwoFilters = [...filters.levelTwoFilters].map(subcategory => ({ ...subcategory, active: query.subcategories.includes(subcategory.slug) }))
  // page
  data.page = query.page || data.page
  // comparison
  // data.comparison = query.comparison || data.comparison
  // limit
  data.limit = query.limit || data.limit
  // scenarios
  // table
  data.table = query.table || data.table
  // url
  // usStates
  data.usStates = [...filters.usStates].map(state => ({ ...state, active: state.slug === query.state }));
  // years
  return data
}