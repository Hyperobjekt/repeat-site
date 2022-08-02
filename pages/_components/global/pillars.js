import React, { useEffect } from "react";

const Pillars = ({ policy = [] }) => {
	const pillars = policy.pillars ? policy.pillars : [];
	let color_index = 0;
	return (
		<div className="pt-0 pb-10">
			<div className="container max-w-screen-lg m-auto px-0 sm:px-0">

				<div className="md:w-1/2 pt-2">
					<h3 className="font-bold font-obliqua text-repeat-teal text-3xl mb-5">Pillars of Decarbonization</h3>
					<p className="text-md">
						The Princeton <a href="https://netzeroamerica.princeton.edu/" target="_blank" rel="noreferrer noopener">Net-Zero America</a> study highlights six key “Pillars of Decarbonization,” essential building blocks of a net-zero emissions U.S. economy. Here’s how the {policy.navTitle} impacts each of these six pillars.
					</p>
				</div>

				<div className="grid pt-6 grid-cols-1 md:grid-cols-3 gap-10 place-content-center">

					{pillars.map((pillar, index) => {
						index++;
						color_index++;
						color_index = color_index <= 6 ? color_index : 1;
						return(
							<div className="block md:pb-8" key={index}>
								<h4 className={`font-bold text-lg border-b-4 border-repeat-table-${color_index}`}>
									<span className="font-utopia text-repeat-burnt">
										{index}:{" "}
									</span>
									{pillar.label}
								</h4>
								<div className="font-utopia text-lg text-repeat-black">
									<ul>
										{pillar.bullets.map((b, i) => (
											<li key={i} className="pt-2">{b}</li>
										))}
									</ul>
								</div>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	);
};

export default Pillars;
