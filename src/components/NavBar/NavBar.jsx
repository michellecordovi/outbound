import "./NavBar.css";
import Logo from "../Logo/Logo";

function NavBar() {
	return (
		<header>
			<div className="header-container container">
				<nav>
					<Logo />
					<button>Buy me a coffee!</button>
				</nav>
			</div>
		</header>
	);
}

export default NavBar;
