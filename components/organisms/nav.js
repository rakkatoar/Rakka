import { Navbar, Nav } from 'react-bootstrap';
import Link from 'next/link';

export default function test() {
	return (
		<>
			<Navbar collapseOnSelect expand="lg" variant="dark" style={{ background: "#0086CF" }} >
				<Link href="/"><Navbar.Brand><img src="/beranda/logo.svg" /></Navbar.Brand></Link>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link className="text-light" href="/trends">Trends</Nav.Link>
						<Nav.Link className="text-light" href="#pricing">Explore</Nav.Link>
						<Nav.Link className="text-light" href="#pricing">Collection</Nav.Link>
						<Nav.Link className="text-light" href="#pricing">About Us</Nav.Link>
					</Nav>
					<Nav>
						<Nav.Link href="/billing"><img className="mr-4" src="/beranda/logo_cart.svg" /></Nav.Link>
						<Nav.Link href="/sign_in"><img className="mr-4" src="/beranda/logo_user.svg" /></Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</>
	);
}