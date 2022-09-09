import React, { lazy } from "react";
import UseTitle from "../../Title.js";
import PaddingImage from "./css_images/margin.avif";
const LeftNav = lazy(() => import("../../LeftNav/leftNav.js"));
const RelatedCssLinks = lazy(() => import("./css_links/related_css_links.js"));

export default function CssPadding() {
  UseTitle("CSS Padding");
  return (
    <>
      <div id="container">
        <div id="left">
          <LeftNav />
        </div>

        <div id="middle">
          <h1>CSS Padding</h1>
          <p>
            <code>padding</code> is a shorthand property for space setting all
            the four sides of an element. It is a shorthand for the following
            CSS properties: <code>padding-top</code>, <code>padding-right</code>
            , <code>padding-bottom</code>, and <code>padding-left</code>.
          </p>
          <img
            style={{ width: "876px", height: "800px" }}
            src={PaddingImage}
            alt="margin"
          />
          <section>
            <b>a.</b> <i>padding: </i> given only one value sets the space
            around the element or website evenly in all 4 sides. However, if you
            give and set a different value for each side, the space will be
            different. <br />
            <p>
              <b>
                <i>padding: 10px; </i>
              </b>
              for all 4 sides at once.
              <br />
              <b>
                <i>padding: 10px 20px; </i>
              </b>
              for top and right sides.
              <br />
              <b>
                <i>padding: 10px 20px 30px; </i>
              </b>
              for top, right, bottom sides.
              <br />
              <b>
                <i>padding: 10px 20px 30px 40px; </i>
              </b>
              for top, right, bottom, left
              <br />
            </p>
            <b>b.</b> <i>padding-top:</i> sets the space only on the top side.
            <br />
            <b>c.</b> <i>padding-right:</i> sets the space only on the right
            side.
            <br />
            <b>d.</b> <i>padding-bottom:</i> sets the space only on the bottom
            side.
            <br />
            <b>e.</b> <i>padding-left:</i> sets the space only on the left side.
            <br />
          </section>
        </div>

        <div id="right">
          <RelatedCssLinks />
        </div>
      </div>
    </>
  );
}
