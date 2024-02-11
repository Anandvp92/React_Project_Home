import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container,Button,NavbarBrand } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAnchor} from "@fortawesome/free-solid-svg-icons";
import sitelogo from"../assets/images/trend-micro-logo.svg"
import '../componets/Navbar.css'

export function ResponsiveNavbar() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className="justify-content-between custom" fixed="top">
        <Container>
          <Link to="/" className="navbar-brand">
          <FontAwesomeIcon icon={faAnchor} size="2x" />
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav">
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Nav className="ml-auto gap-3">
              <Nav.Link as={Link} to="/">
                The Story
              </Nav.Link>
              <Nav.Link as={Link} to="/store">
                Flavours
              </Nav.Link>
              <Nav.Link as={Link} to="/flavour">
                Upcoming
              </Nav.Link>
              <Nav.Link as={Link} to="/flavour">
                On Demand
              </Nav.Link>
              <Nav.Link as={Link} to="/flavour">
                FAQs
              </Nav.Link>
              <Button variant="danger" size="sm" >Contac Us</Button>{' '}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
