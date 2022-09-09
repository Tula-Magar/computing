import React, { lazy } from "react";
import UseTitle from "../../Title.js";
const LeftNav = lazy(() => import("../../LeftNav/leftNav.js"));
const RelatedCssLinks = lazy(() => import("./css_links/related_css_links.js"));
const HtmlCssJsEditor = lazy(() => import("../../Editor/HtmlCssJsEditor.js"));
export default function CssPosition() {
  UseTitle("CSS Position");

  const CSS_Relative = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>CSS Position</title>
   <style>
    * {
            box-sizing: border-box;
        }
        
        .box {
            display: inline-block;
            width: 100px;
            height: 100px;
            background: red;
            
            color: white;
        }
        
        #two {
            position: relative;
            top: 20px;
            left: 20px;
            background: blue;
        }
   </style>
    </head>
    <body>
        <div class="box" id="one">One</div>
        <div class="box" id="two">Two</div>
        <div class="box" id="three">Three</div>
    </body>
    </html>
    `;
  return (
    <>
      <div id="container">
        <div id="left">
          <LeftNav />
        </div>

        <div id="middle">
          <h1>CSS Position</h1>
          <p>
            The position property is used to position elements on the page. The
            position property can be used to place elements in the following
            ways:
          </p>
          <b>
            <i>static: </i>
          </b>
          by default, the position property is set to static. So, the element is
          not moved and stays in the same position. static position doesn't
          affected by top, left, bottom, and right properties.
          <br />
          <b>
            <i>Relative: </i>
          </b>
          the element is positioned relative to its parent. The element is moved
          to the position specified by the top, right, bottom, and left
          properties.
          <br />
          <HtmlCssJsEditor props={CSS_Relative} />
          <b>
            <i>Absolute: </i>
          </b>
          the element is moved to the position specified by the top, right,
          bottom, and left properties. The element is moved/position relative to
          its parent.
          <br />
          <b>
            <i>Fixed: </i>
          </b>
          the element is positioned relative to the viewport. The element
          remains in a same fixed position within the viewport means even when
          the page is scrolled or resized (like the window) or when the element
          is moved. The element can be position to the top, right, bottom, and
          left properties within the viewport.
          <br />
          <b>
            <i>Sticky: </i>
          </b>
          the element is positioned relative to the viewport. The element
          remains on the top of the page when the page is scrolled. The element
          can be position to the top, right, bottom, and left properties within
          the viewport.
          <br />
        </div>

        <div id="right">
          <RelatedCssLinks />
        </div>
      </div>
    </>
  );
}
