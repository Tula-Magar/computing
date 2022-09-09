import React from "react";
import "./html_style.css";
import UseTitle from "../../Title.js";
import RelatedLinks from "./html_links/related_links";
// import Element from "../../img/html_images/html_tag.PNG";
import { Link } from "react-router-dom";
import HtmlCssJsEditor from "../../Editor/HtmlCssJsEditor.js";

export default function Html_comment() {
  UseTitle("What is HTML Comment?");
  const html_comment = `
  <!-- This is a comment -->
  `;
  const html_source_code_comment = `
  <!-- each person job status -->

  <p> John is front-end developer </p>
  <p> Alex is full-stack developer </p>
  <p> Nathan is front-end developer </p>
  <p> Mike is full-stack developer </p>
  `;

  const html_inline_comment = `
  <!-- hide content -->

  <p> John is front-end developer </p>
  <p> Alex is full-stack developer </p>

  <p> <!-- Nathan is full-stack developer too --> Nathan is front-end developer </p>
  `;

  const html_multiple_lines_comment = `
  <!-- Line one
    line two -->

  <p> Alex is full-stack developer </p>
  <p> Nathan is front-end developer </p>
  <p> Mike is full-stack developer </p>
  `;
  const html_hide_comment = `
  <!-- <p> Alex is full-stack developer </p>
  <p> Nathan is front-end developer </p> -->

  <p> Mike is full-stack developer </p>
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
          <h1>What is HTML Comment?</h1>
          <p>
            HTML comments are used to add comments to HTML documents and doesn't
            display on the web page. Comments is very useful for reader to know
            the purpose of the code. They are also used to make the code more
            readable.
          </p>
          <h1>HTML Comment Examples</h1>

          <HtmlCssJsEditor props={html_comment} />
          <p>
            Comment opening start with <code>&lt;!--</code> and closing is
            <code>--&gt;</code>
          </p>
          <h1>Source Code: Comment</h1>
          <HtmlCssJsEditor props={html_source_code_comment} />
          <p>
            When some one want to know the purpose of the code, they can read
            the comment.
            <code> &lt;!--</code> each person job status <code>--&gt;</code>.
            tells the reader the purpose of the code.
          </p>
          <h1>Inline Comment</h1>
          <HtmlCssJsEditor props={html_inline_comment} />
          <p>
            Inline comment is used to hide the code, content and more. As you
            can see in the code, the content of the code is hidden.
          </p>

          <h1>Hide Element</h1>
          <HtmlCssJsEditor props={html_hide_comment} />
          <p>
            We can use the comment to hide the code, content and more. As you
            can see in the code, the <code>p</code> tag is hidden of Alex and
            Nathan.
          </p>
          <h1>Multiple Lines Comment</h1>
          <HtmlCssJsEditor props={html_multiple_lines_comment} />
          <p>
            Mutiple lines comment is very useful to descript the code more
            understandable. You can also use the comment to hide the multiple
            codes, contents and more.
          </p>
        </div>

        <div id="right">
          <RelatedLinks />
        </div>
      </div>
    </>
  );
}
