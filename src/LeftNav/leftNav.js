import React from "react";
import "../programming_languages/programming_languages.css";
import { Link } from "react-router-dom";
//https://html.com/
export default function LeftNav() {
  return (
    <>
      <ul className="html_links">
        <li className="blockShadow">
          <Link className="list" to="/">
            Home
          </Link>
        </li>
        <li className="blockShadow">
          <Link className="list" to="/">
            Home
          </Link>
        </li>
        <li className="blockShadow">
          <Link className="list" to="/">
            Home
          </Link>
        </li>
      </ul>
    </>
  );
}
