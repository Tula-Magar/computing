import React from "react";
import "./html_style.css";
import UseTitle from "../../Title.js";
import RelatedLinks from "./html_links/related_links";
import LeftSideLinks from "./html_links/left_side_links";
import HtmlCssJsEditor from "../../Editor/HtmlCssJsEditor.js";

export default function Html_heading() {
  UseTitle("What is HTML Heading?");
  const html_heading = `
  <!DOCTYPE html>
  <html>
    <!-- HTML starting head -->
    <head>
      <title>A Page Title</title>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">

      <!--- Bootstrap CSS -->
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"> 

      <!--- React js -->
      <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
      <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
      <style> 
        .center_red{
          text-align: center;
          color: red;
        }
      </style>
    </head>
    <!-- HTML ending head -->
    <body>

      <p class="center_red"> Hello, world! </p>

    </body>
  </html> 
  `;

  const html_heading_title = ` 
  <title>A Page Title</title>
  `;

  const html_heading_meta = ` 
  <meta charset="utf-8">
  `;

  const html_heading_meta_viewport = ` 
  <meta name="viewport" content="width=device-width, initial-scale=1">
  `;

  const html_heading_link = ` 
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  `;

  const html_heading_script = ` 
  <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
`;

  const html_heading_style = ` 
  <style> 
    .center_red{
      text-align: center;
      color: red;
    }
  </style>
  `;

  return (
    <>
      <div id="container">
        <div id="left">
          <LeftSideLinks />
        </div>
        <div id="middle">
          <h1>What is HTML Heading Tag?</h1>
          <p>
            HTMl Heading Tag is used to create heading in HTML. You can have
            title, style, script, meta, link, and other tags in heading.
          </p>
          <h1>HTML Head Element </h1>
          <p>
            The HTML head element is used to contain the head section of the
            HTML and also know as container for metadata {"(data about data)"}{" "}
            and is placed between the <code>{"<html>"}</code> tag and the{" "}
            <code>{"<body>"}</code> tag. HTML metadata is data about the HTML
            document. Metadata does not display on the page. Metadata typically
            define the document title, character set, styles, scripts, and other
            meta information.
          </p>
          <h1>Preview HTML Example</h1>

          <HtmlCssJsEditor props={html_heading} />

          <h1>Title in Head</h1>
          <HtmlCssJsEditor props={html_heading_title} />
          <p>
            The title element is used to define the title of the document.
            <code> A Page Title</code> will be displayed in the browser tab.
          </p>
          <h1>Meta in Head</h1>
          <HtmlCssJsEditor props={html_heading_meta} />
          <p>
            The meta element is used to define metadata about the HTML document.
            Meta data is not displayed on the page. Computer only understand 0
            and 1. We as a human can only understand the meaning of the letters
            A to Z. Meta converts computer language to human language. Imagine
            if browser display only computer language 0 and 1. There is way no
            people have zero knowledge of computer language will understand the
            meaning of 0 and 1. So, meta converts computer language to human
            language.
          </p>
          <h1>Meta Viewport in Head</h1>
          <HtmlCssJsEditor props={html_heading_meta_viewport} />
          <p>
            The width of the desktop, tablet, and phone are different so the
            viewport meta tag is used to control the width of the viewport.{" "}
            <code>100vw</code> viewport is used to make the page responsive.
            Responsive web design is a technique that makes the web page adapt
            based the width of the device screen.
          </p>
          <h1>Link in Head</h1>
          <HtmlCssJsEditor props={html_heading_link} />
          <p>
            TThe <code>{"<link>"}</code> tag defines the relationship between
            the current document and an external resource. The{" "}
            <code>{"<link>"}</code> tag is most often used to link to external
            style sheets or to add a favicon to your website. You can have any
            types of external style sheets links such as font-family, css
            framework, js library and etc.
          </p>
          <h1>Script in Head</h1>
          <HtmlCssJsEditor props={html_heading_script} />
          <p>
            The <code>{"<script>"}</code> tag is used to add client-side
            JavaScript to the HTML. React is a client-side JavaScript library
            for building user interfaces. You can any type of client-side
            JavaScript libraries such as jQuery, React, Angular, and more inside
            the opening <code>{"<script>"}</code> and closing{" "}
            <code>{"</script>"}</code> tag.
          </p>
          <h1>Style in Head</h1>
          <HtmlCssJsEditor props={html_heading_style} />
          <p>
            The <code>{"<style>"}</code> tag is used to add CSS to the HTML. CSS
            isn't part of the HTML standard. CSS is a style sheet language that
            describes the presentation of an HTML document. CSS is a cornerstone
            technology of the World Wide Web. You need to manually add CSS to
            the HTML head. CSS is a cornerstone technology of the World Wide
            Web. You need to manually add CSS to the HTML head. CSS let you
            control the style of your web pages.
          </p>
        </div>

        <div id="right">
          <RelatedLinks />
        </div>
      </div>
    </>
  );
}
