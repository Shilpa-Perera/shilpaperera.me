import React from "react";
import myImage from "../assets/my_photo.png";
import {
	FaDownload,
	FaEnvelope,
	FaGithub,
	FaLinkedin,
	FaMapMarkerAlt,
	FaMedium,
} from "react-icons/fa";
import resumePDF from "../assets/my_resume.pdf";

const email = "shilpa.laksahani@gmail.com";

const socialLinks = [
	{
		label: "LinkedIn",
		url: "https://www.linkedin.com/in/shilpa-perera-866522201/",
		icon: FaLinkedin,
	},
	{
		label: "GitHub",
		url: "https://github.com/Shilpa-Perera",
		icon: FaGithub,
	},
	{
		label: "Medium",
		url: "https://medium.com/@laksahaniperera",
		icon: FaMedium,
	},
];

const About = () => {
	return (
		<div className="flex flex-col md:flex-row items-center p-8 bg-gradient-to-r from-gray-950 to-blue-900 min-h-screen">
			<div className="w-full md:w-1/3 animate-slideInUp mb-8 md:mb-0">
				<img
					src={myImage}
					alt="Shilpa Perera"
					className="rounded-full lg:w-128 lg:h-128 object-cover mx-auto"
				/>
			</div>
			<div className="w-full md:w-2/3 md:pl-8 font-serif animate-slideInUp">
				<h1 className="text-5xl lg:text-8xl md:text-6xl  text-center font-serif font-bold mb-4 text-white">
					Hi there !
				</h1>
				<h1 className="text-5xl lg:text-8xl md:text-6xl text-center font-serif font-bold mb-4 text-white">
					I'm Shilpa Perera
				</h1>
				<p className="text-xl md:text-2xl lg:text-3xl text-center text-white">
					Welcome to my portfolio
				</p>
				<div className="mt-8 flex flex-wrap justify-center gap-4">
					<a
						href={resumePDF}
						download="Shilpa_Perera_Resume.pdf"
						className="inline-flex items-center px-6 py-3 bg-blue-500 hover:bg-blue-700 font-bold rounded-full transition duration-300"
					>
						<FaDownload className="mr-2" /> Download Resume
					</a>
					<a
						href={`mailto:${email}`}
						className="inline-flex items-center px-6 py-3 border-2 border-blue-500 text-white hover:bg-blue-500 font-bold rounded-full transition duration-300"
					>
						<FaEnvelope className="mr-2" aria-hidden="true" /> Email Me
					</a>
				</div>
				<ul className="mt-8 flex justify-center gap-6 text-white">
					{socialLinks.map(({ label, url, icon: Icon }) => (
						<li key={label}>
							<a
								href={url}
								target="_blank"
								rel="noopener noreferrer"
								aria-label={`${label} (opens in a new tab)`}
								title={label}
								className="block hover:text-blue-400 transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded"
							>
								<Icon size={32} aria-hidden="true" />
							</a>
						</li>
					))}
				</ul>
				<p className="mt-4 flex items-center justify-center gap-2 text-gray-300">
					<FaMapMarkerAlt aria-hidden="true" /> Colombo, Sri Lanka
				</p>
			</div>
		</div>
	);
};

export default About;
