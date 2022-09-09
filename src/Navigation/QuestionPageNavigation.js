import React, { useState } from "react";
import "./Navigation.css";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

//https://stackoverflow.com/questions/40491483/hide-collapse-navbar-after-link-click-react-redux-react-bootstrap

function QuestionPageNavigation() {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <div className="size">
        <Navbar
          collapseOnSelect
          expand="lg"
          // bg="dark"
          id="bgg"
          expanded={expanded}
        >
          <Navbar.Brand onClick={() => setExpanded(false)} as={NavLink} to="/">
            Home
          </Navbar.Brand>
          <Navbar.Toggle
            onClick={() => setExpanded(expanded ? false : "expanded")}
          />
          <Navbar.Collapse id="responsive-navbar-na">
            <Nav className="me-auto">
              {/* <Nav.Link onClick={() => setExpanded(false)} as={NavLink} to="/">
                Home
              </Nav.Link> */}
            </Nav>
            <Nav>
              <Nav.Link
                onClick={() => setExpanded(false)}
                as={NavLink}
                to="/about"
              >
                About
              </Nav.Link>
              <Nav.Link
                onClick={() => setExpanded(false)}
                as={NavLink}
                to="/careers"
              >
                Career
              </Nav.Link>
              <Nav.Link
                onClick={() => setExpanded(false)}
                as={NavLink}
                to="/question"
              >
                Questions
              </Nav.Link>
              <Nav.Link
                onClick={() => setExpanded(false)}
                as={NavLink}
                to="/book"
              >
                Books
              </Nav.Link>
              {/* <Nav.Link onClick={() => setExpanded(false)}>
                <GoogleLogin
                  clientId="362106271336-lvllg1b0gt944t15dkdlkrs165s387v9.apps.googleusercontent.com"
                  render={(renderProps) => (
                    <button
                      className="login"
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                    >
                      Login
                    </button>
                  )}
                  buttonText="Login"
                  isSignedIn={true}
                  cookiePolicy={"single_host_origin"}
                  onSuccess={(response) => {
                    setIsLoggedIn(() => {
                      return { isLoggedIn: true };
                    });
                  }}
                  onFailure={(response) => {
                    setIsLoggedIn(() => {
                      return { isLoggedIn: false };
                    });
                  }}
                />
              </Nav.Link> */}
              {/* <GoogleLogout
                clientId="362106271336-lvllg1b0gt944t15dkdlkrs165s387v9.apps.googleusercontent.com"
                buttonText="Logout"
                onLogoutSuccess={(response) => {
                  setIsLoggedIn(() => {
                    return { isLoggedIn: false };
                  });
                }}
              ></GoogleLogout> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      {/* <div className="size">
        <div className="left">
          <Link className="link" to="/">
            Logo
          </Link>

          <Link className="link" to="/about">
            About
          </Link>

          <Link className="link" to="/careers">
            Career
          </Link>

          <Link className="link" to="/question">
            Questions
          </Link>
        </div>
        <div className="right">
          <Link className="link" to="/book">
            Books
          </Link>
        </div>
      </div> */}
    </>
  );
}

export default QuestionPageNavigation;
