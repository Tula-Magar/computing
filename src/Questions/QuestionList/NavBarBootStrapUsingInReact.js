import React from "react";
import "../Questions_List.css";
import UseTitle from "../../Title.js";
import "../QuestionList/TitleInReact.css";
import Highlight, { defaultProps } from "prism-react-renderer";
import { Link } from "react-router-dom";
//https://github.com/FormidableLabs/prism-react-renderer

function NavBarBootStrapUsingInReact() {
  UseTitle("How to Create a Navbar using Bootstrap in React?");

  const imports = `   
  import React from "react"
  import { Navbar, Nav } from "react-bootstrap";
  import "bootstrap/dist/js/bootstrap.bundle";
  import { NavLink } from "react-router-dom";
  `;
  const exampleCode = `
  <Navbar
    collapseOnSelect
    sticky="top"
    expand="lg"
    bg="dark"
  >
  <Navbar.Brand
    as={NavLink}
    to="/"
  >
    Computing
  </Navbar.Brand>
  <Navbar.Toggle
    aria-controls="responsive-navbar-nav"
  />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={NavLink} to="/">
      Home
    </Nav.Link> }
    </Nav>
    <Nav>
      <Nav.Link      
        as={NavLink}
        to="/about"
        className="change-color"
      >
        About
      </Nav.Link>
      <Nav.Link
        as={NavLink}
        to="/careers"
      >
        Career
      </Nav.Link>
      <Nav.Link      
        as={NavLink}
        to="/question"
      >
        Questions
      </Nav.Link>
      <Nav.Link  
        as={NavLink}
        to="/book"
      >
        Books
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Navbar>
  `;

  return (
    <>
      <div id="container">
        <div id="left">
          <li className="list">
            <Link className="list" to="/">
              {" "}
              Home
            </Link>
            <Link className="list" to="/">
              {" "}
              Home
            </Link>
            <Link className="list" to="/">
              {" "}
              Home
            </Link>
          </li>
        </div>

        <div id="middle">
          <h1> How to Create a Navbar using Bootstrap in React? </h1>
          <p>
            With the help of Bootstrap, we can create a navbar in react. We
            don't need to worry about the responsive design of the navbar.
            Bootstrap is already responsive. Sometimes you need might to twist
            around using pure css to make the navbar little different. Let's
            begin but first we need to import the bootstrap library in the react
            project.
          </p>
          <h4>Install Packages</h4>
          <pre className="CodeSampleBackground">
            <li className="OneLine">npm install bootstrap --save</li>
            <li className="OneLine">npm install react-bootstrap --save</li>
          </pre>
          <p>
            Those are the libraries that we are going to use to create the
            navbar. <code>--save</code> will add the packages name in the
            package.json file and that will help us to track the dependencies
            and their versions.
          </p>

          <h4>Import Installed Packages</h4>
          <Highlight {...defaultProps} code={imports} language="jsx">
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
              <pre className={className} style={style}>
                {tokens.map((line, i) => (
                  <div {...getLineProps({ line, key: i })}>
                    {line.map((token, key) => (
                      <span {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                ))}
              </pre>
            )}
          </Highlight>

          <Highlight {...defaultProps} code={exampleCode} language="jsx">
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
              <pre className={className} style={style}>
                {tokens.map((line, i) => (
                  <div {...getLineProps({ line, key: i })}>
                    {line.map((token, key) => (
                      <span {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                ))}
              </pre>
            )}
          </Highlight>
        </div>

        <div id="right">
          <h3 style={{ color: "blue" }}>Related Question and Answer</h3>
          <button>
            <a href="https://techcomputinginfo.com/#/question/blog">
              For example, relating questions For example, relating questions
              For example, relating questions
            </a>
          </button>
          <br />
          <button>
            <a href="https://techcomputinginfo.com/#/question/blog">
              For example, relating questions
            </a>
          </button>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>

          <br />
        </div>
      </div>
    </>
  );
}

export default NavBarBootStrapUsingInReact;
