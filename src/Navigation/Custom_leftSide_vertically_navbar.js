import React, { useState } from "react";
import "../Questions/Questions_List.css";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
export default function Custom_leftSide_vertically_navbar() {
  const [expanded, setExpanded] = useState(false);
  return (
    <React.Fragment>
      <Navbar
        collapseOnSelect
        expand="lg"
        // bg="dark"
        id="leftt"
        expanded={expanded}
      >
        <Navbar.Toggle
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => setExpanded(false)} as={NavLink} to="/">
              Homes
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link
              onClick={() => setExpanded(false)}
              as={NavLink}
              to="/about"
              className="change-color"
            >
              Abouts
            </Nav.Link>
            <Nav.Link
              onClick={() => setExpanded(false)}
              as={NavLink}
              to="/careers"
            >
              Careers
            </Nav.Link>
            <Nav.Link
              onClick={() => setExpanded(false)}
              as={NavLink}
              to="/question"
            >
              Questionss
            </Nav.Link>
            <Nav.Link
              onClick={() => setExpanded(false)}
              as={NavLink}
              to="/book"
            >
              Bookss
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
}
