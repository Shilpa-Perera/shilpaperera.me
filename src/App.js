// src/App.jsx

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/SideBar";
import About from "./pages/About";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
	return (
		<Router>
			<div className="flex animate-slideInUp">
				<Sidebar />
				<div className="flex-1 overflow-y-auto h-screen scroll-smooth">
					<Routes>
						<Route path="/" element={<About />} />
						<Route path="/education" element={<Education />} />
						<Route path="/projects" element={<Projects />} />
						<Route path="/contact" element={<Contact />} />
					</Routes>
				</div>
			</div>
		</Router>
	);
}

export default App;
