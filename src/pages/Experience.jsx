import React from "react";
import Section from "../components/Section";
import Timeline from "../components/Timeline";
import { experience } from "../data/journey";

const Experience = () => (
	<Section id="experience" title="Where I've worked">
		<Timeline items={experience} />
	</Section>
);

export default Experience;
