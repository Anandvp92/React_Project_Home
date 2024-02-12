import React, { useState } from "react";
import { Navbar, Nav, Container,Button,NavbarBrand } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAnchor} from "@fortawesome/free-solid-svg-icons";
import '../componets/Navbar.css'
import { Link as ScrollLink } from 'react-scroll';
export function ResponsiveNavbar() {
  return (
    <>
<Navbar className="justify-content-between" expand='lg' variant="dark" fixed="top" style={{ backgroundColor: "black", color: "white", fontSize: "25px", fontWeight: "700" }}>
        <Container>
              <Nav.Link className="navbar-brand " as={ScrollLink} to="section1" smooth={true} duration={100}>
          <FontAwesomeIcon icon={faAnchor} size="2x" />
            </Nav.Link>            
          <Navbar.Toggle aria-controls="responsive-navbar-nav">
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav"  className="justify-content-end">
            <Nav className="ml-auto gap-3">
            <Nav.Link as={ScrollLink} to="section1" smooth={true} duration={100}>
              Home
            </Nav.Link>
              <Nav.Link as={ScrollLink} to="section2" smooth={true} duration={100}>
                Flavours
              </Nav.Link>

              <Nav.Link as={ScrollLink} to="section3" smooth={true} duration={100}>
              Upcoming
              </Nav.Link>
             
              <Nav.Link as={ScrollLink} to="section4" smooth={true} duration={100}>
                On Demand
              </Nav.Link>
              
              <Nav.Link as={ScrollLink} to="section6" smooth={true} duration={100}>
                FAQs
              </Nav.Link>
              <Button variant="danger" as={ScrollLink} to="section5" smooth={true} duration={100} size="lg" >Contac Us</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
