import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import Section from "../components/Section";
import TechTags from "../components/TechTags";
import { projects } from "../data/projects";

const ProjectCard = ({ project }) => (
	<article className="flex flex-col bg-white rounded-lg shadow overflow-hidden font-serif text-gray-700 transition-shadow duration-300 hover:shadow-xl">
		<img
			src={project.image}
			alt=""
			loading="lazy"
			className="w-full aspect-video object-cover border-b border-gray-200"
		/>
		<div className="flex flex-col flex-1 p-4 sm:p-5">
			<h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
				{project.title}
			</h3>
			<p className="text-sm sm:text-base">{project.description}</p>
			<TechTags tech={project.tech} />
			{project.githubUrl && (
				<a
					href={project.githubUrl}
					target="_blank"
					rel="noopener noreferrer"
					className="mt-auto pt-4 self-start inline-flex items-center gap-2 text-sm font-sans font-semibold text-blue-700 hover:text-blue-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
				>
					<FaGithub size={18} aria-hidden="true" />
					View on GitHub
					<span className="sr-only">: {project.title} (opens in a new tab)</span>
				</a>
			)}
		</div>
	</article>
);

const Projects = () => {
	const [showAll, setShowAll] = useState(false);
	const featured = projects.filter((p) => p.featured);
	const others = projects.filter((p) => !p.featured);

	return (
		<Section id="projects" title="Things I've built">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				{featured.map((project) => (
					<ProjectCard key={project.id} project={project} />
				))}
			</div>

			{others.length > 0 && (
				<>
					{showAll && (
						<div
							id="more-projects"
							className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
						>
							{others.map((project) => (
								<ProjectCard key={project.id} project={project} />
							))}
						</div>
					)}
					<div className="mt-8 text-center">
						<button
							type="button"
							onClick={() => setShowAll(!showAll)}
							aria-expanded={showAll}
							aria-controls="more-projects"
							className="px-6 py-3 border-2 border-blue-500 text-white hover:bg-blue-500 font-serif font-bold rounded-full transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
						>
							{showAll
								? "Show fewer projects"
								: `Show all projects (${others.length} more)`}
						</button>
					</div>
				</>
			)}
		</Section>
	);
};

export default Projects;
