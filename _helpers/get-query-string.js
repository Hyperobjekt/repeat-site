// export const getQueryString = queryObject => {
//   const removeDuplicates = arr => [...new Set(arr)]
//   queryObject.categories = removeDuplicates(queryObject.categories)
//   queryObject.subcategories = removeDuplicates(queryObject.subcategories)
//   return "?" + Object.keys(queryObject).map((key) => {
//     const element = queryObject[key];
//     if (!element || !element.length) return null;
//     if (typeof element !== 'string' && element.length) return `${key}=${element.join(',')}`
//     if (typeof element === 'string') return `${key}=${element}`
//   }).filter(e => e).join('&')
// }

export const generateUrl = (filters) => {
  let stateArr = [...filters.usStates].filter((us) => us.active);
  let urlArr = [];
  let comparison = filters.comparison;
  let state = stateArr.length ? stateArr[0].slug : "national";
  let categories = [...filters.levelOneFilters]
    .filter((category) => category.active)
    .map((category) => category.slug)
    .join(",");
  let subcategories = [...filters.levelTwoFilters]
    .filter((subcategory) => subcategory.active)
    .map((subcategory) => subcategory.slug)
    .join(",");

  let page = filters.page;
  let limit = filters.limit;
  if (comparison) urlArr.push(`comparison=${comparison}`);
  if (state) urlArr.push(`state=${state}`);
  if (categories) urlArr.push(`categories=${categories}`);
  if (subcategories) urlArr.push(`subcategories=${subcategories}`);

  if (page) urlArr.push(`page=${page}`);
  if (limit) urlArr.push(`limit=${limit}`); //PAGE_LIMIT
  if (urlArr.length) return `?${urlArr.join("&")}`;
  return "";
};
