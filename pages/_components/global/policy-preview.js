import React, { useEffect } from "react";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/outline";
import Stats from "./stats";

const PolicyPreview = ({ policy = {} }) => {
	return (
		<div className="container max-w-screen-lg pb-8 mb-24 mx-auto bg-right bg-no-repeat"
			style={{
				minHeight: "300px",
				backgroundSize: "300px",
				bckgroundPositionX: "right 10%",
				backgroundImage: policy.slug ? `url(/images/backgrounds/${policy.slug.includes("bbb") ? "policy" : policy.slug}.jpg)` : ""
			}}>
			<h3 className="text-2xl md:text-4xl font-extrabold font-obliqua">
				<Link href={`/policies/${policy.slug}`}>
					<a className="text-repeat-black hover:text-repeat">
						{policy.title}
					</a>
				</Link>
			</h3>

			{policy.stats ?
				<div className="pt-4 pb-8">
					<Stats policy={policy} />
				</div>
			: null}

			<div className="md:w-1/2 text-lg text-repeat-black">
				<p className="pb-4" dangerouslySetInnerHTML={{ __html: policy.desc }} />
				<Link href={`/policies/${policy.slug}`}>
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
