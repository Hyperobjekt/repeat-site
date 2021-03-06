import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { Pagination, Progress } from "antd";
import { Download } from 'react-bootstrap-icons'
import * as moment from 'moment-timezone';
import { loadFilters, loadFilterAction } from "../../../redux/actions/filters.actions";
import { loadScenarios } from "../../../redux/actions/scenarios.actions";
import { assembleQuery, convertToCSV } from '../../../_helpers';
import { handleResponse, handleError } from "../../api/apiUtils";
import ExploreFilters from "./filters";
import ExploreBenchmark from "./benchmark";
import ExploreTimeSeries from "./timeseries";
import "antd/lib/style/index.css";
import "antd/lib/select/style/index.css";
import "antd/lib/pagination/style/index.css";
const { policies } = require("../../../_data/policies.json");

const ExploreLoader = ({ canChangeCols }) => {
	let sheetArr = [];
	let pageLimit = 25;
	const dispatch = useDispatch();
	const router = useRouter();
	let routerQuery = { ...router.query };
	delete routerQuery.comparison;
	routerQuery.state = routerQuery.state || "national";
	routerQuery.policy = routerQuery.policy || policies[0].slug;
	let filters = useSelector((state) => state.filters);
	let scenarios = useSelector((state) => state.scenarios);
	let count = useSelector((state) => state.count);
	const [activePolicy, setActivePolicy] = useState({});
	const [params, setParams] = useState(routerQuery);
	const [apiQuery, setApiQuery] = useState({});
	const [loading, setLoading] = useState(true);
	const [reloading, setReloading] = useState(false);

	useEffect(async () => {
		let query = getQuery();
		dispatch(loadFilters({ ...query }));
		dispatch(loadScenarios({ ...routerQuery }));
		setApiQuery(query);
		const newPolicy = policies.find(p => p.slug === routerQuery.policy);
		setActivePolicy(newPolicy);
	}, []);

	useEffect(async () => {
		const newPolicy = policies.find(p => p.slug === routerQuery.policy);
		setActivePolicy(newPolicy);
	}, [routerQuery.policy]);

	useEffect(() => {
		setLoading(false);
		setReloading(false);
	}, [scenarios]);

	const getQuery = () => {
		let query = {};
		query.page = router.query.page || 1;
		query.limit = router.query.limit || 25;
		query.state = router.query.state || "national";
		query.category = router.query.categories ? router.query.categories.split(",") : [];
		query.subcategory = router.query.subcategories ? router.query.subcategories.split(",") : [];
		return query;
	};

	const setFilterClasses = (color, active) => {
		return active ? `inline-block rounded border-2 border-transparent text-sm mb-3 mr-3 px-3 py-1 bg-repeat-${color} text-white` : `inline-block rounded text-sm mb-3 mr-3 px-3 py-1 border-2 border-repeat-${color} text-repeat-${color} text-white`;
	};

	const changePage = (page, pageSize) => {
		let limit = pageSize ? pageSize : pageLimit;
		let newFilters = { ...filters, page, limit };
		let newApiQuery = { ...apiQuery, page, limit };
		dispatch(loadFilterAction(newFilters));
		dispatch(loadScenarios(newApiQuery));
		setApiQuery(newApiQuery);
	}

	const getScenarios = (query = null) => {
		let baseUrl = `/api/scenarios?limit=${query.limit}&skip=${query.skip || 0}&sort=${query.sort || 'filter_level_1'}`;
		delete query.limit;
		delete query.skip;
		delete query.sort;
		return fetch(baseUrl, {
			method: 'POST',
			headers: { "content-type": "application/json" },
			body: JSON.stringify(query)
		})
			.then(handleResponse)
			.catch(handleError);
	}

	const downloadCSV = () => {
		let converted = convertToCSV(scenarios);
		let csvContent = 'data:text/csv;charset=utf-8,' + [converted.headers.join(','), ...converted.csvArr].join('\n');
		var encodedUri = encodeURI(csvContent);
		var link = document.createElement("a");
		link.setAttribute("href", encodedUri);
		link.setAttribute("download", `repeat-data-${moment().format()}.csv`);
		document.body.appendChild(link); // Required for FF
		link.click();
	}

	// const updatePolicy = (policy) => {
	//   setActivePolicy(policy);
	// }
	
	return (
		<div className="">
			<h2 className="text-repeat-teal font-obliqua text-3xl font-bold mb-3">
				Examine the Data
			</h2>
			<p className="text-repeat-dark">
				Select a policy to explore below. Use the Benchmark tab to compare the policy???s data against benchmarks and/or other policies. Use the Time Series tab to view the policy???s data over time. You can also refine results by energy category, using the Filters section.
			</p>

			<ExploreFilters
				filters={filters}
				policy={activePolicy}
				setFilterClasses={setFilterClasses}
				updatePolicy={setActivePolicy}
				canChangeCols={canChangeCols} />

			<div className="w-full table relative overflow-hidden">
				{loading ? <div className="repeat-spinner">LOADING...</div> :
					[...scenarios].map((e) => e.values).flat().length ? (
						<div id="tableContainer" className="max-h-explorer min-h-explorer overflow-hidden table pt-10">
							{filters.comparison === "benchmark" ?
								<ExploreBenchmark
									policy={activePolicy}
									tableData={scenarios}
									reloading={reloading} />
								: <ExploreTimeSeries
										policy={activePolicy}
										tableData={scenarios}
										reloading={reloading} />
							}
						</div>
					) : (
						<div className="w-full text-center py-10 px-20">
							<div className="px-10 py-24 w-full md:w-9/12 bg-repeat-light-blue m-auto rounded-xl">
								<h2 className="text-2xl text-repeat">Sorry! This result is only available at the national level.</h2>
								<h4 className="text-xl text-repeat-dark">Adjust the filters and try again.</h4>
							</div>
						</div>
					)
				}
			</div>

			<div className="flex gap-10 pt-6">
				<div className="w-4/12">
					<button className="border border-black pt-2 pb-2 pr-3 pl-3 rounded flex items-center" onClick={() => { downloadCSV() }}>
						<span className="pr-2">Download this table as a CSV </span>
						<Download className="" />
					</button>
				</div>
				<div className="w-8/12 flex justify-end">
					<Pagination
						total={count}
						current={Number(filters.page) || 1}
						pageSize={Number(filters.limit) || pageLimit}
						defaultPageSize={pageLimit}
						pageSizeOptions={[25, 50, 100, 200, 500]}
						onChange={changePage}
						showSizeChanger />
				 </div>
			</div>



			<div className="flex pt-12 content-end">
				<a rel="license" href="http://creativecommons.org/licenses/by/4.0/" target="_blank" className="block ml-auto">
					<img alt="Creative Commons License" style={{ borderWidth: 0 }} src="https://i.creativecommons.org/l/by/4.0/88x31.png" />
				</a>
				<br />
				{/*This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/" target="_blank">Creative Commons Attribution 4.0 International License</a>.*/}
			</div>

		</div>
	);
};

export default ExploreLoader;
