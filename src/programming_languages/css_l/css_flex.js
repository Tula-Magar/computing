import React, { lazy } from "react";
import UseTitle from "../../Title.js";
const LeftNav = lazy(() => import("../../LeftNav/leftNav.js"));
const RelatedCssLinks = lazy(() => import("./css_links/related_css_links.js"));
const HtmlCssJsEditor = lazy(() => import("../../Editor/HtmlCssJsEditor.js"));

export default function CssFlex() {
  UseTitle("CSS Flex");

  return (
    <>
      <div id="container">
        <div id="left">
          <LeftNav />
        </div>

        <div id="middle">
          <h1>CSS Flex</h1>
          <p>
            CSS Flexible Box Layout, commonly known as Flexbox, is a CSS 3 web
            layout model. It is in the W3C's candidate recommendation stage. The
            flex layout allows responsive elements within a container to be
            automatically arranged depending upon screen size.
          </p>
          <p>
            There are several flex properties that can be used to control the
            layout of the elements. The flex properties are:
          </p>
          <ul>
            <li>
              <b>flex-grow</b> - The flex-grow property specifies how much of
              the available space should be allocated to the element.
            </li>
            <li>
              <b>flex-shrink</b> - The flex-shrink property specifies how much
              of the available space should be removed from the element.
            </li>
            <li>
              <b>flex-basis</b> - The flex-basis property specifies the initial
              main size of the element.
            </li>
            <li>
              <b>flex-direction</b> - The flex-direction property specifies the
              direction of the flexible element ethier row or column.
            </li>
            <li>
              <b>flex-wrap</b> - The flex-wrap property specifies whether the
              flexible element should wrap or not.
            </li>
            <li>
              <b>flex-flow</b> - The flex-flow property specifies the direction
              of the flexible element.
            </li>
            <li>
              <b>
                flex-flow: row | row-reverse | column | column-reverse | nowrap
                | wrap | wrap-reverse | initial | inherit | none
              </b>{" "}
              - These are some of the properties of the flex.
            </li>
          </ul>
        </div>

        <div id="right">
          <RelatedCssLinks />
        </div>
      </div>
    </>
  );
}
