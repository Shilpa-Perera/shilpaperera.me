import React from "react";
import { FaEnvelope } from "react-icons/fa";
import SocialLinks from "./SocialLinks";
import { email } from "../data/contact";

const Footer = () => (
	<footer className="border-t border-white/10 px-4 sm:px-8 py-16 text-center font-serif text-white">
		<h2 className="text-2xl sm:text-3xl font-bold">Let's work together</h2>
		<p className="mt-2 text-gray-300">
			Have a role or project in mind? I'd love to hear about it.
		</p>
		<a
			href={`mailto:${email}`}
			className="mt-6 inline-flex items-center px-6 py-3 bg-blue-500 hover:bg-blue-700 font-bold rounded-full transition duration-300"
		>
			<FaEnvelope className="mr-2" aria-hidden="true" /> {email}
		</a>
		<SocialLinks className="mt-8 justify-center" />
		<p className="mt-8 text-sm text-gray-400">
			© {new Date().getFullYear()} Shilpa Perera
		</p>
	</footer>
);

export default Footer;
