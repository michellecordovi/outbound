import './Logo.css'
import { MountainSnow } from 'lucide-react';

function Logo() {
	return (
		<div class="logo">
			<MountainSnow />
			<span className="logo-text">Outbound</span>
		</div>
	);
}

export default Logo;