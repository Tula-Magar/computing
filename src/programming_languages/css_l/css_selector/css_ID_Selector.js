import React, { lazy } from "react";
import UseTitle from "../../../Title.js";
const LeftNav = lazy(() => import("../../../LeftNav/leftNav.js"));
const RelatedCssLinks = lazy(() => import("../css_links/related_css_links.js"));
const HtmlCssJsEditor = lazy(() =>
  import("../../../Editor/HtmlCssJsEditor.js")
);

export default function css_ID_Selector() {
  UseTitle("CSS ID Selector");
  const DuplicateSelector = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <style>
          #paragraph { color: red; }
          </style>
  </head>
  <body>
      <p id="paragraph"> one </p>
      <p id="paragraph"> two </p>
  </body>
  </html>
    `;

  const NonDuplicateSelector = ` 
    <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <style>
          #paragraph { color: red; }
          #paragraph_2 { color: blue; }
          </style>
  </head>
  <body>
      <p id="paragraph"> one </p>
      <p id="paragraph_2"> two </p>
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
          <h1>What is CSS ID Selector?</h1>
          <p>
            CSS ID Selector is a way to select HTML elements. It is a string of
            characters that tells the browser which HTML elements to select. CSS
            ID Selector is used to select a single element by its ID. HTML
            validator will not accept a CSS ID Selector that has multiple
            elements.
            <h2>ID Selector</h2>
            <p>
              The ID selector is used to select an element by its ID. The ID
              selector is written as follows: <br />
              <code>#element-id</code> there is no space between the # and the
              ID.
            </p>
          </p>
          <h1>Duplicate ID</h1>
          <p>
            The following may work but it is a semantic error of HTML and you
            shouldn't use the same ID twice. If you test the following code
            using an HTML validator or some other tester then you will get an
            error
          </p>
          <HtmlCssJsEditor props={DuplicateSelector} />
          <h1>Non Duplicate ID</h1>
          <p>
            The following will definitely work since it is a valid html. Each
            element has a unique ID.
          </p>
          <HtmlCssJsEditor props={NonDuplicateSelector} />
        </div>

        <div id="right">
          <RelatedCssLinks />
        </div>
      </div>
    </>
  );
}
