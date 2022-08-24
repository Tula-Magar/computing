import React, { lazy } from "react";
import UseTitle from "../../Title.js";
const LeftNav = lazy(() => import("../../LeftNav/leftNav.js"));
const RelatedCssLinks = lazy(() =>
  import("./js_related_links/js_courses_links.js")
);
const HtmlCssJsEditor = lazy(() => import("../../Editor/HtmlCssJsEditor.js"));
export default function JsBoolean() {
  UseTitle("Js Booleans");

  const myBoolean = `let TrueBoolean = true;
  let FalseBoolean = false;
  
  if (TrueBoolean === true) {
    console.log("True");
    } 
    else if (FalseBoolean === false) {
        console.log("False");
        }`;

  return (
    <>
      <div id="container">
        <div id="left">
          <LeftNav />
        </div>

        <div id="middle">
          <h1>Javascript Booleans</h1>
          <p>
            Booleans are a data structure that can hold either: true or false,
            Yes or No and on or off. It is a single value data type that can
            only be true or false. It is very important to know that booleans
            are not the same as numbers, strings, or something else.
          </p>
          <p>Booleans can be created with the following syntax:</p>
        </div>

        <div id="right">
          <RelatedCssLinks />
        </div>
      </div>
    </>
  );
}
