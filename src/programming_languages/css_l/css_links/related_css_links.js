import React from "react";
import "../../../programming_languages/programming_languages.css";
import { NavLink } from "react-router-dom";
//https://CSS.com/
export default function RelatedCSSLinks() {
  return (
    <>
      <h1 className="topic">Topic</h1>
      <ul className="css_links">
        <li className="blockShadow">
          <NavLink className="HtmlLinks" to="/css_home">
            CSS Home
          </NavLink>
        </li>
        <li className="blockShadow">
          <NavLink className="HtmlLinks" to="/css_intro">
            CSS Introduciton
          </NavLink>
        </li>
        <li className="blockShadow">
          <NavLink className="HtmlLinks" to="/css_comment">
            CSS Comments
          </NavLink>
        </li>
        <li className="blockShadow">
          <details>
            <summary>CSS Selectors</summary>
            <ul>
              <li className="blockShadow">
                <NavLink className="HtmlLinks" to="/css_selector">
                  CSS Selector
                </NavLink>
              </li>
              <li className="blockShadow">
                <NavLink className="HtmlLinks" to="/css_ID_Selector">
                  CSS ID Selector
                </NavLink>
              </li>
              <li className="blockShadow">
                <NavLink className="HtmlLinks" to="/css_Class_Selector">
                  CSS Class Selector
                </NavLink>
              </li>
              <li className="blockShadow">
                <NavLink className="HtmlLinks" to="/css_Tag_Selector">
                  CSS Tag Selector
                </NavLink>
              </li>
            </ul>
          </details>
        </li>
        <li className="blockShadow">
          <NavLink className="HtmlLinks" to="/css_syntax">
            CSS Syntax
          </NavLink>
        </li>
        <li className="blockShadow">
          <NavLink className="HtmlLinks" to="/css_margin">
            CSS Margin
          </NavLink>
        </li>
        <li className="blockShadow">
          <NavLink className="HtmlLinks" to="/css_padding">
            CSS Padding
          </NavLink>
        </li>

        <li className="blockShadow">
          <NavLink className="HtmlLinks" to="/css_border">
            CSS Border
          </NavLink>
        </li>
        <li className="blockShadow">
          <NavLink className="HtmlLinks" to="/css_position">
            CSS Position
          </NavLink>
        </li>
        <li className="blockShadow">
          <NavLink className="HtmlLinks" to="/css_zIndex">
            CSS zIndex
          </NavLink>
        </li>
        <li className="blockShadow">
          <NavLink className="HtmlLinks" to="/css_float">
            CSS Float
          </NavLink>
        </li>
        <li className="blockShadow">
          <NavLink className="HtmlLinks" to="/css_display">
            CSS Display
          </NavLink>
        </li>
        <li className="blockShadow">
          <NavLink className="HtmlLinks" to="/css_flex">
            CSS Flex
          </NavLink>
        </li>
        <li className="blockShadow">
          <NavLink className="HtmlLinks" to="/css_grid">
            CSS Grid
          </NavLink>
        </li>
        <li className="blockShadow">
          <NavLink className="HtmlLinks" to="/css_box">
            CSS Box
          </NavLink>
        </li>
        <li className="blockShadow">
          <NavLink className="HtmlLinks" to="/css_animation">
            CSS Animation
          </NavLink>
        </li>
        <li className="blockShadow">
          <NavLink className="HtmlLinks" to="/css_transition">
            CSS Transition
          </NavLink>
        </li>
        <li className="blockShadow">
          <NavLink className="HtmlLinks" to="/css_transform">
            CSS Transform
          </NavLink>
        </li>
        <li className="blockShadow">
          <NavLink className="HtmlLinks" to="/css_responsive">
            CSS Responsive
          </NavLink>
        </li>
        <li className="blockShadow">
          <NavLink className="HtmlLinks" to="/css_media">
            CSS Media
          </NavLink>
        </li>
        <li className="blockShadow">
          <NavLink className="HtmlLinks" to="/css_font">
            CSS Font
          </NavLink>
        </li>
      </ul>
    </>
  );
}
