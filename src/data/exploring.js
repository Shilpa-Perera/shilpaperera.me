import { FaAws, FaCloud, FaNetworkWired, FaShieldAlt } from "react-icons/fa";
import { SiCisco } from "react-icons/si";

// Newest first. `url` links to the public Credly badge.
export const certifications = [
	{
		id: "cisco-intro-cybersecurity",
		title: "Introduction to Cybersecurity",
		issuer: "Cisco Networking Academy",
		year: "2026",
		url: "https://www.credly.com/badges/8dd3dc99-5a6f-41a6-a735-c0f3043d7dbc/public_url",
		icon: SiCisco,
	},
	{
		id: "aws-cloud-practitioner-essentials",
		title: "AWS Cloud Practitioner Essentials",
		issuer: "Amazon Web Services",
		year: "2023",
		url: "https://www.credly.com/badges/2b1ea02b-274c-44f6-a9f4-b5993d32f38d/public_url",
		icon: FaAws,
	},
];

// Areas I'm growing into. `soFar` is experience I already have; `nextUp` is
// what I'm learning next. Update `nextUp` as things move into `soFar`.
export const exploring = [
	{
		id: "cybersecurity",
		title: "Cybersecurity",
		soFar:
			"Built features for secure communications products, including secure forums and remote device destruction. Completed Cisco's Introduction to Cybersecurity.",
		nextUp: ["Secure coding", "Threat modelling", "Security+"],
		icon: FaShieldAlt,
	},
	{
		id: "cloud-devops",
		title: "Cloud & DevOps",
		soFar:
			"Containerised services with Docker, built cloud-native and event-driven systems, and write Go in production. Completed AWS Cloud Practitioner Essentials.",
		nextUp: ["CI/CD pipelines", "Kubernetes", "AWS"],
		icon: FaCloud,
	},
	{
		id: "networking",
		title: "Networking",
		soFar:
			"Built network configuration, firmware updates and real-time status monitoring for a production modem control GUI.",
		nextUp: ["TCP/IP in depth", "Routing & switching", "Network monitoring"],
		icon: FaNetworkWired,
	},
];
