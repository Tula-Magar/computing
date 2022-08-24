import React, { lazy } from "react";
import UseTitle from "../../Title.js";
const LeftNav = lazy(() => import("../../LeftNav/leftNav.js"));
const RelatedCssLinks = lazy(() =>
  import("./js_related_links/js_courses_links.js")
);
const HtmlCssJsEditor = lazy(() => import("../../Editor/HtmlCssJsEditor.js"));
export default function JsFunction() {
  UseTitle("Js Functions");

  const CreateFunction = `function CreateFunction() {
    let value = "Hello from a function";
    console.log(value);
    }
    CreateFunction();`;

  const CreateFunctionWithParameters = `function CreateFunctionWithParameters(param1, param2) {
        console.log(param1 + " ' + param2);
        }
        CreateFunctionWithParameters("Hello", "function parameters");`;

  return (
    <>
      <div id="container">
        <div id="left">
          <LeftNav />
        </div>

        <div id="middle">
          <h1>Javascript Functions</h1>
          <p>
            Function is a block of code that can be executed. Functions can be
            used to perform a task or to create a reusable block of code.
          </p>
          <p>
            Function is a Javascript keyword that is used to create a function.
          </p>

          <h1>How to create a function</h1>
          <p>
            You must start a function with the word function followed by a name
            for the function. For example:
          </p>
          <HtmlCssJsEditor props={CreateFunction} />
          <p>
            The function can have parameters. Parameters are variables that are
            used to pass values into a function. Parameters are separated by
            commas. Parameters are optional. If you do not specify a parameter,
            the function will receive undefined as a value.
          </p>
          <p>
            The function can return a value. The return statement is used to
            return a value from a function.
          </p>
        </div>

        <div id="right">
          <RelatedCssLinks />
        </div>
      </div>
    </>
  );
}
