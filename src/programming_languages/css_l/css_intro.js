import React, { lazy } from "react";
import UseTitle from "../../Title.js";
const LeftNav = lazy(() => import("../../LeftNav/leftNav.js"));
const RelatedCssLinks = lazy(() => import("./css_links/related_css_links.js"));

const HtmlCssJsEditor = lazy(() => import("../../Editor/HtmlCssJsEditor.js"));

export default function Css_intro() {
  UseTitle("Html Intro");
  const CssInline = `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      </head>
      <body>
      <h1 style="text-align: center; color:blue;">Hello World</h1>
      </body>
      </html>`;

  const InternalCss = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <style>
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

  const CssExternal = ` <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
      </head>
      <body>
      <h1 style="text-align: center; color:blue;">Hello World</h1>
      </body>
      </html>`;

  return (
    <>
      <div id="container">
        <div id="left">
          <LeftNav />
        </div>

        <div id="middle">
          <h1>What is CSS?</h1>
          <p>
            CSS is a language that describes how HTML elements are to be
            displayed on a web page. It's been around for more than 25 years,
            and is used by all the web developers. There are three way to use
            CSS in HTML:
          </p>
          <ul>
            <li> Inline CSS </li>
            <li>Internal CSS (included in the same HTML file)</li>
            <li> External CSS </li>
          </ul>
          <h1>Inline CSS</h1>
          <p>
            <b>Note:</b> Inline CSS is not recommended for use in production. It
            is only recommended for use in development. Inline CSS is not a good
            practice to use in production. Please use Internal CSS or External
            CSS instead.
          </p>
          <HtmlCssJsEditor props={CssInline} />

          <h1>Internal CSS</h1>
          <HtmlCssJsEditor props={InternalCss} />

          <h1>External CSS</h1>
          <HtmlCssJsEditor props={CssExternal} />
        </div>

        <div id="right">
          <RelatedCssLinks />
        </div>
      </div>
    </>
  );
}
