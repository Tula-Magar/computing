import React, { lazy } from "react";
import UseTitle from "../../Title.js";
const LeftNav = lazy(() => import("../../LeftNav/leftNav.js"));
const RelatedCssLinks = lazy(() => import("./css_links/related_css_links.js"));
const HtmlCssJsEditor = lazy(() => import("../../Editor/HtmlCssJsEditor.js"));
export default function CssFloat() {
  UseTitle("CSS Float");

  return (
    <>
      <div id="container">
        <div id="left">
          <LeftNav />
        </div>

        <div id="middle">
          <h1>CSS Float</h1>
          <p>
            The float property is used to specify how an element should be
            displayed. The float property can be used to place elements in the
            following ways:
          </p>
          <p>
            <b>Note: </b> the float property is only used to position elements
            such as absolute, fixed, relative, and sticky. It also works on
            elements with display: flex.
          </p>
          <p>There are two ways to set the float property:</p>
          <ul>
            <li>
              <b>float: none (default) -</b> The element will not be floated.
            </li>
            <li>
              <b>float: left -</b> The element will be floated to the left.
            </li>
            <li>
              <b>float: right -</b> The element will be floated to the right.
            </li>
            <li>
              <b>float: inherit (default) -</b> The element will use the default
              float value of the parent element.
            </li>
            <li>
              <b> float: inline-start -</b> The element will be floated to the
              left.
            </li>
            <li>
              <b> float: inline-end -</b> The element will be floated to the
              right.
            </li>
          </ul>
          <p>
            <b>Note: </b> the <code>float:inline-start | inline-end</code>{" "}
            properties aren't supported in IE11, chrome, safari, and many other
            browsers.
          </p>
        </div>

        <div id="right">
          <RelatedCssLinks />
        </div>
      </div>
    </>
  );
}
