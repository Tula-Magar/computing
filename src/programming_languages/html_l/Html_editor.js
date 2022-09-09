import React from "react";
import "./html_style.css";
import UseTitle from "../../Title.js";
import RelatedLinks from "./html_links/related_links";
import LeftSideLinks from "./html_links/left_side_links";
export default function Html_editor() {
  UseTitle("Html Editor");
  return (
    <>
      <div id="container">
        <div id="left">
          <LeftSideLinks />
        </div>

        <div id="middle">
          <h1>HTML Editor?</h1>
          <p>
            There are many ways to edit HTML. You can use a text editor, a web
            browser, or the application software. There is a pro and con of text
            editor, a web browser, or the application software.
          </p>
          <h1>Text Editor</h1>
          <p>
            The text editor is the most common way to edit HTML. For me, the
            text editor is isn't very suitable to edit HTML. Text editor doesn't
            highlight html, no syntax check and, more. However, many people
            still use the text editor to edit HTML.
          </p>
          <h1>Web Browser</h1>
          <p>
            I think the web browser is the best way to edit HTML. There are many
            web version HTML editors such as codesandbox, codepen, StackBlitz,
            and many more. Web version editor is like a cloud. Basically, you
            can be online anywhere and work with the projects that you have. If
            you work on a project that used packages like react, redux, etc, I
            won't suggest you to use the web browser. When you install the
            dependencies, sometimes web browser will not be able to find the
            packages but that doesn't have a lot.
          </p>
          <p>
            You can reach to them from the following
            <a className="Link_Color" href="https://stackblitz.com/">
              {" "}
              Stackblitz,
            </a>
            <a className="Link_Color" href="https://codesandbox.io">
              {" "}
              Codesandbox,
            </a>
            <a className="Link_Color" href="https://codepen.io">
              {" "}
              Codepen
            </a>
            .
          </p>
          <h1>Application Software</h1>
          <p>
            The application software is the best way to edit HTML. There are
            many application software that can edit HTML such as VS CODE and
            many more. You can install any dependency and use it. You can't be
            online anywhere and work with the projects that you have. However,
            you can use git and github to manage your projects and access the
            code from the internet. Or you can use cloud service to manage your
            projects.
          </p>
          <p>
            You can download the application software from the following
            <a
              className="Link_Color"
              href="https://code.visualstudio.com/download"
            >
              {" "}
              VS CODE,
            </a>
          </p>
        </div>

        <div id="right">
          <RelatedLinks />
        </div>
      </div>
    </>
  );
}
