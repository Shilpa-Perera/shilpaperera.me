import React from "react";
import { FaLinkedin, FaQuoteLeft } from "react-icons/fa";
import Section from "../components/Section";
import { testimonials } from "../data/testimonials";

const TestimonialCard = ({ item }) => (
	<figure className="bg-white rounded-lg shadow p-6 sm:p-10 font-serif text-gray-700">
		<FaQuoteLeft className="text-blue-300 text-3xl sm:text-4xl mb-4" aria-hidden="true" />
		<blockquote className="space-y-4 text-base sm:text-lg leading-relaxed">
			{item.quote.map((paragraph) => (
				<p key={paragraph}>{paragraph}</p>
			))}
		</blockquote>
		<figcaption className="mt-6 pt-6 border-t border-gray-200 flex flex-wrap items-center justify-between gap-4">
			<div>
				<p className="font-bold text-gray-900">{item.author}</p>
				<p className="text-sm text-gray-500">
					{item.company} · {item.context}
				</p>
			</div>
			{item.linkedinUrl && (
				<a
					href={item.linkedinUrl}
					target="_blank"
					rel="noopener noreferrer"
					className="inline-flex items-center gap-2 text-sm font-sans font-semibold text-blue-700 hover:text-blue-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
				>
					<FaLinkedin size={18} aria-hidden="true" />
					View on LinkedIn
					<span className="sr-only">(opens in a new tab)</span>
				</a>
			)}
		</figcaption>
	</figure>
);

const Testimonials = () => (
	<Section id="testimonials" title="What people say">
		<div className="space-y-8">
			{testimonials.map((item) => (
				<TestimonialCard key={item.id} item={item} />
			))}
		</div>
	</Section>
);

export default Testimonials;
