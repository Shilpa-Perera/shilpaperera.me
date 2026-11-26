import React, { useState } from "react";
import { experience, education } from "../data/journey";

const JourneyCard = ({ item }) => {
	const [expanded, setExpanded] = useState(false);
	const Icon = item.icon;
	// Long entries show their first point and hide the rest behind "Show more".
	const hasMore = item.points.length > 1;
	const visiblePoints = expanded ? item.points : item.points.slice(0, 1);
	const detailsId = `${item.id}-details`;

	return (
		<li className="relative pl-14 sm:pl-20 pb-8 last:pb-0 animate-slideInUp">
			<div className="absolute left-0 top-0 rounded-full bg-blue-500 border-white border-4 w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center">
				<Icon className="text-black text-lg sm:text-2xl" aria-hidden="true" />
			</div>
			<article className="p-4 sm:p-5 bg-white rounded shadow font-serif text-gray-700 transition-shadow duration-300 hover:shadow-xl">
				<div className="flex flex-wrap items-start justify-between gap-2">
					<h3 className="text-lg sm:text-xl font-bold text-gray-900">{item.title}</h3>
					{item.current && (
						<span className="rounded-full bg-green-100 text-green-800 text-xs font-sans font-semibold px-2.5 py-1">
							Current
						</span>
					)}
				</div>
				<p className="text-base sm:text-lg">{item.institution}</p>
				<p className="text-sm text-gray-500">{item.year}</p>

				<div id={detailsId} className="mt-3 text-sm sm:text-base">
					{item.client && (
						<p className="mb-2">
							<span className="font-bold">Client:</span> {item.client}
						</p>
					)}
					{hasMore ? (
						<ul className="list-disc pl-5 space-y-2">
							{visiblePoints.map((point) => (
								<li key={point}>{point}</li>
							))}
						</ul>
					) : (
						<p>{item.points[0]}</p>
					)}
				</div>

				{hasMore && (
					<button
						type="button"
						onClick={() => setExpanded(!expanded)}
						aria-expanded={expanded}
						aria-controls={detailsId}
						className="mt-2 text-sm font-sans font-semibold text-blue-700 hover:text-blue-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
					>
						{expanded
							? "Show less"
							: `Show ${item.points.length - 1} more`}
					</button>
				)}

				{item.tech && (
					<ul className="mt-3 flex flex-wrap gap-2" aria-label="Technologies">
						{item.tech.map((t) => (
							<li
								key={t}
								className="rounded-full bg-blue-100 text-blue-900 text-xs font-sans font-medium px-2.5 py-1"
							>
								{t}
							</li>
						))}
					</ul>
				)}
			</article>
		</li>
	);
};

const JourneySection = ({ title, items }) => (
	<section className="mb-14 last:mb-0">
		<h2 className="text-white text-3xl sm:text-4xl font-bold font-serif mb-8">
			{title}
		</h2>
		<ol className="relative before:content-[''] before:absolute before:w-1 before:bg-blue-300 before:top-0 before:bottom-0 before:left-[1.125rem] sm:before:left-[1.625rem]">
			{items.map((item) => (
				<JourneyCard key={item.id} item={item} />
			))}
		</ol>
	</section>
);

const Education = () => {
	return (
		<div className="min-h-screen bg-gradient-to-r from-gray-950 to-blue-900 py-6 flex flex-col justify-center sm:py-12">
			<h1 className="animate-slideInUp text-center text-white text-5xl sm:text-7xl font-bold font-serif mb-12">
				My Journey
			</h1>
			<div className="py-3 px-4 sm:px-0 w-full grid grid-cols-1 sm:grid-cols-5 gap-4">
				<div className="hidden sm:block sm:col-span-1"></div>
				<div className="sm:col-span-3 max-w-3xl w-full mx-auto">
					<JourneySection title="Work Experience" items={experience} />
					<JourneySection title="Education" items={education} />
				</div>
				<div className="hidden sm:block sm:col-span-1"></div>
			</div>
		</div>
	);
};

export default Education;
