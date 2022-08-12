import React, { lazy } from "react";
import UseTitle from "../../Title.js";
const LeftNav = lazy(() => import("../../LeftNav/leftNav.js"));
const RelatedCssLinks = lazy(() =>
  import("./js_related_links/js_courses_links.js")
);
const HtmlCssJsEditor = lazy(() => import("../../Editor/HtmlCssJsEditor.js"));
export default function JsHome() {
  UseTitle("Js Home");

  return (
    <>
      <div id="container">
        <div id="left">
          <LeftNav />
        </div>

        <div id="middle">
          <h1>JavaScript Intro</h1>
          <p>
            JavaScript is the most widely used language in the world. If you are
            new to web programming, you should start with JavaScript. Once you
            mastered javascript, you can pick up javascript frameworks and
            libraries like React, Vue, Angular, and many more and other
            programming languages like Python, C, C++, C#, Java, etc very
            easily.
          </p>
          <p>
            JavaScript is a high-level, dynamic, weakly typed, prototype-based
            and interpreted programming language. It was created by Brendan Eich
            in 1995. It is a cross-platform language, meaning that it can be run
            on any computer with a web browser. It is a prototype-based
            language, meaning that it is a dynamically typed language. It is a
            weakly typed language, meaning that it does not have a type system.
          </p>

          <p>
            JavaScript is a multi-paradigm language. It has both object-oriented
            and functional programming styles. It has both dynamic and static
            typing and scoping. JavaScript can be used in the following
            features:
          </p>
          <ul>
            <li>Client-side scripting</li>
            <li>Server-side scripting</li>
            <li>
              Scripting for mobile devices and embedded devices (such as phones
              and tablets)
            </li>
            <li>Scripting for the web browser</li>
            <li>
              Scripting for machine learning and artificial intelligence (such
              as speech recognition)
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
