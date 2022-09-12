import React, { lazy } from "react";
import UseTitle from "../../Title.js";
const LeftNav = lazy(() => import("../../LeftNav/leftNav.js"));
const RelatedCssLinks = lazy(() =>
  import("./js_related_links/js_courses_links.js")
);
const HtmlCssJsEditor = lazy(() => import("../../Editor/HtmlCssJsEditor.js"));
export default function javascript_intro() {
  UseTitle("js Intro");
  const Js_getElementbyId = `<!DOCTYPE html>
<html>
<body>
  <h2>What Can JavaScript Do?</h2>
  <p id="demo"></p>
  <p id="demo1">JavaScript can change HTML content.</p>
  <button type="button" onclick='document.getElementById("demo1").innerHTML = "Hello JavaScript! on click"'>Click Me!</button>
  <script>
    document.getElementById("demo").innerHTML = "Hello JavaScript! on without click";
  </script>
</body>
</html>`;

  const Js_getElementbyClass = `<!DOCTYPE html>
<html>
<body>
  <h2>What Can JavaScript Do?</h2>
  <p class="demo">JavaScript can change HTML content.</p>
  <p class="demo">JavaScript can change</p>
  <script>
       const ArrayList = document.getElementsByClassName("demo");
        ArrayList[0].innerHTML = "getElementsByClassName collects all elements with the same class name into an array."; 
        ArrayList[1].innerHTML = "You can access an element in the array by using an index number.";
  </script>
</body>
</html>`;
  return (
    <>
      <div id="container">
        <div id="left">
          <LeftNav />
        </div>

        <div id="middle">
          <h1> Javascript Intro </h1>

          <p>
            Javascript is a programming language that is used to make web pages
            and web applications. It is a scripting language that is used to add
            a dynamic behavior to web pages. It is a client-side scripting
            language but modern web applications use it on the server side as
            well. So, you don't need to learn a server-side language like PHP,
            Python, Ruby and, other to build a web application. You can use
            Javascript on the server side as well.
          </p>

          <h1>Let's Begin Writing Code</h1>
          <p>
            Javascript interact with HTML and CSS. It can change the content of
            an HTML element, change the style of an HTML element, and can remove
            an HTML element. It can also add new HTML elements and attributes to
            an HTML page. It can also react to all existing HTML events in an
            HTML page.
          </p>
          <b>Note: </b>
          <ul>
            <li>
              getElementById() is a method of the document object and it is used
              to find an HTML element by element id. HTML ID is a unique
              identifier of an HTML element. It is used to point to a specific
              HTML element in a document. getElementById will interact with the
              specified HTML element and perform the specified action on it.
              <HtmlCssJsEditor props={Js_getElementbyId} />
            </li>

            <li>
              {" "}
              getElementByClass() is a method of the document object and it is
              used to find an HTML element by element class. HTML class is a
              unique identifier of an HTML element. It is used to point to a one
              to many HTML element in a document. getElementByClass will
              interact with the specified HTML element and perform the specified
              action on it.
              <HtmlCssJsEditor props={Js_getElementbyClass} />
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
