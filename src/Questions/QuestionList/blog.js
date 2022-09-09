import React from "react";
import "../Questions_List.css";
// import ComingSoon from "../../img/ComingSoon.png";
// import NewUpdate from "../../img/NewUpdate.png";
// import Version from "../../img/Version.PNG";
// import Image from "react-bootstrap/Image";
// import { BrowserView, MobileView } from "react-device-detect";
// import LazyLoad from "react-lazyload";
import UseTitle from "../../Title.js";
import { Link } from "react-router-dom";
function blog() {
  UseTitle("My outlook navigation panel isn't in the right place");
  return (
    <>
      <div id="container">
        <div id="left">
          <li className="list">
            <Link className="list" to="/">
              Home
            </Link>
            react-animate-on-scroll
            <Link className="list" to="/">
              Home
            </Link>
            <Link className="list" to="/">
              Home
            </Link>
          </li>
        </div>

        <div id="middle">
          {/* <div>
            <h1>Coming Soon Microsoft Outlook Navigation Panel</h1> <br />
            <p>
              &emsp;&emsp; Recently, Microsoft has been updating software as
              usual. This time Microsoft plan to update the outlook navigation
              panel display style to vertical panel on the left side. Before
              this new update, we used to see navigation panel display on the
              buttom left side of outlook. Now, Microsoft are letting to use
              some user who has turn on "Comming Soon" feature. People has
              "Comming Soon" feature are having confusion over this new update.
              You can turn off the "Comming Soon" and don't use it until new
              feature are permenently avaiable to everyone or get use it ahead
              than most people. I would suggest IT professional to use this
              feature as soon as possible and get familiar with the new
              navigation panel display style so, you will assist other people
              fast and concise way.
            </p>
          </div>
          <br />
          <hr />
          <div>
            <div className="container pt-5 p-5">
              <h2 className="">Still Confusion</h2>

              <p className="pt-3 p-3 my-3">
                &emsp;&emsp; Below, I will solve show the picture to visually
                understand what I am saying above. I will explain little on the
                top of the pictures.
              </p>
            </div>

            <br />
            <hr />
            <br />
            <div className="container pt-5 p-5 bg-info bg-gradient text-black">
              <h3>&emsp;&emsp;Microsoft Outlook Version</h3>
              <p>
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;As I know this new
                navigation display style only affect to later 2020 version. I am
                using 2022 version{" "}
              </p>

              <img
                className="img-fluid mx-auto d-block"
                src={Version}
                alt="version img not found"
                width="100%"
                loading="lazy"
              />
            </div>

            <div className="pt-5 p-3 my-3">
              <h3>&emsp;&emsp;Microsoft Outlook Version</h3>
              <p>
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;If you don't want to use the
                preview of upcoming microsoft update then you can simply click
                on Coming Soon to turn off{" "}
              </p>
              <LazyLoad>
                <Image
                  className="img-fluid mx-auto d-block"
                  src={ComingSoon}
                  alt="version img not found"
                  width="300vh"
                />
              </LazyLoad>
            </div>

            <div className="container pt-5 p-5 bg-info bg-gradient my-5 border text-black">
              <h3>&emsp;&emsp;Microsoft Outlook View</h3>
              <p className="">
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;As I know this new
                navigation display style only affect to later 2020 version. I am
                using 2022 version{" "}
              </p>
              <LazyLoad>
                <BrowserView>
                  <img
                    className="img-fluid mx-auto d-block"
                    src={NewUpdate}
                    alt="version img not found"
                    width="100%"
                  />
                </BrowserView>
              </LazyLoad>

              <LazyLoad>
                <MobileView>
                  <img
                    className="img-fluid mx-auto d-block"
                    src={NewUpdate}
                    alt="version img not found"
                  />
                </MobileView>
              </LazyLoad>
            </div>
          </div> */}
          <h1>Test</h1>
        </div>

        <div id="right">
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
        </div>
      </div>
    </>
  );
}

export default blog;
