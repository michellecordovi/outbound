import "./ResultsPreview.css";
import { ListChecks, ThermometerSun, Map, Compass } from 'lucide-react';

function ResultsPreview() {
	const previews = [
		{
			title: "Smart Gear Checklist",
			description:
				"Dynamic packing lists tailored to your specific activities and trip duration.",
			icon: ListChecks,
			color: "text-[#2D5016]",
			bg: "bg-[#2D5016]/10",
		},
		{
			title: "Micro-Climate Weather",
			description:
				"Hyper-local forecasts for your exact elevation and coordinates.",
			icon: ThermometerSun,
			color: "text-[#D97706]",
			bg: "bg-[#D97706]/10",
		},
		{
			title: "Trail Recommendations",
			description:
				"Curated routes matching your skill level and time constraints.",
			icon: Map,
			color: "text-[#4A5568]",
			bg: "bg-[#4A5568]/10",
		},
		{
			title: "Local Knowledge",
			description:
				"Insider tips on permits, water sources, and nearby amenities.",
			icon: Compass,
			color: "text-[#C4A77D]",
			bg: "bg-[#C4A77D]/10",
		},
	];

	return (
		<section className="results-preview-section">
			<div className="results-preview-container container">
				<div>
					<h2>What You'll Get</h2>
					<p className='subheading'>Our planner analyzes your trip details to generate a comprehensive expedition guide.</p>
				</div>

				<div className="results-preview-cards">
					{previews.map((element, index) => {
						return (
							<div
								key={index}
								className="preview-card"
							>
								<element.icon />
								<h3>{element.title}</h3>
								<p>{element.description}</p>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}

export default ResultsPreview;
