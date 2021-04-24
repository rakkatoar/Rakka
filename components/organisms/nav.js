import { Navbar, Nav, Form, Row, Col, Container } from 'react-bootstrap';

export default function test() {
	return (
		<>
		<Navbar style={{background:"#0086CF"}} variant="dark">
			<Navbar.Brand href="#home"><img src="/beranda/logo.svg"/></Navbar.Brand>
			<Nav className="mr-auto">
			<Nav.Link className="text-light" href="#home">Trends</Nav.Link>
			<Nav.Link className="text-light" href="#features">Explore</Nav.Link>
			<Nav.Link className="text-light" href="#pricing">Collection</Nav.Link>
			<Nav.Link className="text-light" href="#pricing">About Us</Nav.Link>
			</Nav>
			<Form inline>
				<img className="mr-4" src="/beranda/logo_cart.svg" />
				<img className="mr-4" src="/beranda/logo_user.svg" />
			</Form>
		</Navbar>
	</>
	);
}