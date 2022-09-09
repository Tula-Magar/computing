import React, { lazy } from "react";
import UseTitle from "../../Title.js";
const LeftNav = lazy(() => import("../../LeftNav/leftNav.js"));
const RelatedCssLinks = lazy(() => import("./css_links/related_css_links.js"));
const HtmlCssJsEditor = lazy(() => import("../../Editor/HtmlCssJsEditor.js"));

export default function CSS_selector() {
  UseTitle("What is CSS Selector?");

  return (
    <>
      <div id="container">
        <div id="left">
          <LeftNav />
        </div>
        <div id="middle">
          <h1>What is CSS Selector?</h1>
          <p>
            CSS Selector is a way to select HTML elements. It is a string of
            characters that tells the browser which HTML elements to select.
            There are several types of CSS Selectors: <br />
            <br />
            <b>1. Type 1:</b> <br />
            <b>a.</b> <i>ID Selector</i> <br />
            <p>
              The ID selector is used to select a single element by its ID. It
              is a string of characters that starts with a # and followed by a
              unique ID. ID can't be repeated in the same HTML document. If you
              do repeat an ID, the browser will throw an error.
            </p>
            <b>b.</b> <i>Class Selector</i> <br />
            <p>
              The Class selector is used to select a single or group of elements
              by its class.
            </p>
            <b>c.</b> <i>Tag Selector</i> <br />
            <p>The</p>
            <b>d.</b> <i>Attribute Selector</i> <br />
            <b>e.</b> <i>Pseudo-Class Selector</i> <br />
            <b>f.</b> <i>Pseudo-Element Selector</i> <br />
            <br />
            <b>2. Type 2:</b> <br />
            <b>a.</b> <i>Descendant Selector</i> <br />
            <b>b.</b> <i>Child Selector</i> <br />
            <b>c.</b> <i>Adjacent Selector</i> <br />
            <b>d.</b> <i>Sibling Selector</i> <br />
            <b>e.</b> <i>General Selector</i> <br />
            <br />
            <b>3. Type 3:</b> <br />
            <b>a.</b> <i>Combinator Selector</i> <br />
            <b>b.</b> <i>Descendant Selector</i> <br />
            <b>c.</b> <i>Child Selector</i> <br />
            <b>d.</b> <i>Adjacent Selector</i> <br />
            <b>e.</b> <i>Sibling Selector</i> <br />
            <b>f.</b> <i>General Selector</i> <br />
            <br />
          </p>
        </div>

        <div id="right">
          <RelatedCssLinks />
        </div>
      </div>
    </>
  );
}
