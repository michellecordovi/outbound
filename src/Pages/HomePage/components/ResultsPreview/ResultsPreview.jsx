import "./ResultsPreview.css";
import { ListChecks, ThermometerSun, Map, Compass } from 'lucide-react';

function ResultsPreview() {
	const previews = [
		{
			title: "Smart Gear Checklist",
			description:
				"Dynamic packing lists tailored to your specific activities and trip duration.",
			icon: ListChecks,
			color: "#2D5016",
			bg: "#2D501610",
		},
		{
			title: "Micro-Climate Weather",
			description:
				"Hyper-local forecasts for your exact elevation and coordinates.",
			icon: ThermometerSun,
			color: "#D97706",
			bg: "#D9770610",
		},
		{
			title: "Trail Recommendations",
			description:
				"Curated routes matching your skill level and time constraints.",
			icon: Map,
			color: "#4A5568",
			bg: "#4A556810",
		},
		{
			title: "Local Knowledge",
			description:
				"Insider tips on permits, water sources, and nearby amenities.",
			icon: Compass,
			color: "#C4A77D",
			bg: "#C4A77D10",
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
								<div className='icon-container' style={{ backgroundColor: element.bg, width: "fit-content", padding:'16px', borderRadius: '12px' }}>
									<element.icon color={element.color} size={32} />
								</div>
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
