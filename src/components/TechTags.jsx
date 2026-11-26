import React from "react";

const TechTags = ({ tech }) =>
	tech ? (
		<ul className="mt-3 flex flex-wrap gap-2" aria-label="Technologies">
			{tech.map((t) => (
				<li
					key={t}
					className="rounded-full bg-blue-100 text-blue-900 text-xs font-sans font-medium px-2.5 py-1"
				>
					{t}
				</li>
			))}
		</ul>
	) : null;

export default TechTags;
