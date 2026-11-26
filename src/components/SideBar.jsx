import React, { useState } from "react";
import {
	FaUser,
	FaBriefcase,
	FaCode,
	FaPenNib,
	FaGraduationCap,
} from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import { Tooltip } from "react-tooltip";

// Each entry is a section on the page, in scroll order.
export const sections = [
	{ id: "welcome", label: "Welcome", icon: FaUser },
	{ id: "experience", label: "Experience", icon: FaBriefcase },
	{ id: "projects", label: "Projects", icon: FaCode },
	{ id: "writing", label: "Writing", icon: FaPenNib },
	{ id: "education", label: "Education", icon: FaGraduationCap },
	{ id: "testimonials", label: "Testimonials", icon: BsStars },
];

const Sidebar = ({ activeId }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="bg-gray-950 text-white w-full sm:w-32 h-20 sm:h-full flex flex-row sm:flex-col justify-center items-center p-1 fixed sm:fixed top-0 left-0 sm:top-0 sm:left-0 sm:z-0 z-10">
			<nav
				aria-label="Sections"
				className="flex flex-row sm:flex-col justify-center w-full sm:space-y-6 space-x-3 sm:space-x-0 items-center"
			>
				{sections.map(({ id, label, icon: Icon }) => {
					const active = activeId === id;
					return (
						<a
							key={id}
							href={`#${id}`}
							aria-label={label}
							aria-current={active ? "true" : undefined}
							className={`flex items-center sm:justify-center rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-300 ${
								active ? "text-white" : "hover:text-purple-500"
							}`}
						>
							<div
								className={`rounded-full border-2 border-purple-500 p-2 sm:p-3 transition-colors duration-300 ${
									active ? "bg-purple-500" : "bg-transparent"
								}`}
								data-tooltip-id="my-tooltip"
								data-tooltip-content={label}
								data-tooltip-place="top"
								onMouseEnter={() => setIsOpen(true)}
								onClick={() => setIsOpen(false)}
							>
								<Icon className="text-lg sm:text-2xl" aria-hidden="true" />
							</div>
						</a>
					);
				})}
			</nav>
			<Tooltip id="my-tooltip" isOpen={isOpen} />
		</div>
	);
};

export default Sidebar;
