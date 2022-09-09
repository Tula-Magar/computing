import React, { lazy } from "react";
import UseTitle from "../../Title.js";
const LeftNav = lazy(() => import("../../LeftNav/leftNav.js"));
const RelatedCssLinks = lazy(() => import("./css_links/related_css_links.js"));
const HtmlCssJsEditor = lazy(() => import("../../Editor/HtmlCssJsEditor.js"));
export default function CssResponsive() {
  UseTitle("CSS Reponsive");

  return (
    <>
      <div id="container">
        <div id="left">
          <LeftNav />
        </div>

        <div id="middle">
          <h1>CSS Reponsive</h1>
          <p>
            CSS Reponsive is a technique that allows a website to be responsive
            to the screen size of the user.
          </p>

          <h1>CSS Reponsive Main Concepts</h1>
          <p>
            There are lots of different devices that are available in this world
            such as mobile, tablet, desktop, laptop, and so on. Each of these
            devices has a different screen size. So, when a user is on a device
            with a different screen size, the website will be responsive to the
            screen size of the user.
          </p>
          <p>
            There is a lot of different ways to make a website responsive. The
            most common way is to use the <code>@media </code>
            CSS selector. @media is a media query selector. The{" "}
            <code>@media</code> selector is a way to create a responsive
            website. It is used to create a website that is responsive to the
            screen size of the user.
          </p>
          <p>
            <b>Note:</b> there are other css frameworks that are also
            responsive. For example, Bootstrap, Materialize, and so on.
          </p>
        </div>

        <div id="right">
          <RelatedCssLinks />
        </div>
      </div>
    </>
  );
}
