import React, { useEffect } from "react";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/outline";
import Stats from "./stats";

const PolicyPreview = ({ policy }) => {
	return (
		<div className="container max-w-screen-lg pb-8 mb-24 mx-auto bg-right bg-contain bg-no-repeat"
			style={{
				bckgroundPositionX: "right 10%",
				backgroundImage: `url(/images/backgrounds/${policy.slug.includes("bbb") ? "policy" : policy.slug}.jpg)`
			}}>
			{/* <h2 className="text-2xl md:text-4xl pt-8 text-repeat-black font-extrabold font-obliqua">
				{policy.title}
			</h2>*/}
			<Stats policy={policy} />
			<div className="md:w-1/2 pb-5 text-lg pt-8 text-repeat-black">
				<p>{policy.subTitle}</p>
				<Link href={`/policies/ + ${policy.slug}`}>
					<a className="text-black hover:text-repeat">
						<span className="inline-block align-middle leading-5 border-b-2 border-black hover:border-repeat">Read more</span>
						<span className="inline-block align-middle">
							<ChevronRightIcon className="h-4 w-4" />
						</span>
					</a>
				</Link>
			</div>
		</div>
	);
};

export default PolicyPreview;
