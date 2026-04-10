import Hero from "../../components/Hero/Hero";
import TripPlannerForm from "./components/TripPlannerForm/TripPlannerForm";
import ResultsPreview from "./components/ResultsPreview/ResultsPreview";

function HomePage() {
	const heroContent = {
		intro: "Expedition Ready",
		heading: <h1>Never Forget <span>Crucial Gear</span> Again.</h1>,
		subheading: "Build custom packing lists based on your specific route, activities, and local weather forecasts."
	};

	return (
		<main>
			<Hero intro={heroContent.intro} heading={heroContent.heading} subheading={heroContent.subheading} />
			<TripPlannerForm />
			<ResultsPreview />
		</main>
	);
}

export default HomePage;
