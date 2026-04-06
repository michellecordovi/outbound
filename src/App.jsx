import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import HomePage from './Pages/HomePage/HomePage';
import AboutPage from "./Pages/AboutPage/AboutPage";

function App() {
	return (
		<>
			<NavBar />
			{/* <HomePage /> */}
			<AboutPage />
			<Footer />
		</>
	);
}

export default App;
