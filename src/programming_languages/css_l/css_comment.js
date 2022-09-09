import React, { lazy } from "react";
import UseTitle from "../../Title.js";
const LeftNav = lazy(() => import("../../LeftNav/leftNav.js"));
const RelatedCssLinks = lazy(() => import("./css_links/related_css_links.js"));

const HtmlCssJsEditor = lazy(() => import("../../Editor/HtmlCssJsEditor.js"));

export default function CSS_comment() {
  UseTitle("What is CSS Comment?");

  const InlineCSSComment = `<!DOCTYPE html> 
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    </head>
    <body>
        <h1 /* Set text color to blue and in the middle */ style="text-align: center; color:blue;">Hello World</h1>
    </body>
</html>`;

  const HTMLplusCSSComment = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    </head>
    <body>
        <!-- Set text color to blue and in the middle -->
        <h1 style="text-align: center; color:blue;">Hello World</h1>
    </body>
</html>`;

  const SingleLineComment = `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <style>
        /* SingleLine: set text color to blue and in the middle */
            h1 {
                text-align: center;
                color:blue;
            }
        </style>
    </head>
    <body>
        <h1>Hello World</h1>
    </body>
</html>`;

  const NextToCodeComment = `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <style>          
                h1 {
                    text-align: center; /* text in the middle */
                    color:blue; /* text color is blue */
                }
            </style>
        </head>
        <body>
            <h1>Hello World</h1>
        </body>
    </html>`;
  const MultiLineComment = `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <style>
            /* MultiLineComment: 
            set text color to blue 
            and 
            text in the middle */
                h1 {
                    text-align: center;
                    color:blue;
                }
            </style>
        </head>
        <body>
            <h1>Hello World</h1>
        </body>
    </html>`;

  return (
    <>
      <div id="container">
        <div id="left">
          <LeftNav />
        </div>
        <div id="middle">
          <h1>What is CSS Comment?</h1>
          <p>
            A comment is a note in a CSS or CSS file that is not executed by the
            browser. It is used to describe the purpose of a CSS file or to
            explain how to use a particular piece of code. From the perspective
            of a developer, a comment is a way to document the code. Comments
            makes it easier for a developer to understand the code.
          </p>
          <h1> Inline CSS Comment: </h1>
          <p>
            Inline CSS Comment is a comment that is placed inside the HTML tag.
          </p>
          <HtmlCssJsEditor props={InlineCSSComment} />
          <p>
            <b>Note:</b> above inline css comment works however it is not a good
            practice. It will violate the HTML standards and won't work out in
            the html validator check.
          </p>
          <h1>HTML + CSS Comment</h1>
          <p>
            When you use inline CSS comment in the html tag and want to add some
            comment. You can use the following idea:
          </p>
          <HtmlCssJsEditor props={HTMLplusCSSComment} />
          <p>
            <b>Note:</b> html + css don't use the css comment as you can see in
            the above example. They use the html comment.
          </p>
          <h1> CSS Comment In Internal/External CSS</h1>
          <p>
            CSS let you add comments in the css code and can have single line,
            next to the code, and multi line comments.
          </p>
          <h2>Single Line Comment</h2>
          <HtmlCssJsEditor props={SingleLineComment} />
          <h2>Next to Code Comment</h2>
          <HtmlCssJsEditor props={NextToCodeComment} />
          <h2>Multi Line Comment</h2>
          <HtmlCssJsEditor props={MultiLineComment} />
        </div>

        <div id="right">
          <RelatedCssLinks />
        </div>
      </div>
    </>
  );
}
