import React from "react";
import { FaMediumM } from "react-icons/fa";
import Section from "../components/Section";
import { blogs } from "../data/projects";

const Writing = () => (
	<Section id="writing" title="Articles I've written">
		<ul className="space-y-4">
			{blogs.map((blog) => (
				<li key={blog.id}>
					<article className="flex flex-col sm:flex-row bg-white rounded-lg shadow overflow-hidden font-serif text-gray-700 transition-shadow duration-300 hover:shadow-xl">
						<img
							src={blog.image}
							alt=""
							loading="lazy"
							className="w-full sm:w-48 aspect-video sm:aspect-auto object-cover shrink-0"
						/>
						<div className="p-4 sm:p-5">
							<h3 className="text-lg sm:text-xl font-bold text-gray-900">
								{blog.title}
							</h3>
							<p className="mt-1 text-sm sm:text-base line-clamp-2">
								{blog.start}
							</p>
							<a
								href={blog.mediumUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="mt-3 inline-flex items-center gap-2 text-sm font-sans font-semibold text-blue-700 hover:text-blue-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
							>
								<FaMediumM size={18} aria-hidden="true" />
								Read on Medium
								<span className="sr-only">: {blog.title} (opens in a new tab)</span>
							</a>
						</div>
					</article>
				</li>
			))}
		</ul>
	</Section>
);

export default Writing;
