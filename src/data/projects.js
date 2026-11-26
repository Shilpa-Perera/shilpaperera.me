import project1 from "../assets/project_1.png";
import project2 from "../assets/project_2.png";
import project3 from "../assets/project_3.png";
import project4 from "../assets/project_4.png";
import project5 from "../assets/project_5.png";
import project6 from "../assets/project_6.png";
import project7 from "../assets/project_7.png";
import project8 from "../assets/project_8.png";
import project9 from "../assets/project_9.png";

import blog1 from "../assets/blog_1.png";
import blog2 from "../assets/blog_2.png";

// Shown in this order. `tech` and `githubUrl` are optional; leave out
// `githubUrl` to hide the GitHub link.
export const projects = [
	{
		id: "gpa-calculator",
		title: "GPA Calculator",
		description:
			"Customizable and user-friendly application developed using Flutter. It allows users to define their own grading point system, manage semesters, add modules, and calculate their GPA.",
		image: project1,
		githubUrl: "https://github.com/Shilpa-Perera/GPACalculator",
	},
	{
		id: "blockchain-visualiser",
		title: "Cloud-Native Realtime Multi Blockchain Visualiser",
		description:
			"A blockchain visualization framework that can visualize real-time statistics of a blockchain network using cloud-native technologies.",
		image: project3,
		githubUrl: "https://github.com/OneBCVis",
	},
	{
		id: "portfolio",
		title: "My Portfolio",
		description:
			"Portfolio website which showcase projects and other details. It is a responsive web application implemented using React js and tailwind css.",
		image: project4,
		githubUrl: "https://github.com/Shilpa-Perera/my-portfolio",
	},
	{
		id: "letsgo",
		title: "Let'sGo : Indoor positioning using wifi fingerprinting",
		description:
			"Let'sGo indoor navigation app utilises Wi-Fi fingerprinting alongside GPS to track indoor positions effectively.",
		image: project2,
		githubUrl: "https://github.com/Shilpa-Perera/LetsGo",
	},
	{
		id: "booking-service",
		title: "Resource Booking Service - Backend Contribution",
		description:
			"University resource booking system using MOSIP (Modular Opensource Identity Platform) with bio-metric verification.",
		image: project5,
		githubUrl: "https://github.com/cse-mosip/booking-service",
	},
	{
		id: "kryptonaut",
		title: "Kryptonaut : NFT Marketplace",
		description:
			"A decentralized NFT marketplace where users connect their crypto wallet to mint, list, buy and sell NFTs, with ownership and trades recorded on the blockchain.",
		image: project6,
	},
	{
		id: "texas-estore",
		title: "Texas E-store : E-Commerce platform",
		description:
			"A web application that enables the commercial process of buying and selling over the internet. The application has main features for customers to find specific products, cart feature for order management, inventory management and report generation",
		image: project7,
		githubUrl: "https://github.com/Shilpa-Perera/E-Commerce-Platform",
	},
	{
		id: "home-quarantine",
		title: "Home Quarantine Management System",
		description:
			"A web application for continuously monitor the progression of home-quarantined patients with COVID-19. The Application provides mechanism for patients to record their symptoms. The doctors which assigned will monitor the provides feedback.",
		image: project8,
		githubUrl:
			"https://github.com/chathuranga-jayanath-99/home-quarantine-management-system",
	},
	{
		id: "kafka-wikimedia",
		title: "Kafka-Wikimedia",
		description:
			"Simple producer-consumer application using Apache Kafka, Spring Boot and MongoDB",
		image: project9,
		githubUrl: "https://github.com/Shilpa-Perera/kafka-wikimedia",
	},
];

export const blogs = [
	{
		id: "rollups",
		title: "Rollups: Tackling the Blockchain Trilemma",
		start: "Rollups concept entered to the spotlight during Ethereum’s transition from the Proof of Work (PoW) consensus to the Proof of Stake (PoS) consensus. This migration is called “The Merge” and laid the groundwork for scalability upgrades on the network. When it comes to blockchain networks, one question that arises is why scaling is needed?",
		image: blog1,
		mediumUrl:
			"https://medium.com/@laksahaniperera/rollups-tackling-the-blockchain-trilemma-d6b45f681d8f",
	},
	{
		id: "utxo",
		title: "UTXO: Is it a transaction?",
		start: "If you are someone interested in blockchain technology, I’m sure that you have come across this UTXO model. If not don’t worry I will make you a hero from zero UTXO knowledge.",
		image: blog2,
		mediumUrl:
			"https://medium.com/@laksahaniperera/if-you-are-someone-interested-in-blockchain-technology-im-sure-that-you-have-come-across-this-616fba300de1",
	},
];
