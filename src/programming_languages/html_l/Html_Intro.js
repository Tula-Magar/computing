import React from "react";
import "./html_style.css";
import UseTitle from "../../Title.js";
import RelatedLinks from "./html_links/related_links";
import Element from "../../img/html_images/html_tag.PNG";
import LeftSideLinks from "./html_links/left_side_links";
// import HtmlCssJsEditor from "../../Editor/HtmlCssJsEditor.js";

const HtmlCssJsEditor = React.lazy(() =>
  import("../../Editor/HtmlCssJsEditor.js")
);
export default function Html_intro() {
  UseTitle("Html Intro");

  const htmlIntroContent = `<!DOCTYPE html>
<html>
  <head>
    <title>My First HTML</title>
  </head>
  <body>
    <h1>My First Heading</h1>
    <p>My first paragraph.</p>
  </body>
</html>
`;

  return (
    <>
      <div id="container">
        <div id="left">
          <LeftSideLinks />
        </div>
        <div id="middle">
          <h1>What is HTML?</h1>

          <ol>
            <li>HTML is a markup language.</li>
            <li>
              HTML is used to create pages that are displayed in a Web browser.
            </li>
            <li>
              HTML is a way to write instructions for a computer to format text,
              images, and other objects on a Web page.
            </li>
          </ol>
          <p>
            HTML is the easiest language to learn, and is the most basic
            language for creating Web pages. You don't need to use lots of logic
            to use HTML but you will need to know how to use it. There are so
            many HTMl elements that you will need to know how to use them. In
            this course you will learn how to use HTML and how to create your
            web pages in a simple to complex way. So, you will be able to create
            your own web pages. If you complete this course you will master the
            HTML language and says bye bye HTML!
          </p>
          <h1>Let's Start HTML </h1>
          <HtmlCssJsEditor props={htmlIntroContent} />
          <p>
            Above is the HTML code that we will use to create our first web
            page.
            {/* page. On the left side of the screen you will see the HTML code that
            we will use to create our first web page. On the right side of the
            screen you will see the HTML code that we will use to create our
            first web page. */}
          </p>
          <h1> !DOCTYPE Element? </h1>
          <p>
            !DOCTYPE HTML is a Element that tells the browser that the page is
            the HTML page. It is the first tag in the page. It is a required.
            tag.
          </p>
          <h1>HTML Element?</h1>
          <p>
            HTML element is the root of the HTML document. It is the parent of
            as you can see that there are many HTML tags such as
            <code className="code_highlight">
              {` <head></head>,
            <body></body>,
            <h1></h1> and,
            <p></p>
            `}{" "}
            </code>
            in the above code. All of the HTML tags should be inside the{" "}
            <code className="code_highlight">{"<html>"}</code> and
            <code className="code_highlight">{" </html>"} tag</code> .
          </p>
          <h1>HTML Head Element</h1>
          <p>
            The head element is a container for metadata (data about data) and
            is placed between the{" "}
            <code className="code_highlight"> {"<html>"}</code> tag and the{" "}
            <code className="code_highlight"> {"<body>"}</code> tag. Metadata is
            data about the HTML document. Metadata doesn't display on the web.
            Metadata typically define the document title, character set, styles,
            scripts, and other meta information.
          </p>
          <h1>HTML Body Element</h1>
          <p>
            The body element is a container for the content of the document. It
            is placed between the{" "}
            <code className="code_highlight"> {"<html>"}</code> and the{" "}
            <code className="code_highlight"> {"</html>"}</code> tag.
          </p>
          <h1>HTML Elements</h1>
          <p>
            HTML elements are everything that is inside the tag start with a{" "}
            <code className="code_highlight">{"<tag_name>"}</code> and end with{" "}
            <code className="code_highlight">{"</tag_name>"}</code>. For
            example,
          </p>
          <img className="html_learning" src={Element} alt="html_tag" />
        </div>

        <div id="right">
          <RelatedLinks />
        </div>
      </div>
    </>
  );
}
