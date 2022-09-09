import React, { lazy } from "react";
import UseTitle from "../../Title.js";
const LeftNav = lazy(() => import("../../LeftNav/leftNav.js"));
const RelatedCssLinks = lazy(() => import("./css_links/related_css_links.js"));
const HtmlCssJsEditor = lazy(() => import("../../Editor/HtmlCssJsEditor.js"));
export default function CsszIndex() {
  UseTitle("CSS Z-index");

  return (
    <>
      <div id="container">
        <div id="left">
          <LeftNav />
        </div>

        <div id="middle">
          <h1>CSS Z-index</h1>
          <p>
            The z-index property specifies the stack order of an element. An
            element with a larger z-index will appear on top of another element
            with a smaller z-index.
          </p>

          <p>
            <b>Note: </b> the z-index property is only used to position elements
            such as absolute, fixed, relative, and sticky. It also works on
            elements with display: flex.
          </p>

          <p>There are two ways to set the z-index property:</p>
          <ul>
            <li>
              <b>z-index: auto (default) -</b> The element will use the default
              z-index of the document. Stack order is determined by the order
              the elements are in the document and always starts at 0.
            </li>
            <li>
              <b>z-index: number -</b> The element will use the specified
              z-index value. Stack order is determined by the order the elements
              are in the document and larger z-index values are on top of
              smaller z-index values.
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
