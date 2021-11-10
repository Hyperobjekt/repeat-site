export const assembleQuery = (filterUrl) => {
  let query = {}, skip, limit;
  if (!filterUrl) return query
  filterUrl.substring(1).split('&').forEach(e => {
    let arrays = ['categories', 'subcategories'];
    arrays.includes(e.split('=')[0])
      ? query[e.split('=')[0]] = e.split('=')[1].split(',')
      : query[e.split('=')[0]] = e.split('=')[1]
  })
  if (!query.page) query.page = 1

  let categories = query.categories ? { $or: query.categories.map(category => ({ _filter_level_1: category })) } : null
  let subcategories = query.subcategories ? {
    $or: query.subcategories.map(category => {
      let catArr = category.split('_');
      if (catArr.length === 1) return { _filter_level_2: category }
      if (catArr.length === 2) return { _filter_level_2: catArr[1] }
    })
  } : null
  let examiner = query.explorer === 'pathway' ? { _scenario: query.table } : { _year: query.table }
  let assembled = { $and: [{ _geo: query.state || 'national' }, examiner] }
  if (categories && categories.$or.length) assembled.$and.push(categories)
  if (subcategories && subcategories.$or.length) assembled.$and.push(subcategories)
  if (query.page) skip = (Number(query.page) - 1) * (Number(query.limit) || 25);
  limit = query.limit ? query.limit : 25;
  assembled.limit = Number(limit) + 4;
  assembled.skip = skip > 0 ? skip - 3 : skip;
  assembled.sort = 'alt_l1,alt_l2,alt_v'
  // assembled.sort = '_filter_level_1,_filter_level_2,_variable_name'
  return assembled;
}
