import React, { lazy } from "react";
import UseTitle from "../../../Title.js";
const LeftNav = lazy(() => import("../../../LeftNav/leftNav.js"));
const RelatedCssLinks = lazy(() => import("../css_links/related_css_links.js"));
const HtmlCssJsEditor = lazy(() =>
  import("../../../Editor/HtmlCssJsEditor.js")
);

export default function css_Class_Selector() {
  UseTitle("CSS Class Selector");
  const ClassSelector = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <style>
          .container {
                width: 100%;
                height: 100%;
                background-color: #f5f5f5;
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                border: 1px solid #ccc;
                gap: 10px;
                padding: 10px;
                margin: 10px;
                border-radius: 10px;
            }
          </style>
  </head>
  <body>
      <div class="container"> section 1 </div>
      <section class="container"> section 2  </section>
      <div class="container"> section 3 </div>
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
          <h1>CSS Class Selector?</h1>
          <p>
            A CSS class selector is a CSS selector that is used to select a
            single or group of elements based on their class attribute. Or Class
            is a CSS property that is used to style an element based on its
            class.
          </p>
          <HtmlCssJsEditor props={ClassSelector} />
        </div>

        <div id="right">
          <RelatedCssLinks />
        </div>
      </div>
    </>
  );
}
