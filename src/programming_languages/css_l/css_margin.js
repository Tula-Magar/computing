import React, { lazy } from "react";
import UseTitle from "../../Title.js";
import MarginImage from "./css_images/margin.avif";
const LeftNav = lazy(() => import("../../LeftNav/leftNav.js"));
const RelatedCssLinks = lazy(() => import("./css_links/related_css_links.js"));

const HtmlCssJsEditor = lazy(() => import("../../Editor/HtmlCssJsEditor.js"));

export default function CSS_margin() {
  UseTitle("What is CSS Margin?");
  const CSSMargin = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>CSS Margin</title>
    <style>
      .Margin {
        margin: 50px;
    }
    .MarginTop { margin-top: 50px; }
    .MarginBottom { margin-bottom: 50px; }
    .MarginLeft { margin-left: 50px; }
    .MarginRight { margin-right: 50px; }
    </style>
    </head>
    <body>
        <p class="Margin"> margin  </p>
        <p class="MarginTop"> margin top </p>
        <p class="MarginRight"> margin right</p>
        <p class="MarginBottom"> margin bottom </p>
        <p class="MarginLeft"> margin left</p>
    </body>
    </html>`;

  return (
    <>
      <div id="container">
        <div id="left">
          <LeftNav />
        </div>
        <div id="middle">
          <h1>What is CSS Margin?</h1>
          <p>
            CSS Margin is a way to set the space around an element and outside
            of a border. It is a string of characters that tells the browser how
            much space to put around an element.
          </p>
          <img
            style={{ width: "876px", height: "800px" }}
            src={MarginImage}
            alt="margin"
          />
          <p>
            Think above image as a web page or section of a web page. Margin is
            the space around the web page. It has 4 sides: top, right, bottom,
            left. When you set a margin, the border of the element or website
            will be push inside.
          </p>

          <section>
            <b>1. Margin: </b> <br />
            <b>a.</b> <i>margin: </i> given only one value sets the space around
            the element or website evenly in all 4 sides. However, if you give
            and set a different value for each side, the space will be
            different. <br />
            <p>
              <b>
                <i>margin: 10px; </i>
              </b>
              for all 4 sides at once.
              <br />
              <b>
                <i>margin: 10px 20px; </i>
              </b>
              for top and right sides.
              <br />
              <b>
                <i>margin: 10px 20px 30px; </i>
              </b>
              for top, right, bottom sides.
              <br />
              <b>
                <i>margin: 10px 20px 30px 40px; </i>
              </b>
              for top, right, bottom, left
              <br />
            </p>
            <b>b.</b> <i>margin-top:</i> sets the space only on the top side.
            <br />
            <b>c.</b> <i>margin-right:</i> sets the space only on the right
            side.
            <br />
            <b>d.</b> <i>margin-bottom:</i> sets the space only on the bottom
            side.
            <br />
            <b>e.</b> <i>margin-left:</i> sets the space only on the left side.
            <br />
          </section>
          <HtmlCssJsEditor props={CSSMargin} />
        </div>

        <div id="right">
          <RelatedCssLinks />
        </div>
      </div>
    </>
  );
}
