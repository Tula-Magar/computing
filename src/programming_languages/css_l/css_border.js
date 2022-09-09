import React, { lazy } from "react";
import UseTitle from "../../Title.js";
import PaddingImage from "./css_images/margin.avif";
const LeftNav = lazy(() => import("../../LeftNav/leftNav.js"));
const RelatedCssLinks = lazy(() => import("./css_links/related_css_links.js"));

export default function CssBorder() {
  UseTitle("CSS Border");
  return (
    <>
      <div id="container">
        <div id="left">
          <LeftNav />
        </div>

        <div id="middle">
          <h1>CSS Border</h1>
          <p>
            <code>border</code> is a shorthand property for space setting all
            the four sides of an element. It is a shorthand for the following
            CSS properties: <code>border-top</code>, <code>border-right</code>,{" "}
            <code>border-bottom</code>, and <code>border-left</code>.
          </p>
          <img
            style={{ width: "876px", height: "800px" }}
            src={PaddingImage}
            alt="margin"
          />
          <section>
            <b>a.</b> <i>border: </i> given only one value sets the space around
            the element or website evenly in all 4 sides. However, if you give
            and set a different value for each side, the space will be
            different. <br />
            <p>
              <b>
                <i>border: 10px; </i>
              </b>
              for all 4 sides at once.
              <br />
              <b>
                <i>border: 10px 20px; </i>
              </b>
              for top and right sides.
              <br />
              <b>
                <i>border: 10px 20px 30px; </i>
              </b>
              for top, right, bottom sides.
              <br />
              <b>
                <i>border: 10px 20px 30px 40px; </i>
              </b>
              for top, right, bottom, left
              <br />
            </p>
            <b>b.</b> <i>border-top:</i> sets the space only on the top side.
            <br />
            <b>c.</b> <i>border-right:</i> sets the space only on the right
            side.
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
