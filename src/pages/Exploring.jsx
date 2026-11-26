import React from "react";
import Section from "../components/Section";
import { FaExternalLinkAlt } from "react-icons/fa";
import { exploring, certifications } from "../data/exploring";

const Exploring = () => (
	<Section id="exploring" title="Currently exploring">
		<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
			{exploring.map((area) => {
				const Icon = area.icon;
				return (
					<article
						key={area.id}
						className="flex flex-col p-5 sm:p-6 bg-white rounded-lg shadow font-serif text-gray-700 transition-shadow duration-300 hover:shadow-xl"
					>
						<div className="rounded-full bg-blue-500 w-12 h-12 flex items-center justify-center">
							<Icon className="text-black text-xl" aria-hidden="true" />
						</div>
						<h3 className="mt-4 text-lg sm:text-xl font-bold text-gray-900">
							{area.title}
						</h3>
						<p className="mt-3 font-sans text-xs font-semibold uppercase tracking-wider text-gray-500">
							So far
						</p>
						<p className="mt-1 text-sm sm:text-base">{area.soFar}</p>
						<p className="mt-4 font-sans text-xs font-semibold uppercase tracking-wider text-gray-500">
							Next up
						</p>
						<ul className="mt-2 flex flex-wrap gap-2">
							{area.nextUp.map((topic) => (
								<li
									key={topic}
									className="rounded-full border border-dashed border-blue-400 text-blue-900 text-xs font-sans font-medium px-2.5 py-1"
								>
									{topic}
								</li>
							))}
						</ul>
					</article>
				);
			})}
		</div>

		{certifications.length > 0 && (
			<>
				<h3 className="mt-12 mb-4 font-serif text-xl sm:text-2xl font-bold text-white">
					Certifications
				</h3>
				<ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
					{certifications.map((cert) => {
						const Icon = cert.icon;
						return (
							<li
								key={cert.id}
								className="flex items-center gap-4 p-4 bg-white rounded-lg shadow font-serif text-gray-700"
							>
								<div className="rounded-full bg-blue-100 w-12 h-12 flex items-center justify-center shrink-0">
									<Icon className="text-blue-900 text-2xl" aria-hidden="true" />
								</div>
								<div className="min-w-0">
									<p className="font-bold text-gray-900">{cert.title}</p>
									<p className="text-sm text-gray-500">
										{cert.issuer} · {cert.year}
									</p>
									<a
										href={cert.url}
										target="_blank"
										rel="noopener noreferrer"
										className="mt-1 inline-flex items-center gap-1.5 text-sm font-sans font-semibold text-blue-700 hover:text-blue-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
									>
										View credential
										<FaExternalLinkAlt size={11} aria-hidden="true" />
										<span className="sr-only">: {cert.title} (opens in a new tab)</span>
									</a>
								</div>
							</li>
						);
					})}
				</ul>
			</>
		)}
	</Section>
);

export default Exploring;
