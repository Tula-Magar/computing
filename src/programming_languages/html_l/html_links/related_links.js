import React from "react";
import "../../programming_languages.css";
import { NavLink } from "react-router-dom";
//https://html.com/
export default function RelatedLinks() {
  return (
    <>
      <h1 className="topic">Topic</h1>
      <ul className="html_links">
        <li className="blockShadow">
          <NavLink className="HtmlLinks" to="/html_home">
            HTML Home
          </NavLink>
        </li>
        <li className="blockShadow">
          <NavLink className="HtmlLinks" to="/html_intro">
            HTML Introduciton
          </NavLink>
        </li>
        <li className="blockShadow">
          <NavLink className="HtmlLinks" to="/html_editor">
            HTML Editor
          </NavLink>
        </li>
        <li className="blockShadow">
          <NavLink className="HtmlLinks" to="/html_element">
            HTML Element
          </NavLink>
        </li>
        <li className="blockShadow">
          <NavLink className="HtmlLinks" to="/html_attributes">
            HTML Attributes
          </NavLink>
        </li>
        <li className="blockShadow">
          <NavLink className="HtmlLinks" to="/html_tags">
            HTML Tags
          </NavLink>
        </li>
        <li className="blockShadow">
          <NavLink className="HtmlLinks" to="/html_comment">
            HTML Comments
          </NavLink>
        </li>
        <li className="blockShadow">
          <NavLink className="HtmlLinks" to="/html_head">
            HTML Head
          </NavLink>
        </li>
        <li className="blockShadow">
          <NavLink className="HtmlLinks" to="/html_paragraph">
            HTML Paragraph
          </NavLink>
        </li>
        <li className="blockShadow">
          <NavLink className="HtmlLinks" to="/html_input_types">
            HTML Input Types
          </NavLink>
        </li>
        <li className="blockShadow">
          <NavLink className="HtmlLinks" to="/html_tables">
            HTML Tables
          </NavLink>
        </li>
        <li className="blockShadow">
          <NavLink className="HtmlLinks" to="/html_list">
            HTML List
          </NavLink>
        </li>
      </ul>
    </>
  );
}
