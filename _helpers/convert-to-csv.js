const { Parser } = require('json2csv');

const order = ["state", "policy", "category", "subcategory", "variable", "units"];

const preparedJSON = (json) => {
	const prepared = json.map((row, i) => {
	  Object.keys(row).filter(key => key.charAt(0) === "_").forEach(key => delete row[key]);
	  const varRows = [];
	  row.values.filter(valObj => {
	    const varRow = { ...row };
	    Object.keys(valObj).forEach((key1) => {
	      if(key1 === "variable") varRow[key1] = valObj[key1];
	      else Object.keys(valObj[key1]).forEach(key2 => key2 !== "deltas" ? varRow[`${key1}_pol_${key2}`] = valObj[key1][key2] : null);
	    });
	    varRows.push(varRow);
	  });
	  return varRows;
	})
	.flat()
	.map(({ variables, values, ...row }) => row);
	return prepared;
}

export const convertToCSV = (json) => {
	const prepared = preparedJSON(json);
  const headers = Object.keys(prepared[0]).filter(key => key.charAt(0) !== '_' && key !== 'id');
  headers.sort((a, b) => order.indexOf(a) > -1 ? order.indexOf(a) - order.indexOf(b) : 1);
  try {
    const parser = new Parser({ fields: headers });
    let csvArr = parser.parse(prepared).split("\n")
    csvArr.shift();
    return { headers, csvArr }
  } catch (err) {
    console.error(err);
  }
}