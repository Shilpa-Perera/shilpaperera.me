import React, { useEffect, useRef, useState } from "react";

// Fades its children in the first time they scroll into view.
export const Reveal = ({ children, className = "" }) => {
	const ref = useRef(null);
	const [shown, setShown] = useState(false);

	useEffect(() => {
		const el = ref.current;
		if (!el || !("IntersectionObserver" in window)) {
			setShown(true);
			return;
		}
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setShown(true);
					observer.disconnect();
				}
			},
			{ threshold: 0.05 }
		);
		observer.observe(el);
		return () => observer.disconnect();
	}, []);

	return (
		<div
			ref={ref}
			className={`transition duration-700 ease-out motion-reduce:transition-none ${
				shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
			} ${className}`}
		>
			{children}
		</div>
	);
};

// Every section on the page uses this so headings, width and spacing match.
const Section = ({ id, title, children }) => (
	<section id={id} className="px-4 sm:px-8 py-16 sm:py-24">
		<Reveal className="max-w-5xl mx-auto">
			<h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-10">
				{title} ...
			</h2>
			{children}
		</Reveal>
	</section>
);

export default Section;
