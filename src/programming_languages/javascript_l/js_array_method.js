import React, { lazy } from "react";
import UseTitle from "../../Title.js";
const LeftNav = lazy(() => import("../../LeftNav/leftNav.js"));
const RelatedCssLinks = lazy(() =>
  import("./js_related_links/js_courses_links.js")
);
//https://www.freecodecamp.org/news/manipulating-arrays-in-javascript/
const HtmlCssJsEditor = lazy(() => import("../../Editor/HtmlCssJsEditor.js"));
export default function JsArrowFunction() {
  UseTitle("Js Arrow Function");

  const TraditionalAndArrowFunction = ` //Traditional Function
  function add() {
     return 5 + 5;
}
    //Arrow Function
  const add = () => {
     return 5 + 5;
}`;

  return (
    <>
      <div id="container">
        <div id="left">
          <LeftNav />
        </div>

        <div id="middle">
          <h1>Javascript Arrow Function</h1>
          <p>
            Arrow functions are a new feature in ES6. They are a concise way to
            define functions. They are a little bit different from regular
            functions in that they do not have a function keyword.
          </p>

          <h1>Trdational vs Arrow Function</h1>
          <p>
            {" "}
            Arrow function needs a variable to be defined in order to use it.
            See below for an example and observe the difference.
          </p>
          <HtmlCssJsEditor props={TraditionalAndArrowFunction} />

          <h1>Parameters in Arrow Function</h1>
          <p>
            Paramenters is a list of variables that are used to define the
            function. The parameters are separated by commas. The parameters is
            useful when you want to reuse the data. For example.
          </p>
          <HtmlCssJsEditor
            props={`const add = (a, b) => {
    return a + b;
}
add(5, 5);`}
          />
        </div>

        <div id="right">
          <RelatedCssLinks />
        </div>
      </div>
    </>
  );
}
