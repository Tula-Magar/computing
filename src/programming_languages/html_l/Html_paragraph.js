import React from "react";
import "./html_style.css";
import UseTitle from "../../Title.js";
import RelatedLinks from "./html_links/related_links";
import { Link } from "react-router-dom";
import HtmlCssJsEditor from "../../Editor/HtmlCssJsEditor.js";
//https://github.com/ryanseddon/react-frame-component
export default function Html_paragraph() {
  UseTitle("What is HTML Heading?");

  const html_single_paragraph = ` 
  <p>This is single paragraph</p>
  `;

  const html_spaceAndNewlines = ` 
  <p>
    This is single paragraph
    I want a start a new line
    this types of       spaces and newlines will be removed in the output or web.
  </p>
  `;

  const html_spaceAndNewlines_result = `
  This is single paragraph I want a start a new line this types of spaces and newlines will be removed in the output or web. 
  `;
  const html_break_multiple_paragraph = ` 
  <p>This is line one <br/>
   This is line two </p>
`;

  const html_pre_paragraph = ` 
  <pre> 
     Below we are going to create a some paragraphs in a single pre tag.
     You don't need to break a line in a pre tag to create a new line.

     This is line one of paragraph one.
     This is line two of paragraph one.

     this is line one of paragraph two.
        this is line two of paragraph two.

        this is line one of paragraph 3.
    this is line two of paragraph 3. 
  </pre>
  `;

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
          <h1>What is HTML Paragraph Element?</h1>
          <p>
            <strong>HTML Paragraph</strong> is a block of text that is used to{" "}
            format the text. It is used to create a paragraph. In HTML,{" "}
            <code>{"<p> </p>"}</code> tag is known as paragraph. You can create
            single and multiple lines of text in <code>{"<p> </p>"}</code>.
          </p>
          <h1>Inline Paragraph</h1>
          <HtmlCssJsEditor props={html_single_paragraph} />
          <h1>Spaces and New Lines in Paragraph are Ignored</h1>
          <p>
            By default
            <code>{"<p> </p>"}</code> tag will remove all the spaces and new
            lines in the output or web. You need to use other tags to create a
            new line such as <code>{"<br/> and <pre>"}</code> and spaces
            entities such as <code>{"&nbsp; , &ensp; , &emsp; <pre>"}</code>.
          </p>
          <HtmlCssJsEditor props={html_spaceAndNewlines} />
          <h1>Above Code Result on Web</h1>
          <HtmlCssJsEditor props={html_spaceAndNewlines_result} />
          <h1>Mutiple lines Paragraph</h1>

          <HtmlCssJsEditor props={html_break_multiple_paragraph} />
          <p>
            The <code>{"<br/>"}</code> tag is used to create a line break or
            break a line and start a new line. You can apply this
            <code>{"<br/>"}</code> technique create a new starting line.
          </p>
          <h1>Pre Element </h1>
          <HtmlCssJsEditor props={html_pre_paragraph} />
          <p>
            The <code>{"<pre>"}</code> tag is used to create a preformatted
            text. With this tag, you can create a block of text that is not to
            be formatted and don't need to use the <code>{"<br/>"}</code> tag.
          </p>
        </div>

        <div id="right">
          <RelatedLinks />
        </div>
      </div>
    </>
  );
}
