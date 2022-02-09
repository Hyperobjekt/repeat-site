import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { loadScenarios } from "../../../redux/actions/scenarios.actions";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { ChevronRight, ChevronLeft } from 'react-bootstrap-icons'
const { policies } = require("../../../_data/policies.json");

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export const BenchmarkTable = ({ policy, tableData, filters, reloading }) => {
	const [vsWith, setVsWith] = useState("RIGHT"); // LEFT || RIGHT
	const [diffType, setDiffType] = useState("ABSOLUTE"); // ABSOLUTE || PERCENT
	const [fromPos, setFromPos] = useState("left");
	const [toPos, setToPos] = useState("right");
	const [leftPol, setLeftPol] = useState(null);
	const [rightPol, setRightPol] = useState(null);
	const activePolicy = policy || {};

	useEffect(() => {
		setLeftPol(activePolicy.slug !== "frozen" ? "frozen" : policies.find(p => p.slug !== "frozen" && p.slug !== activePolicy.slug).slug); //frozen = Frozen
		setRightPol(activePolicy.slug !== "core" ? "core" : policies.find(p => p.slug !== "core" && p.slug !== activePolicy.slug).slug); //core = Net Zero
	}, [policy]);

	const toggleVs = () => {
		setVsWith(vsWith === "RIGHT" ? "LEFT" : "RIGHT");
		setFromPos(fromPos === "left" ? "right" : "left");
		setToPos(toPos === "right" ? "left" : "right");
	};

	const getCatColor = (category) => {
		let filteredCategory = filters.levelOneFilters.filter((cat) => cat.label === category);
		return filteredCategory.length ? filteredCategory[0].color : "";
	};

	const getColColor = (position) => {
		return position === vsWith ? "" : "text-repeat-gray";
	};

	const updateDiff = (diff) => {
		setDiffType(diff);
	};

	const calculateDelta = (repeatValue, vsValue, year) => {
		let r = Number(repeatValue[year]),
				v = Number(vsValue ? vsValue[year] : 0);
		if (diffType === "ABSOLUTE") return formatDelta((r - v));
		if (diffType === "PERCENT") return formatDelta((((r - v) / v) * 100))+"%";
	};

	const formatDelta = (delta) => {
		delta = Number(delta);
		if(isNaN(delta) || !isFinite(delta)) delta = (0).toFixed(2);
		else if(Math.abs(delta) >= 100) delta = delta.toFixed(0);
		else if(Math.abs(delta) >= 10) delta = delta.toFixed(1);
		else if(Math.abs(delta) >= 1) delta = delta.toFixed(2);
		else delta = delta.toFixed(2);
		if(Number(delta) === 0) delta = (0).toFixed(2);
		if(Number(delta) >= 0) delta = `+${delta}`;
		return delta;
	};

	function classNames(...classes) {
		return classes.filter(Boolean).join(" ");
	}

	const PolicySelect = ({ position }) => {
		let policySlug, otherPolicySlug, onClick, menuItemsClasses;

		if(position === "left") {
			policySlug = leftPol;
			otherPolicySlug = rightPol;
			onClick = setLeftPol;
			menuItemsClasses = "origin-top-right absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none";
		}

		if(position === "right") {
			policySlug = rightPol;
			otherPolicySlug = leftPol;
			onClick = setRightPol;
			menuItemsClasses = "origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none";
		}

		const policy = policies && policySlug ? policies.find(p => p.slug === policySlug) : {};

		return(
			<Menu as="div" className="w-40 relative inline-block text-left z-10">
				{({ open }) => (
					<>
						<div>
							<Menu.Button className={`overflow-hidden relative flex w-full bg-white rounded-md px-2 py-2 border-2 border-inherit border-repeat-neutral hover:border-black`}>
								<div className="whitespace-nowrap">
									{policy.colTitle}
								</div>
								<ChevronDownIcon
									style={{boxShadow: "0 0 10px 10px white"}}
									className="absolute right-0 top-0 h-full w-5 bg-white" aria-hidden="true" />
							</Menu.Button>
						</div>

						<Transition show={open} as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
							<Menu.Items static className={menuItemsClasses}>
								<div className="py-1 max-h-60 overflow-auto">
									{policies
										? policies.filter(p => p.slug !== activePolicy.slug).map((policy) => {
												return(
													<Menu.Item key={policy.slug}>
														{({ active, disabed }) => {
															let className = "w-full text-left block px-4 py-2 text-sm ";
															if(policy.slug === policySlug || active) {
																className += "bg-gray-100 text-gray-900";
															} else if(otherPolicySlug === policy.slug) {
																className += "text-gray-400 pointer-events-none";
															} else {
																className += "text-gray-700";
															}
															return(
																<button
																	onClick={() => onClick(policy.slug)}
																	className={className}>
																	{policy.navTitle}
																</button>
															);
														}}
													</Menu.Item>
												 );
											})
										: null}
								</div>
							</Menu.Items>
						</Transition>
					</>
				)}
			</Menu>
		)
	};

	const vsEnClasses = "w-15 flex items-center border border-gray-500 px-2 py-1 text-xs rounded-md bg-white text-black";
  const vsDisClasses = "w-15 flex items-center border border-gray-500 px-2 py-1 text-xs rounded-md bg-black text-white pointer-events-none";

	return (
		<div id="tableContainer__shell" className="container m-auto h-full w-full font-effra transition-colors duration-300 ease-in-out">
			<div id="highlight" className={`absolute top-0 h-full bg-gray-200 rounded-lg transition-all duration-300 ease-in-out highlight--${toPos}`}></div>

			<div className="absolute z-10 top-14 vs--left text-center">
				<button className={vsWith === "LEFT" ? vsDisClasses : vsEnClasses}
								disabled={vsWith === "LEFT"}
								onClick={() => toggleVs()}><ChevronLeft className="mr-2" /> VS.</button>
			</div>

			<div className="absolute z-10 top-14 vs--right text-center">
				<button className={vsWith === "RIGHT" ? vsDisClasses : vsEnClasses}
								disabled={vsWith === "RIGHT"}
								onClick={() => toggleVs()}>VS. <ChevronRight className="ml-2" /></button>
			</div>

			<div className={`absolute z-10 pt-10 vs--${toPos} text-center`}>
				<div className="block pt-3 pb-2">Show difference as</div>
				<div className="block text-center">
					<button
						onClick={() => {
							updateDiff("ABSOLUTE");
						}}
						className={`${diffType === "ABSOLUTE" ? "bg-black text-white" : "bg-white text-black"} inline-block border border-black focus:outline-none px-2 py-1 text-xs rounded-bl-md rounded-tl-md`}>
						Absolute
					</button>
					<button
						onClick={() => {
							updateDiff("PERCENT");
						}}
						className={`${diffType === "PERCENT" ? "bg-black text-white" : "bg-white text-black"} inline-block border border-black focus:outline-none px-2 py-1 text-xs rounded-br-md rounded-tr-md`}>
						Percent
					</button>
				</div>
			</div>

			<table className="table-fixed w-full relative border-collapse pt-8">
				<thead className="text-left">
					<tr className="table w-full table-fixed text-base tracking-wide	mb-10">
						<th className="p-2" colSpan="2">
							Category
						</th>
						<th className={`p-2 ${getColColor("LEFT")}`} colSpan="3">
							<PolicySelect position="left" />
						</th>
						<th className="p-2" colSpan="2">
							{activePolicy.colTitle}
						</th>
						<th className="p-2" colSpan="1"></th>
						<th className={`p-2 ${getColColor("RIGHT")}`} colSpan="2">
							<PolicySelect position="right" />
						</th>
					</tr>
					<tr className="table w-full table-fixed text-base tracking-wide	">
						<th className="px-2 pt-8 pb-3" colSpan="2"></th>
						<th className={`px-2 pt-8 pb-3 ${getColColor("LEFT")}`}>2030</th>
						<th className={`px-2 pt-8 pb-3 ${getColColor("LEFT")}`} colSpan="2">2050</th>
						<th className="px-2 pt-8 pb-3">2030</th>
						<th className="px-2 pt-8 pb-3" colSpan="2">2050</th>
						<th className={`px-2 pt-8 pb-3 ${getColColor("RIGHT")}`}>2030</th>
						<th className={`px-2 pt-8 pb-3 ${getColColor("RIGHT")}`}>2050</th>
					</tr>
				</thead>
				<tbody className={`w-full max-h-96 overflow-auto block text-sm transition-opacity duration-300 delay-100 ${reloading ? "opacity-25" : ""}`}>
					{tableData
						? tableData.map((row, i) => {
								return row.values.length ? (
									<Fragment key={i}>
										<tr className={`bg-repeat-${getCatColor(row.category)} text-white rounded-md table w-full table-fixed`}>
											<td className="p-2" colSpan="10">
												<span>
													<strong>
														{row.category} - {row.subcategory}
													</strong>
												</span>
												&nbsp;&nbsp;
												<span>( {row.units} )</span>
											</td>
										</tr>
										{row.values
											.map((valueRow) => {
												if (vsWith === "LEFT") {
													valueRow[activePolicy.slug].deltas[2030] = calculateDelta(valueRow[activePolicy.slug], valueRow[leftPol], 2030);
													valueRow[activePolicy.slug].deltas[2050] = calculateDelta(valueRow[activePolicy.slug], valueRow[leftPol], 2050);
												}
												if (vsWith === "RIGHT") {
													valueRow[activePolicy.slug].deltas[2030] = calculateDelta(valueRow[activePolicy.slug], valueRow[rightPol], 2030);
													valueRow[activePolicy.slug].deltas[2050] = calculateDelta(valueRow[activePolicy.slug], valueRow[rightPol], 2050);
												}
												return valueRow;
											})
											.map((valueRow, vi) => {
												return (
													<tr className="table w-full table-fixed hover:bg-repeat hover:bg-opacity-5" key={vi}>
														<td className="p-2" colSpan="2">
															{valueRow.variable}
														</td>

														<td className={`p-2 ${getColColor("LEFT")}`}>
															{valueRow[leftPol] ? valueRow[leftPol][2030] : 0}
														</td>
														<td className={`p-2 ${getColColor("LEFT")}`} colSpan="2">
															{valueRow[leftPol] ? valueRow[leftPol][2050] : 0}
														</td>

														<td className="p-2">
															<div className="flex">
																<div className="w-10">
																	{valueRow[activePolicy.slug][2030]}
																</div>
																<div className="pl-2 flex text-xs text-repeat-dark">
																	<div className="my-auto ml-auto">
																		{valueRow[activePolicy.slug].deltas[2030]}
																	</div>
																</div>
															</div>
														</td>
														<td className="p-2">
															<div className="flex">
																<div className="w-10">
																	{valueRow[activePolicy.slug][2050]}
																</div>
																<div className="pl-2 flex text-xs text-repeat-dark">
																	<div className="my-auto ml-auto">
																		{valueRow[activePolicy.slug].deltas[2050]}
																	</div>
																</div>
															</div>
														</td>
														<td className="p-2">
														</td>

														<td className={`p-2 ${getColColor("RIGHT")}`}>
															{valueRow[rightPol] ? valueRow[rightPol][2030] : 0}
														</td>
														<td className={`p-2 ${getColColor("RIGHT")}`}>
															{valueRow[rightPol] ? valueRow[rightPol][2050] : 0}
														</td>
													</tr>
												);
											})}
									</Fragment>
								) : null;
							})
						: null}
				</tbody>
			</table>
		</div>
	);
};

const ExploreBenchmark = ({ policy, tableData, reloading }) => {
	const router = useRouter();
	const dispatch = useDispatch();
	const filters = useSelector((state) => state.filters);
	const scenarios = useSelector((state) => state.scenarios);
	useEffect(() => {
		router.push(filters.url, undefined, { shallow: true });
	}, [filters]);

	return (
		<div className="text-xs">
			<BenchmarkTable policy={policy} tableData={tableData} filters={filters} reloading={reloading} />
		</div>
	);
};

export default ExploreBenchmark;
