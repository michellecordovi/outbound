import "./AboutPage.css";
import Hero from "../../components/Hero/Hero";

function AboutPage() {
	return (
		<main>
			<Hero />
			<section className="about-me-section">
				<div className="about-me-container">
					<div className="about-me-text-box">
						<h2>Hi, I'm Michelle!</h2>
						<p>
							Hey there — I'm the person behind Outbound. By day,
							I write code. By weekend (and every chance I get),
							I'm somewhere on a trail with a pack on my back,
							dirt on my boots, and probably one crucial item
							forgotten at home. That's actually how this whole
							thing started. One too many trips where I forgot
							rain gear when storms rolled in, or packed a summer
							sleeping bag for a shoulder-season trip. I figured —
							if I can build software that solves complex
							problems, surely I can build something that tells me
							to pack a rain shell when it's going to pour.
							Outbound is the tool I always wished existed:
							something that actually thinks about your specific
							trip — where you're going, what you're doing, how
							long you'll be out, and what the weather's going to
							throw at you. No more generic packing lists. No more
							"I'll remember it this time." Just a smart checklist
							that's got your back so you can focus on the trail
							ahead.
						</p>
					</div>

					<div className="about-me-cards-grid">
						<div className="about-me-card">
							<h3>Outdoor Obsessed</h3>
							<p>
								Hiking, backpacking, climbing— if it involves
								elevation gain and fresh air, count me in.
							</p>
						</div>

						<div className="about-me-card">
							<h3>Outdoor Obsessed</h3>
							<p>
								Hiking, backpacking, climbing— if it involves
								elevation gain and fresh air, count me in.
							</p>
						</div>

						<div className="about-me-card">
							<h3>Outdoor Obsessed</h3>
							<p>
								Hiking, backpacking, climbing— if it involves
								elevation gain and fresh air, count me in.
							</p>
						</div>

						<div className="about-me-card">
							<h3>Outdoor Obsessed</h3>
							<p>
								Hiking, backpacking, climbing— if it involves
								elevation gain and fresh air, count me in.
							</p>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}

export default AboutPage;
