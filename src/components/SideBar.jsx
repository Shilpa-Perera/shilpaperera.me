import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaGraduationCap, FaCode, FaEnvelope } from "react-icons/fa";
import { BsStars } from "react-icons/bs";

const Sidebar = () => {
	const [activeLink, setActiveLink] = useState(""); // State to track active link

	// Function to handle click on a link
	const handleLinkClick = (link) => {
		setActiveLink(link);
	};

	return (
		<div className="bg-gray-950 text-white w-full h-screen sm:w-32 flex flex-row sm:flex-col justify-center items-center p-4 fixed sm:relative top-0 sm:top-auto left-0">
			<nav className="flex sm:flex-col flex-row justify-around sm:justify-center w-full sm:space-y-8 sm:w-auto space-x-8 sm:space-x-0 items-center">
				<Link
					to="/"
					className={`flex items-center space-x-2 ${
						activeLink === "/"
							? "text-purple-500"
							: "hover:text-purple-500"
					}`}
					onClick={() => handleLinkClick("/")}
				>
					<div
						className={`rounded-full bg-transparent border-2 border-purple-500 p-4 ${
							activeLink === "/" && "bg-purple-500"
						}`}
					>
						<FaUser size={30} />
					</div>
				</Link>
				<Link
					to="/education"
					className={`flex items-center space-x-2 ${
						activeLink === "/education"
							? "text-purple-500"
							: "hover:text-purple-500"
					}`}
					onClick={() => handleLinkClick("/education")}
				>
					<div
						className={`rounded-full bg-transparent border-2 border-purple-500 p-4 ${
							activeLink === "/education" && "bg-purple-500"
						}`}
					>
						<FaGraduationCap size={30} />
					</div>
				</Link>
				<Link
					to="/projects"
					className={`flex items-center space-x-2 ${
						activeLink === "/projects"
							? "text-purple-500"
							: "hover:text-purple-500"
					}`}
					onClick={() => handleLinkClick("/projects")}
				>
					<div
						className={`rounded-full bg-transparent border-2 border-purple-500 p-4 ${
							activeLink === "/projects" && "bg-purple-500"
						}`}
					>
						<FaCode size={30} />
					</div>
				</Link>
				<Link
					to="/testimonial"
					className={`flex items-center space-x-2 ${
						activeLink === "/testimonial"
							? "text-purple-500"
							: "hover:text-purple-500"
					}`}
					onClick={() => handleLinkClick("/testimonial")}
				>
					<div
						className={`rounded-full bg-transparent border-2 border-purple-500 p-4 ${
							activeLink === "/testimonial" && "bg-purple-500"
						}`}
					>
						<BsStars size={30} />
					</div>
				</Link>
				<Link
					to="/contact"
					className={`flex items-center space-x-2 ${
						activeLink === "/contact"
							? "text-purple-500"
							: "hover:text-purple-500"
					}`}
					onClick={() => handleLinkClick("/contact")}
				>
					<div
						className={`rounded-full bg-transparent border-2 border-purple-500 p-4 ${
							activeLink === "/contact" && "bg-purple-500"
						}`}
					>
						<FaEnvelope size={30} />
					</div>
				</Link>
			</nav>
		</div>
	);
};

export default Sidebar;
