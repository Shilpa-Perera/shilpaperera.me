import React from "react";
import Section from "../components/Section";
import { education } from "../data/journey";

const Education = () => (
	<Section id="education" title="Where I studied">
		<div className="space-y-6">
			{education.map((item) => {
				const Icon = item.icon;
				return (
					<article
						key={item.id}
						className="flex gap-4 sm:gap-6 p-5 sm:p-6 bg-white rounded-lg shadow font-serif text-gray-700"
					>
						<div className="rounded-full bg-blue-500 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center shrink-0">
							<Icon className="text-black text-xl sm:text-2xl" aria-hidden="true" />
						</div>
						<div>
							<h3 className="text-lg sm:text-xl font-bold text-gray-900">
								{item.title}
							</h3>
							<p className="text-base sm:text-lg">{item.institution}</p>
							<p className="text-sm text-gray-500">{item.year}</p>
							{item.points.map((point) => (
								<p key={point} className="mt-3 text-sm sm:text-base">
									{point}
								</p>
							))}
						</div>
					</article>
				);
			})}
		</div>
	</Section>
);

export default Education;
