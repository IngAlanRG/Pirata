import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import { Link } from 'react-router-dom';
function Footer() {
	return (
		<footer className="footer">
			<div className="container">
				<div className="row">
					<div className="footer-col">
						<h4>TESCHA</h4>
						<ul>
							<li><Link to="/about">Sobre nosotros</Link></li>
							<li><Link to="/mision">Misión visión</Link></li>
							<li><a href="#">privacy policy</a></li>
							<li><a href="#">affiliate program</a></li>
						</ul>
					</div>
					<div className="footer-col">
						<h4>Ayuda</h4>
						<ul>
							<li><a href="#">Foro</a></li>
							<li><a href="#">shipping</a></li>
							<li><a href="#">returns</a></li>
							<li><a href="#">order status</a></li>
							<li><a href="#">payment options</a></li>
						</ul>
					</div>
					<div className="footer-col">
						<h4>online shop</h4>
						<ul>
							<li><a href="#">watch</a></li>
							<li><a href="#">bag</a></li>
							<li><a href="#">shoes</a></li>
							<li><a href="#">dress</a></li>
						</ul>
					</div>
					<div className="footer-col">
						<h4>Redes sociales</h4>
						<div className="social-links">
							<a href="#"><FacebookIcon /></a>
							<a href="#"><TwitterIcon /></a>
							<a href="#"><WhatsAppIcon /></a>
							<a href="#"><MarkEmailReadIcon /></a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
