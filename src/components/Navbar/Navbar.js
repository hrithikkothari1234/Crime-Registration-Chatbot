import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./Navbar.css";
import MyImage from "../assets/main_logo.jpg";

const MyNavbar = () => {
  return (
	<Navbar fixed="top" expand="lg" id="nav">
	  <div className="container">
		<Navbar.Brand href="/">
		  <img src={MyImage} className="frcrce" alt="frcrce" />
		</Navbar.Brand>
		<Navbar.Toggle className="ham" aria-controls="basic-navbar-nav" />
		<Navbar.Collapse id="basic-navbar-nav">
		  <Nav className="ml-auto">
			<Nav.Link href="/admin" className="linky">Admin</Nav.Link>
			<Nav.Link href="/team" className="linky">Team</Nav.Link>
		  </Nav>
		</Navbar.Collapse>
	  </div>
	</Navbar>
  );
};

export default MyNavbar;