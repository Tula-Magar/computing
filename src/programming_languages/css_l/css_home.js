import React, { lazy } from "react";
import UseTitle from "../../Title.js";
import HtmlVsCss from "./css_images/html-vs-css.avif";
const LeftNav = lazy(() => import("../../LeftNav/leftNav.js"));
const RelatedCssLinks = lazy(() => import("./css_links/related_css_links.js"));

export default function CssHome() {
  UseTitle("CSS Home");
  return (
    <>
      <div id="container">
        <div id="left">
          <LeftNav />
        </div>

        <div id="middle">
          <h1>CSS History </h1>
          <p>
            CSS is a languagee that describes how HTML elements are to be
            displayed on a web page. It's been around for more than 25 years,
            and is used by many web developers.
          </p>
          <ul>
            <li>
              CSS was first proposed in the late 1994 by the Hakon Wium Lie.
            </li>
            <li> CSS1.0 was released in 1995. </li>
            <li> CSS2.0 was released in 1999. </li>
            <li> CSS3.0 was released in 2006. </li>
          </ul>
          <h1>Why Use CSS?</h1>
          <p>
            Please, take a look at the following image of a HTML vs CSS and
            observe the look difference of the two.
          </p>
          <img
            className="html-vs-css-image"
            lazy="loading"
            src={HtmlVsCss}
            alt="html-vs-css"
          />
          <h1>HTML</h1>
          <ul>
            <li> In above image, just a html looks ugly. </li>
            <li> html is structured layer. </li>
            <li>html is used to create a content for a web page.</li>
            <li>
              It's hard to read things in web without css if page only contained
              html.
            </li>
          </ul>

          <h1>CSS</h1>
          <ul>
            <li>
              In above image, adding css to the html makes it look better.
            </li>
            <li>css is a presentation layer.</li>
            <li>
              css is used to style the html elements to make them look better.
            </li>
            <li>css makes to easy to read things in web.</li>
          </ul>
        </div>

        <div id="right">
          <RelatedCssLinks />
        </div>
      </div>
    </>
  );
}
