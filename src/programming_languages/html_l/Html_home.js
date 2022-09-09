import React from "react";
import "./html_style.css";
import UseTitle from "../../Title.js";
import LeftSideLinks from "./html_links/left_side_links";
import RelatedLinks from "./html_links/related_links";
export default function Html_Home() {
  UseTitle("Html Home");
  return (
    <>
      <div id="container">
        <div id="left">
          <LeftSideLinks />
        </div>

        <div id="middle">
          <h3 className="ContentTitle"> Welcome to the HTML home page.</h3>

          <p>
            This is the home page for the HTML programming language. In this
            page, you can find information about the language, its syntax, and
            its history.
          </p>

          <h3 className="ContentTitle">What is HTML?</h3>

          <ol>
            <li className="ContentList">HTML is a markup language.</li>
            <li className="ContentList">
              HTML is used to create pages that are displayed in a Web browser.
            </li>
            <li className="ContentList">
              HTML is a way to write instructions for a computer to format text,
              images, and other objects on a Web page.
            </li>
          </ol>

          <h3 className="ContentTitle">HTMl History</h3>
          <ol>
            <li className="ContentList">
              HTML 1.0 was released in 1993 with the intention of sharing
              information that can be readable and accessible via web browsers.
              But not many of the developers were involved in creating websites.
              So the language was also not growing.
            </li>
            <li className="ContentList">
              Then comes HTML 2.0, published in 1995, which contains all the
              features of HTML 1.0 along with that few additional features,
              which remained as the standard markup language for designing and
              creating websites until January 1997 and refined various core
              features of HTML.
            </li>
            <li className="ContentList">
              Then comes HTML 3.0, where Dave Raggett introduced a fresh paper
              or draft on HTML. It included improved new features of HTML,
              giving more powerful characteristics for webmasters in designing
              web pages. But these powerful features of the new HTML slowed down
              the browser in applying further improvements.
            </li>
            <li className="ContentList">
              Then comes HTML 4.01, which is widely used and was a successful
              version of HTML before HTML 5.0, which is currently released and
              used worldwide. HTML 5 can be said for an extended version of HTML
              4.01, which was published in the year 2012.
            </li>
          </ol>
          <p> Have fun learning HTML!</p>
        </div>

        <div id="right">
          <RelatedLinks />
        </div>
      </div>
    </>
  );
}
