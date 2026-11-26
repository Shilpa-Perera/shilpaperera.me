import React, { useEffect, useRef, useState } from "react";
import Sidebar, { sections } from "./components/SideBar";
import About from "./pages/About";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Testimonial from "./pages/Testimonial";

// Old multi-page URLs, so links shared before the single-page layout still land
// on the right section.
const legacyPaths = {
	"/education": "journey",
	"/projects": "projects",
	"/testimonial": "testimonials",
	"/contact": "welcome",
};

function App() {
	const scrollRef = useRef(null);
	const [activeId, setActiveId] = useState(sections[0].id);

	// Redirect old page URLs to their section.
	useEffect(() => {
		const id = legacyPaths[window.location.pathname];
		if (id) {
			window.history.replaceState(null, "", `/#${id}`);
			document.getElementById(id)?.scrollIntoView();
		}
	}, []);

	// Highlight the sidebar button for the section in the middle of the screen.
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) setActiveId(entry.target.id);
				});
			},
			{ root: scrollRef.current, rootMargin: "-50% 0px -50% 0px" }
		);
		sections.forEach(({ id }) => {
			const el = document.getElementById(id);
			if (el) observer.observe(el);
		});
		return () => observer.disconnect();
	}, []);

	return (
		<div className="flex flex-col sm:flex-row h-screen">
			<Sidebar activeId={activeId} />
			<main
				ref={scrollRef}
				className="flex-1 overflow-y-auto scroll-smooth pt-20 sm:pt-0 scroll-pt-20 sm:scroll-pt-0 sm:ml-32"
			>
				<section id="welcome">
					<About />
				</section>
				<section id="journey">
					<Education />
				</section>
				<section id="projects">
					<Projects />
				</section>
				<section id="testimonials">
					<Testimonial />
				</section>
			</main>
		</div>
	);
}

export default App;
