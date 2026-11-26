import React from "react";
import { socialLinks } from "../data/contact";

const SocialLinks = ({ className = "" }) => (
	<ul className={`flex gap-6 text-white ${className}`}>
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
					<Icon size={28} aria-hidden="true" />
				</a>
			</li>
		))}
	</ul>
);

export default SocialLinks;
