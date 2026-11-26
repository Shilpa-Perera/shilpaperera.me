import React from "react";
import { FaGithub, FaMediumM } from "react-icons/fa";
import { projects, blogs } from "../data/projects";

// Same card look as the My Journey page: white card, serif text, details always visible.
const Card = ({ image, title, children, link }) => (
	<article className="flex flex-col bg-white rounded-lg shadow overflow-hidden font-serif text-gray-700 transition-shadow duration-300 hover:shadow-xl">
		<img
			src={image}
			alt=""
			loading="lazy"
			className="w-full aspect-video object-cover border-b border-gray-200"
		/>
		<div className="flex flex-col flex-1 p-4 sm:p-5">
			<h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
				{title}
			</h3>
			{children}
			{link && (
				<a
					href={link.url}
					target="_blank"
					rel="noopener noreferrer"
					className="mt-auto pt-4 self-start inline-flex items-center gap-2 text-sm font-sans font-semibold text-blue-700 hover:text-blue-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
				>
					<link.icon size={18} aria-hidden="true" />
					{link.label}
					<span className="sr-only">: {title} (opens in a new tab)</span>
				</a>
			)}
		</div>
	</article>
);

const Section = ({ title, children }) => (
	<section className="mb-16 last:mb-0">
		<h2 className="text-white text-3xl sm:text-4xl font-bold font-serif mb-8">
			{title}
		</h2>
		{children}
	</section>
);

const Projects = () => {
	return (
		<div className="min-h-screen bg-gradient-to-r from-gray-950 to-blue-900 py-6 sm:py-12">
			<h1 className="animate-slideInUp text-center text-white text-5xl sm:text-7xl font-bold font-serif mb-12">
				Projects
			</h1>
			<div className="px-4 sm:pl-28 sm:pr-12 lg:px-32 max-w-7xl mx-auto animate-slideInUp">
				<Section title="Things I've Built">
					<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
						{projects.map((project) => (
							<Card
								key={project.id}
								image={project.image}
								title={project.title}
								link={
									project.githubUrl && {
										url: project.githubUrl,
										label: "View on GitHub",
										icon: FaGithub,
									}
								}
							>
								<p className="text-sm sm:text-base">
									{project.description}
								</p>
								{project.tech && (
									<ul
										className="mt-3 flex flex-wrap gap-2"
										aria-label="Technologies"
									>
										{project.tech.map((t) => (
											<li
												key={t}
												className="rounded-full bg-blue-100 text-blue-900 text-xs font-sans font-medium px-2.5 py-1"
											>
												{t}
											</li>
										))}
									</ul>
								)}
							</Card>
						))}
					</div>
				</Section>

				<Section title="Blog Articles">
					<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
						{blogs.map((blog) => (
							<Card
								key={blog.id}
								image={blog.image}
								title={blog.title}
								link={{
									url: blog.mediumUrl,
									label: "Read on Medium",
									icon: FaMediumM,
								}}
							>
								<p className="text-sm sm:text-base line-clamp-4">
									{blog.start}
								</p>
							</Card>
						))}
					</div>
				</Section>
			</div>
		</div>
	);
};

export default Projects;
