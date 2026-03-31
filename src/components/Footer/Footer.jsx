import './Footer.css'
import Logo from '../Logo/Logo'

function Footer() {
    return (
        <footer>
            <div id='footer-sections'>
                <div>
                    <Logo />
                    <p>Weather-smart gear lists for every adventure. Built by an outdoor enthusiast who got tired of forgetting the rain shell.</p>
                </div>

                <div id="footer-nav">
                    <h3>Explore</h3>
                    <a href="">Gear Planner</a>
                    <a href=''>About</a>
                    <a href="">Contact</a>
                </div>

                <div>
                    <h3>Support the Project</h3>
                    <p>Outbound is free to use. If it helped you pack smarter, consider fueling the next feature!</p>
                    <button>Buy Me a Coffee</button>
                </div>
            </div>

            <div id='copyright'>
                <p>Michelle</p>
            </div>
        </footer>
    )
}

export default Footer;