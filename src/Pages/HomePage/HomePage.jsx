import Hero from '../../components/Hero/Hero'
import TripPlannerForm from './components/TripPlannerForm/TripPlannerForm';
import ResultsPreview from './components/ResultsPreview/ResultsPreview';

function HomePage() {
    return (
        <main>
            <Hero />
            <TripPlannerForm />
            <ResultsPreview />
        </main>
    )
}

export default HomePage;