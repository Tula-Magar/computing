import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
//https://stackoverflow.com/questions/40491483/hide-collapse-navbar-after-link-click-react-redux-react-bootstrap

function Footer() {
  return (
    <>
      <div className="FooterBackgroundColor">
        <div className="FooterWidth">
          <div className="FooterContainer">
            <div>
              <h1 className="Footer_Column_Header">Company</h1>
              <ul className="LeftFooter">
                <li>
                  <Link className="FooterLinkColors" to="/contact">
                    contact
                  </Link>
                </li>
                <li>
                  <Link className="FooterLinkColors" to="/about">
                    about
                  </Link>
                </li>
                <li>
                  <Link className="FooterLinkColors" to="/careers">
                    Career
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h1 className="Footer_Column_Header">Product</h1>
              <ul className="MiddleFooter">
                <li>
                  <Link className="FooterLinkColors" to="/question">
                    Questions
                  </Link>
                </li>

                <li>
                  <Link className="FooterLinkColors" to="/book">
                    Books
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h1 className="Footer_Column_Header">Resources</h1>
              <ul className="Right_Footer">
                <li>
                  <Link className="FooterLinkColors" to="/survey">
                    Survey
                  </Link>
                </li>
                <li>
                  <Link className="FooterLinkColors" to="/tour">
                    Tour
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h1 className="Footer_Column_Header">Social</h1>
              <ul className="Right_Footer">
                <li>
                  <SocialIcon
                    url="https://www.youtube.com/channel/UC3y-6eW4qn4cToD26hMv2xg"
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                </li>
                <li>
                  <SocialIcon
                    url="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                </li>
                <li>
                  <SocialIcon
                    url="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                </li>
                <li>
                  <SocialIcon
                    url="https://twitter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                </li>
              </ul>
            </div>
          </div>
          <div className="Logo">
            <a
              href="https://iconscout.com/icons/tmall"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tmall Logo Icon
            </a>
            <span className="logo-on"> on </span>
            <a href="https://iconscout.com">Iconscout</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
