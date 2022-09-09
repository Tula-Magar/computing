import React from "react";
import "./html_style.css";
import UseTitle from "../../Title.js";
import RelatedLinks from "./html_links/related_links";
// import Highlight, { defaultProps } from "prism-react-renderer";
// import Element from "../../img/html_images/html_tag.PNG";
import { Link } from "react-router-dom";
export default function html_intro() {
  UseTitle("Html Intro");

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
           <h1> HTML Tags? </h1> 
        </div>

        <div id="right">
          <RelatedLinks />
        </div>
      </div>
    </>
  );
}
