import React from "react";
import myImage from "../assets/my_photo.png";
import { FaDownload, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import resumePDF from "../assets/my_resume.pdf";
import { Reveal } from "../components/Section";
import SocialLinks from "../components/SocialLinks";
import { email, location } from "../data/contact";

const Intro = () => {
	return (
		<section
			id="welcome"
			className="min-h-[calc(100vh-5rem)] sm:min-h-screen flex items-center px-4 sm:px-8 py-16"
		>
			<Reveal className="max-w-5xl mx-auto w-full flex flex-col md:flex-row items-center gap-10 md:gap-16">
				<img
					src={myImage}
					alt="Shilpa Perera"
					className="rounded-full w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 object-cover shrink-0"
				/>
				<div className="text-center md:text-left font-serif text-white">
					<p className="font-sans text-sm font-semibold uppercase tracking-widest text-blue-300">
						Hi there, I'm
					</p>
					<h1 className="text-4xl sm:text-6xl font-bold mt-2">
						Shilpa Perera
					</h1>
					<p className="text-xl sm:text-2xl text-blue-100 mt-3">
						Software Engineer · Thakshana Technologies
					</p>
					<p className="text-base sm:text-lg text-gray-300 mt-5 max-w-xl">
						Computer Science &amp; Engineering graduate from the University
						of Moratuwa, with 2+ years of experience as a Software
						Engineer building production web and mobile apps using
						Next.js, Flutter and Go for secure communication solutions.
						Adaptable and solution-oriented, with a strong drive to take
						on complex challenges and deliver high-quality software.
						Currently expanding into cybersecurity, cloud, DevOps and
						networking.
					</p>
					<div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
						<a
							href={resumePDF}
							download="Shilpa_Perera_Resume.pdf"
							className="inline-flex items-center px-6 py-3 bg-blue-500 hover:bg-blue-700 font-bold rounded-full transition duration-300"
						>
							<FaDownload className="mr-2" aria-hidden="true" /> Download
							Resume
						</a>
						<a
							href={`mailto:${email}`}
							className="inline-flex items-center px-6 py-3 border-2 border-blue-500 hover:bg-blue-500 font-bold rounded-full transition duration-300"
						>
							<FaEnvelope className="mr-2" aria-hidden="true" /> Email Me
						</a>
					</div>
					<div className="mt-8 flex flex-wrap items-center justify-center md:justify-start gap-x-8 gap-y-4">
						<SocialLinks />
						<p className="flex items-center gap-2 text-gray-300">
							<FaMapMarkerAlt aria-hidden="true" /> {location}
						</p>
					</div>
				</div>
			</Reveal>
		</section>
	);
};

export default Intro;
