import React from "react";
import "./html_style.css";
import UseTitle from "../../Title.js";
import RelatedLinks from "./html_links/related_links";
// import Highlight, { defaultProps } from "prism-react-renderer";
// import Element from "../../img/html_images/html_tag.PNG";
import { Link } from "react-router-dom";
import HtmlCssJsEditor from "../../Editor/HtmlCssJsEditor.js";
export default function Html_list() {
  UseTitle("What is HTML List?");

  const HtmlOrderList = `<ol>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
  <li>Item 4</li>
  <li>Item 5</li>
</ol>`;

  const HtmlUnorderList = `<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
    <li>Item 4</li>
    <li>Item 5</li>
</ul>`;

  const HtmlDefinitionList = `<dl>
    <dt>Definition List</dt>
    <dd>A list of terms and their definitions.</dd>
    <dt>Item 1</dt>
    <dd>Definition 1</dd>
    <dt>Item 2</dt>
    <dd>Definition 2</dd>
    <dt>Item 3</dt>
    <dd>Definition 3</dd>
    <dt>Item 4</dt>
    <dd>Definition 4</dd>
    <dt>Item 5</dt>
    <dd>Definition 5</dd>
</dl>`;
  return (
    <>
      <div id="container">
        <div id="left">
          <li className="list">
            <Link className="list" to="/">
              {" "}
              Home
            </Link>
            <Link className="list" to="/">
              {" "}
              Home
            </Link>
            <Link className="list" to="/">
              {" "}
              Home
            </Link>
          </li>
        </div>
        <div id="middle">
          <h1>What is HTML List?</h1>
          <p>
            Html list is used to display the list of items. There are two types
            of list in HTML: ordered and unordered.
          </p>
          <ul>
            <li>
              <b> Ordered list:</b> is used to display the list of items in
              order. List items are numbered from 1 to n. n is the total number
              of list items.
            </li>
            <li>
              <b> Unordered list:</b> is used to display the list of items in
              unordered. List items are not numbered. List items are displayed
              in random order and by default, they are displayed in a bulleted.
            </li>
          </ul>
          <h1>Ordered list:</h1>
          <HtmlCssJsEditor props={HtmlOrderList} />
          <h1>Unordered list:</h1>
          <HtmlCssJsEditor props={HtmlUnorderList} />

          <h1>HTMl Description List:</h1>
          <p>
            HTML description list is used to display the list of items with a
            description.
          </p>
          <HtmlCssJsEditor props={HtmlDefinitionList} />
          <dl>
            <dt>dl</dt>
            <dd>
              The HTML <code>dl</code> element is used to represent a list of
              terms and their definitions.
            </dd>
            <dt>dd</dt>
            <dd>
              The HTML <code>dd</code> element is used to represent the
              definition of a term in a description list.
            </dd>
            <dt>dt</dt>
            <dd>
              The HTML <code>dt</code> element is used to represent the term of
              the definition list.
            </dd>
          </dl>

          <p>
            <b>Note</b>: you can use css to style the list items as you want to
            make it look nice.
          </p>
        </div>

        <div id="right">
          <RelatedLinks />
        </div>
      </div>
    </>
  );
}
