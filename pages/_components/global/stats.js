import React, { useEffect } from "react";
import Link from "next/link";

const Stats = ({ policy = {} }) => {
	const stats = policy.stats ? policy.stats : [];
	return (
		<div>
			<h3 className="font-bold text-2xl">
				<Link href={`/policies/${policy.slug}`}>
					<a className="text-black hover:text-repeat">
						{policy ? policy.title : ""}
					</a>
				</Link>
			</h3>
			{stats.length ?
				<div className="flex flex-wrap pt-6 pb-8">
					{stats.map((stat, i) => (
						<div key={i} className="flex-1 pb-5 sm:pb-0">
							<div className="text-6xl font-bold font-utopia text-repeat-burnt">{stat.value}</div>
							<div className="pt-2 text-s font-bold text-repeat-black">{stat.label}</div>
							<div className="text-s text-repeat-dark">{stat.supportingText}</div>
						</div>
					))}
				</div>
			: null}
		</div>
	);
};

export default Stats;
