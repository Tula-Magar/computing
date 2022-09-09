import React, { lazy } from "react";
import UseTitle from "../../../Title.js";
const LeftNav = lazy(() => import("../../../LeftNav/leftNav.js"));
const RelatedCssLinks = lazy(() => import("../css_links/related_css_links.js"));
const HtmlCssJsEditor = lazy(() =>
  import("../../../Editor/HtmlCssJsEditor.js")
);

export default function css_Tag_Selector() {
  UseTitle("CSS Tag Selector");
  const ClassSelector = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <style>
          div {
                color : blue;
            }
           section {
                width: 100px;
                height: 100px;
                background-color: red;
                margin: 10px;
                padding: 10px;
                border: 1px solid black;
           }
          </style>
  </head>
  <body>
      <div> section 1 </div>
      <div> section 2 </div>
      <section> section 3  </section>
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
          <h1>CSS Tag Selector?</h1>
          <p>
            Tag Selector is a selector that is used to select a html tag. It
            doesn't have any attributes or classes. If you declare a tag as a
            selector in the css file, it will only select that tag types in the
            html file.
          </p>

          <p>
            <b>Note:</b> the tag selector is case sensitive. If you declare a
            tag as a selector in the css file, it will pick up all the matched
            tag types from the whole html file.
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
