import React, { lazy } from "react";
import UseTitle from "../../Title.js";
const LeftNav = lazy(() => import("../../LeftNav/leftNav.js"));
const RelatedCssLinks = lazy(() =>
  import("./js_related_links/js_courses_links.js")
);
//https://www.freecodecamp.org/news/manipulating-arrays-in-javascript/
const HtmlCssJsEditor = lazy(() => import("../../Editor/HtmlCssJsEditor.js"));
export default function JsError() {
  UseTitle("Js Error");

  return (
    <>
      <div id="container">
        <div id="left">
          <LeftNav />
        </div>

        <div id="middle"></div>

        <div id="right">
          <RelatedCssLinks />
        </div>
      </div>
    </>
  );
}
