import React, { lazy } from "react";
import UseTitle from "../../Title.js";
const LeftNav = lazy(() => import("../../LeftNav/leftNav.js"));
const RelatedCssLinks = lazy(() =>
  import("./js_related_links/js_courses_links.js")
);
const HtmlCssJsEditor = lazy(() => import("../../Editor/HtmlCssJsEditor.js"));
export default function JsNull() {
  UseTitle("Js Null");

  const myNull = `let myNull = null;
    let NotNull = "I am not null";
    console.log(myNull);
    console.log(NotNull);`;

  return (
    <>
      <div id="container">
        <div id="left">
          <LeftNav />
        </div>

        <div id="middle">
          <h1>Javascript Null</h1>
          <p>
            Null is a data structure that can hold no value. It is a single
            value data type that can only be null. It is very important to know
            that null is not the same as numbers, strings, or something else.
          </p>
          <HtmlCssJsEditor props={myNull} />
        </div>

        <div id="right">
          <RelatedCssLinks />
        </div>
      </div>
    </>
  );
}
