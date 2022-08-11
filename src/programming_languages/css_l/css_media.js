import React, { lazy } from "react";
import UseTitle from "../../Title.js";
const LeftNav = lazy(() => import("../../LeftNav/leftNav.js"));
const RelatedCssLinks = lazy(() => import("./css_links/related_css_links.js"));
const HtmlCssJsEditor = lazy(() => import("../../Editor/HtmlCssJsEditor.js"));
export default function CssMedia() {
  UseTitle("CSS Media Queries");

  return (
    <>
      <div id="container">
        <div id="left">
          <LeftNav />
        </div>

        <div id="middle">
          <h1>CSS Media Queries</h1>
          <p>
            CSS Media Queries is a technique that allows a website to be
            responsive to the screen size of the user. It is most suitable
            feature for an responsive website.
          </p>
          <p>
            There are lots of different devices that are available in this world
            such as mobile, tablet, desktop, laptop, and so on. Each of these
            devices has a different screen size. So, when a user is on a device
            with a different screen size, the website will be responsive to the
            screen size of the user.
          </p>
          <p>Media has added so some new features.</p>
        </div>

        <div id="right">
          <RelatedCssLinks />
        </div>
      </div>
    </>
  );
}
