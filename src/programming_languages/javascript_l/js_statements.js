import React, { lazy } from "react";
import UseTitle from "../../Title.js";
const LeftNav = lazy(() => import("../../LeftNav/leftNav.js"));
const RelatedCssLinks = lazy(() =>
  import("./js_related_links/js_courses_links.js")
);
const HtmlCssJsEditor = lazy(() => import("../../Editor/HtmlCssJsEditor.js"));
export default function javascript_statements() {
  UseTitle("Html Statements");

  return (
    <>
      <div id="container">
        <div id="left">
          <LeftNav />
        </div>

        <div id="middle">
          <h1>Javascript Statements</h1>
          <p>A statement is a line of code that performs a specific task.</p>
          <p>
            A statement can be as simple as a single variable declaration, or as
            complex as a function declaration. A statement can also be a single
            or a group of expressions.
          </p>
        </div>

        <div id="right">
          <RelatedCssLinks />
        </div>
      </div>
    </>
  );
}
