import { LiaSchoolSolid } from "react-icons/lia";
import { IoSchool } from "react-icons/io5";
import { FaLaptopCode, FaPenAlt } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";

// Newest first. To add an entry, add an object to the right list.
// `current: true` shows a "Current" badge; `client` and `tech` are optional.
export const experience = [
	{
		id: "thakshana",
		title: "Software Engineer",
		institution: "Thakshana Technologies (Pvt) Ltd, Colombo 02",
		year: "2024 June - present",
		current: true,
		client: "KATIM (UAE), secure communications and solutions",
		points: [
			"Implemented and deployed a production modem control GUI in Next.js from end to end, with real-time status monitoring, network configuration, firmware updates, user management and log monitoring, and added end-to-end tests with Playwright.",
			"Developed a Flutter mobile app that works as an internal professional network, with profile and skill management, secure discussion forums and a knowledge base, using Bloc for state management.",
			"Built prototype mobile and smartwatch apps for remote control of Bluetooth hubs and cameras, and for a remote device-destruction feature.",
		],
		tech: ["Next.js", "Flutter", "Bloc State Management", "Go"],
		icon: FaLaptopCode,
	},
	{
		id: "uom-instructor",
		title: "Visiting Instructor",
		institution:
			"Department of Computer Science and Engineering, University of Moratuwa, Sri Lanka.",
		year: "2023 July - 2023 Nov",
		points: [
			"Conducted CS 2053 Computer Architecture practical lab sessions",
		],
		icon: GiTeacher,
	},
	{
		id: "dfn-intern",
		title: "Intern Software Engineer",
		institution: "D F N Technology Pvt Ltd, Malabe, Sri Lanka.",
		year: "2023 Jan - 2023 July",
		points: [
			"Worked on backend implementation of a Hyperledger Fabric blockchain network creator tool.",
		],
		tech: ["Java", "Spring Boot", "Docker", "Hyperledger Fabric"],
		icon: FaLaptopCode,
	},
];

export const education = [
	{
		id: "uom-bsc",
		title: "BSc (Hons) in Computer Science and Engineering",
		institution: "University of Moratuwa, Sri Lanka",
		year: "2020 - 2024",
		points: [
			"GPA - 3.81, Dean's list - semester 1, semester 4, semester 5, semester 6",
		],
		icon: IoSchool,
	},
	{
		id: "al",
		title: "GCE Advanced Level Exam",
		institution: "Gothami Balika Vidyalaya, Colombo 10",
		year: "2015-2018",
		points: ["Passed with 2A passes and a B pass"],
		icon: LiaSchoolSolid,
	},
	{
		id: "ol",
		title: "GCE Ordinary Level Exam",
		institution: "Gothami Balika Vidyalaya, Colombo 10",
		year: "2014",
		points: ["Passed with 9A passes"],
		icon: FaPenAlt,
	},
];
