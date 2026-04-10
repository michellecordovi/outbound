import "./Hero.css";
import TopoBackground from "../TopoBackground";

function Hero(props) {
	return (
		<section className="hero">
            <TopoBackground />
			<div className='hero-text-container'>
				<p className='hero-intro'>{props.intro}</p>
				{/* <h1>Never Forget <span>Crucial Gear</span> Again.</h1> */}
				<h1>{props.heading}</h1>
				<p className="subheading">
					{props.subheading}
				</p>
			</div>
		</section>
	);
}

export default Hero;
