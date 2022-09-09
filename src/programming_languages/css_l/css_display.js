import React, { lazy } from "react";
import UseTitle from "../../Title.js";
const LeftNav = lazy(() => import("../../LeftNav/leftNav.js"));
const RelatedCssLinks = lazy(() => import("./css_links/related_css_links.js"));
const HtmlCssJsEditor = lazy(() => import("../../Editor/HtmlCssJsEditor.js"));
export default function CssDisplay() {
  UseTitle("CSS Display");

  return (
    <>
      <div id="container">
        <div id="left">
          <LeftNav />
        </div>

        <div id="middle">
          <h1>CSS Display</h1>
          <p>
            The display property is used to specify how an element should be
            displayed. Following below are display property:
          </p>
          <ul>
            <li>
              <b>display: none (default) -</b> The element will not be
              displayed.
            </li>
            <li>
              <b>display: block -</b> The element will be displayed as a block.
            </li>
            <li>
              <b>display: inline -</b> The element will be displayed as an
              inline element.
            </li>
            <li>
              <b>display: inline-block -</b> The element will be displayed as an
              inline-block element.
            </li>
            <li>
              <b>display: flex -</b> The element will be displayed as a flex
              element.
            </li>
            <li>
              <b>display: grid -</b> The element will be displayed as a grid
              element.
            </li>
            <li>
              <b>display: inline-flex -</b> The element will be displayed as an
              inline-flex element.
            </li>
            <li>
              <b>display: inline-grid -</b> The element will be displayed as an
              inline-grid element.
            </li>
            <li>
              <b>display: table -</b> The element will be displayed as a table
              element.
            </li>
            <li>
              <b>display: table-cell -</b> The element will be displayed as a
              table-cell element.
            </li>
            <li>
              <b>display: table-row -</b> The element will be displayed as a
              table-row element.
            </li>
            <li>
              <b>display: table-row-group -</b> The element will be displayed as
              a table-row-group element.
            </li>
            <li>
              <b>display: table-column -</b> The element will be displayed as a
              table-column element.
            </li>
            <li>
              <b>display: table-column-group -</b> The element will be displayed
              as a table-column-group element.
            </li>
            <li>
              <b>display: table-caption -</b> The element will be displayed as a
              table-caption element.
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
