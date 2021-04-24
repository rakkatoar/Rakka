import { Navbar, Nav, Form, Row, Col, Container } from 'react-bootstrap';

export default function test() {
	return (
		<>
			<Navbar collapseOnSelect expand="lg" variant="dark" style={{ background: "#0086CF" }} >
				<Navbar.Brand href="#home"><img src="/beranda/logo.svg" /></Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link className="text-light" href="#features">Trends</Nav.Link>
						<Nav.Link className="text-light" href="#pricing">Explore</Nav.Link>
						<Nav.Link className="text-light" href="#pricing">Collection</Nav.Link>
						<Nav.Link className="text-light" href="#pricing">About Us</Nav.Link>
					</Nav>
					<Nav>
						<Nav.Link href="#deets"><img className="mr-4" src="/beranda/logo_cart.svg" /></Nav.Link>
						<Nav.Link href="#deets"><img className="mr-4" src="/beranda/logo_user.svg" /></Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</>
	);
}