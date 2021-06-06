import Link from 'next/link';
import {
	Button, 
	Navbar,
  Nav,
  Form,
  FormControl,
  Popover,
  OverlayTrigger,
  Tooltip} from "react-bootstrap";
	import AtomText from "../atoms/text";
	import { useRouter } from "next/router";

export default function nav() {
	let user;
  const router = useRouter();
  if (typeof Storage !== "undefined") {
		user = JSON.parse(localStorage.getItem("user_id"));
  }
	
	const handleLogout = () => {
		localStorage.removeItem("user_id");
		router.push("/sign_in");
	}

	const popUpUser = (
    <Popover id="popover-basic" style={{ width: "200px" }}>
      <Popover.Content>
        <AtomText value={user ? user[0].USER_NAME : "User Name"} size="13px" weight="600" />
        <AtomText value="Logout" onClick={handleLogout} size="10px" marginTop="-10px" />
      </Popover.Content>
    </Popover>
  );

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
						{/* <Nav.Link href="/sign_in"><img className="mr-4" src="/beranda/logo_user.svg" /></Nav.Link> */}
					</Nav>
					{user ? (
            <OverlayTrigger
              trigger="click"
              placement="bottom"
              overlay={popUpUser}
            >
              <img className="mr-4" src="/beranda/logo_user.svg" />
            </OverlayTrigger>
          ) : (
            <Nav.Link href="/sign_in">
                <img className="mr-4" src="/beranda/logo_user.svg" />
            </Nav.Link>
          )}
				</Navbar.Collapse>
			</Navbar>
		</>
	);
}