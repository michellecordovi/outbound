import "./Hero.css";
import TopoBackground from "../TopoBackground";

function Hero() {
	return (
		<section className="hero">
            <TopoBackground />
			<div className='hero-text-container'>
				<p className='hero-intro'>Expidition Ready</p>
				<h1>Never Forget <span>Crucial Gear</span> Again.</h1>
				<p className="subheading">
					Custom packing lists based on your specific route,
					activities, and local weather forecasts.
				</p>
			</div>
		</section>
	);
}

export default Hero;
