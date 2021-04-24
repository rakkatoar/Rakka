import AtomText from "../components/atoms/text";
import AtomButton from "../components/atoms/button";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar, Nav, Form, Row, Col, Container } from 'react-bootstrap';

export default function test () {
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
	<Container fluid="lg">
		<Row>
		<Col>
			<Row>
				<AtomText value="Peduli Digital Market" fontSize="30px" />
			</Row>
			<Row>
				Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
			</Row>
			<Row>
				<Col>
					<AtomButton value="Explore More" background="red" color="white" fontSize="30px" border="none"/>
				</Col>
				<Col>
					<AtomButton value="Explore More" background="red" color="white" fontSize="30px" border="none"/>
				</Col>
			</Row>
		</Col>
		<Col>
			<img src="/beranda/banner.svg"/>
		</Col>
	</Row>
	</Container>
	<AtomText value="Hello Rakka" color="red" fontSize="30px"/>
	<AtomButton value="Explore More" background="red" color="white" fontSize="30px" border="none"/>
	</>
	);
}
