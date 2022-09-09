import React, { useRef, useEffect, useState } from "react";
import "./About.css";
import "../Home/Home.css";
import WeTheOne from "../img/pexels-lisa-fotios-3972467.jpg";
import UseTitle from "../Title.js";
import { Link } from "react-router-dom";
import Globe_Network from "../img/Globe-Network.jpg";
import Globe from "../img/giphy.gif";

function About() {
  const myref = useRef();
  const [visible, setVisible] = useState();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setVisible(entry.isIntersecting);
    });
    observer.observe(myref.current);
  }, [myref]);
  console.log(myref);
  UseTitle("About Computing");

  return (
    <React.Fragment>
      <div className="testing">
        <div className="Respawn">
          <div className="glassesBackground"> </div>
          <div className="glassesBackground"> </div>
          <div className="glassesBackground"> </div>
          <div className="glassesBackground"> </div>
          <div className="glassesBackground"> </div>
        </div>
      </div>

      <div className="contin">
        <div className="weTheOne">
          <img src={WeTheOne} alt="we the one not found" />
        </div>
        <div className="Connecting">
          <img src={WeTheOne} alt="we the one not found" />
        </div>
      </div>

      <div className="B_g_WhatWeDo">
        <div className="whatWeDo">
          <h1 className="WhatWeDoInfoHeader">What we do!</h1>
          <p className="WhatWeDoInfo">
            This is a website that will help you learn about the computer
            science, programming, information technology, engineering fields and
            more. Most of the information is provided by me and vast information
            resources. This website is a project that I undertook to learn more
            about the computer science, programming, information technology,
            engineering fields and more. Soon, I will be adding more to this
            website. I hope you enjoy the website. Please, help us to make this
            website better. You can contact to this website by email via
            <Link className="Link_Color" to="/contact">
              contact
            </Link>
            . Thank you. Find out Questions and answers about the computer
            science, programming, information technology, engineering fields and
            more from
            <Link className="Link_Color" to="/question">
              Questions
            </Link>
            . Find out about the suitable books for you from
            <Link className="Link_Color" to="/book">
              Books
            </Link>
            .
          </p>
        </div>
      </div>

      <div className="B_g_WhoWeAre">
        <div className="Container_WhoWeAre">
          <div className="Whoweare">
            <h1 className="WhoweareInfoHeader">Who we are</h1>
            <p className="WhoweareInfo">
              Founded in 2022, this website is a project that I undertook to
              learn more about the computer science, programming, information
              technology, engineering fields and more. I hope you enjoy the
              website. Please, help us to make this website better. You can
              contact to this website by email via
              <Link className="Link_Color" to="/contact">
                contact
              </Link>
              , thank you.
            </p>

            <p className="WhoweareInfo">
              Everything in this website is free. You can use it for free. You
              can even find the source code of this website on
              <a
                className="Link_Color"
                href="https://github.com/TulaMagar/computing.git"
              >
                GitHub
              </a>
              .
            </p>
            <p className="WhoweareInfo">
              Joining the teams of this website is a great way to contribute to
              the developers and technologies and to the world of people.
              Because of you, people will get more knowledge and experience
              which will help them to be more successful in the future. Thank
              You.
            </p>
            <p className="WhoweareInfo">
              The books that I have written are free. You can use them for free.
              If you have wrote a book, you can find post them here for free. If
              you have blog posts, you can iframe or link them here for free.
            </p>
          </div>
          <div className="System-gif">
            <img
              className="System"
              src={Globe_Network}
              alt="System Not Found"
              loading="lazy"
            />
            <p className="WhoweareHighlight">
              We empower people to learn and share their knowledge with the
              world through this website.
            </p>
          </div>
        </div>
      </div>

      <h1 style={{ textAlign: "center", paddingTop: 30 }}>What We Cannot Do</h1>
      <div className="ToWhom">
        <div
          className="weTheOne"
          ref={myref}
          id={`${visible ? "Left_Filp" : ""}`}
        >
          <p className="Info">
            We have created a fictional band website. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
        </div>

        <div className="Connecting">
          <p className="Info">
            We have created a fictional band website. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
        </div>

        <div
          className="Third"
          ref={myref}
          id={`${visible ? "Right_Filp" : ""}`}
        >
          <p className="Info">
            We have created a fictional band website. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
        </div>
      </div>

      <h1 className="HeadingCoreValue">Our Core value</h1>

      <div className="CoreValue">
        <div className="Value">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100px"
            height="50px"
            color="yellow"
            enableBackground="new 0 0 32 32"
            viewBox="0 0 32 32"
          >
            <path
              fill="yellow"
              d="M28.118,6.913c-0.048-0.271-0.31-0.461-0.579-0.405l-2.691,0.475c-0.272,0.048-0.454,0.307-0.405,0.579  c0.047,0.271,0.306,0.457,0.579,0.405l1.502-0.265l-7.184,10.26l-7.054-4.938c-0.225-0.16-0.539-0.104-0.696,0.122l-8.1,11.567  c-0.158,0.227-0.104,0.538,0.123,0.696C3.7,25.471,3.8,25.5,3.899,25.5c0.158,0,0.313-0.074,0.41-0.213l7.813-11.158l7.054,4.938  c0.108,0.077,0.244,0.106,0.374,0.083c0.13-0.022,0.247-0.097,0.323-0.205l7.471-10.669l0.265,1.502  c0.042,0.242,0.253,0.413,0.492,0.413c0.029,0,0.058-0.002,0.087-0.008c0.272-0.048,0.454-0.307,0.405-0.579L28.118,6.913z"
            />
          </svg>
          <div className="containert">
            <h4 className="Value_Title_Color">
              <b>Learn, Share & Grow</b>
            </h4>
            <p>
              Learn from the best and most experienced people from around the
              world. Adopt and Growth Mindset. Always learn new things. Share
              new things. Always grow your skills, knowledge, experience,
              personality and character.
            </p>
          </div>
        </div>
        <div className="Value">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100px"
            height="50px"
            data-name="Layer 1"
            viewBox="0 0 512 512"
          >
            <circle cx="256" cy="256" r="219.5" fill="yellow" />
            <path
              fill="yellow"
              d="M96.5,256C96.5,144.95184,178.969,53.17993,286,38.5495A221.37921,221.37921,0,0,0,256,36.5C134.77344,36.5,36.5,134.7735,36.5,256S134.77344,475.5,256,475.5a221.37921,221.37921,0,0,0,30-2.0495C178.969,458.82007,96.5,367.04816,96.5,256Z"
            />
            <path
              fill="#74563a"
              d="M345.24052,332.47612a5.00558,5.00558,0,0,1,7.00967,5.04412A93.93106,93.93106,0,0,1,258.632,423h-5.264a93.859,93.859,0,0,1-93.61864-85.47955,5.00558,5.00558,0,0,1,7.00932-5.04413A219.03625,219.03625,0,0,0,256.015,351.56h1.113A218.94088,218.94088,0,0,0,345.24052,332.47612Z"
            />
            <path
              fill="#674b34"
              d="M245.52734,415.07385A93.73827,93.73827,0,0,1,190.181,341.37323a219.35755,219.35755,0,0,1-23.40024-8.8884,5.00812,5.00812,0,0,0-7.03157,5.03351A93.92109,93.92109,0,0,0,253.368,423h5.264a94.90741,94.90741,0,0,0,12.36719-.80652A93.25455,93.25455,0,0,1,245.52734,415.07385Z"
            />
            <path
              fill="#e5303e"
              d="M296.46509 415.06641v.00744A93.60723 93.60723 0 0 1 258.632 423h-5.264a93.64367 93.64367 0 0 1-37.84067-7.92615C216.69308 413.34448 230.40585 393.75623 255.5 393.5 281.213 393.23755 295.41644 413.51172 296.46509 415.06641zM153.12783 154.07164v0a3.28836 3.28836 0 0 1-3.948 2.45764h0A39.06837 39.06837 0 0 0 102.27448 185.728l0 .00011a39.06832 39.06832 0 0 0 29.19868 46.90528l3.20285.74518 64.41627 14.98732a12 12 0 0 0 14.40716-8.96849l14.98733-64.41627.74518-3.20285A39.06838 39.06838 0 0 0 200.03322 124.873l-.00011 0A39.06831 39.06831 0 0 0 153.12783 154.07164zM363.12916 154.07164v0a3.28836 3.28836 0 0 0 3.948 2.45764h0A39.06837 39.06837 0 0 1 413.98251 185.728l0 .00011a39.06832 39.06832 0 0 1-29.19868 46.90528l-3.20285.74518-64.41627 14.98732a12 12 0 0 1-14.40716-8.96849l-14.98732-64.41627-.74519-3.20285A39.06838 39.06838 0 0 1 316.22377 124.873l.00011 0A39.06831 39.06831 0 0 1 363.12916 154.07164z"
            />
            <path
              fill="#b72732"
              d="M287.77026 174.98114l.88611 3.80865a39.02306 39.02306 0 0 1 27.56745-23.9168l.00006-.00007a39.06832 39.06832 0 0 1 46.90527 29.19874h.00006a3.28828 3.28828 0 0 0 3.94794 2.45764h.00006a39.07225 39.07225 0 0 1 44.92139 23.0462 38.8778 38.8778 0 0 0 1.98394-23.84741V185.728a39.06839 39.06839 0 0 0-46.90533-29.19873h-.00006a3.28828 3.28828 0 0 1-3.94794-2.45764h-.00006a39.06832 39.06832 0 0 0-46.90527-29.19874l-.00006.00007a39.06833 39.06833 0 0 0-29.19873 46.90527zM122.27441 205.72809V205.728a39.06852 39.06852 0 0 1 46.9054-29.19873h.00012a3.28825 3.28825 0 0 0 3.94788-2.45764h.00012a39.06823 39.06823 0 0 1 46.90521-29.19874l.00012.00007a39.244 39.244 0 0 1 6.90149 2.30523A39.00721 39.00721 0 0 0 200.03326 124.873l-.00012-.00007a39.06819 39.06819 0 0 0-46.90521 29.19874h-.00012a3.28825 3.28825 0 0 1-3.94788 2.45764h-.00012a39.06852 39.06852 0 0 0-46.9054 29.19873v.00006a39.07284 39.07284 0 0 0 22.29725 44.6A38.89333 38.89333 0 0 1 122.27441 205.72809zM271 422.19c-.63.09-1.27.16-1.91.23-.32.04-.64.07-.96.1-.66.07-1.33.13-2 .18-.83.07-1.65.12-2.49.17-.62.03-1.25.06-1.88.08-.31.01-.62.02-.93.02-.73.02-1.47.03-2.2.03h-5.26a93.61192 93.61192 0 0 1-37.84-7.93 52.04815 52.04815 0 0 1 10.92-11.27A93.406 93.406 0 0 0 271 422.19z"
            />
            <path
              fill="#b72732"
              d="M271,422.19c-.63.09-1.27.16-1.91.23-.32.04-.64.07-.96.1-.66.07-1.33.13-2,.18-.83.07-1.65.12-2.49.17-.62.03-1.25.06-1.88.08-.31.01-.62.02-.93.02-.73.02-1.47.03-2.2.03h-5.26a93.61192,93.61192,0,0,1-37.84-7.93,52.04815,52.04815,0,0,1,10.92-11.27A93.406,93.406,0,0,0,271,422.19Z"
            />
          </svg>

          <div className="containert">
            <h4 className="Value_Title_Color">
              <b>Customer Stories</b>
            </h4>
            <p>
              We love to hear from our customers. Looking for ways to improve
              our services and products.
            </p>
          </div>
        </div>
        <div className="Value">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100px"
            height="50px"
            enableBackground="new 0 0 64 64"
            viewBox="0 0 64 64"
          >
            <path
              fill="yellow"
              d="M14,26.99H8v-5c0-1.105,0.895-2,2-2h2c1.105,0,2,0.895,2,2V26.99z"
            />
            <path
              fill="#dbe7f6"
              d="M8,25.99v1h6v-5c0-0.552-0.224-1.052-0.586-1.414L8,25.99z"
            />
            <circle cx="11.03" cy="16.019" r="2" fill="#f4f8f8" />
            <path
              fill="#f4f8f8"
              d="M56,26.99h-6v-5c0-1.105,0.895-2,2-2h2c1.105,0,2,0.895,2,2V26.99z"
            />
            <path
              fill="#dbe7f6"
              d="M50,25.99v1h6v-5c0-0.552-0.224-1.052-0.586-1.414L50,25.99z"
            />
            <circle cx="53.03" cy="16.019" r="2" fill="#f4f8f8" />
            <path
              fill="#f4f8f8"
              d="M14,50.99H8v-5c0-1.105,0.895-2,2-2h2c1.105,0,2,0.895,2,2V50.99z"
            />
            <path
              fill="#dbe7f6"
              d="M8,49.99v1h6v-5c0-0.552-0.224-1.052-0.586-1.414L8,49.99z"
            />
            <circle cx="11.03" cy="40.019" r="2" fill="#f4f8f8" />
            <path
              fill="#f4f8f8"
              d="M56,50.99h-6v-5c0-1.105,0.895-2,2-2h2c1.105,0,2,0.895,2,2V50.99z"
            />
            <path
              fill="#dbe7f6"
              d="M50,49.99v1h6v-5c0-0.552-0.224-1.052-0.586-1.414L50,49.99z"
            />
            <circle cx="53.03" cy="40.019" r="2" fill="#f4f8f8" />
            <path
              fill="#f4f8f8"
              d="M35,14.99h-6v-5c0-1.105,0.895-2,2-2h2c1.105,0,2,0.895,2,2V14.99z"
            />
            <path
              fill="#dbe7f6"
              d="M29,13.99v1h6v-5c0-0.552-0.224-1.052-0.586-1.414L29,13.99z"
            />
            <circle cx="32.03" cy="4.019" r="2" fill="#f4f8f8" />
            <path
              fill="#f4f8f8"
              d="M35,35.99h-6v-5c0-1.105,0.895-2,2-2h2c1.105,0,2,0.895,2,2V35.99z"
            />
            <path
              fill="#dbe7f6"
              d="M29,34.99v1h6v-5c0-0.552-0.224-1.052-0.586-1.414L29,34.99z"
            />
            <circle cx="32.03" cy="25.019" r="2" fill="#f4f8f8" />
            <path
              fill="#f4f8f8"
              d="M35,62h-6v-5c0-1.105,0.895-2,2-2h2c1.105,0,2,0.895,2,2V62z"
            />
            <path
              fill="#dbe7f6"
              d="M29,61v1h6v-5c0-0.552-0.224-1.052-0.586-1.414L29,61z"
            />
            <circle cx="32.03" cy="51.029" r="2" fill="#f4f8f8" />
            <circle
              cx="16.03"
              cy="41.24"
              r=".5"
              fill="#4574ba"
              transform="rotate(-60.166 16.03 41.239)"
            />
            <circle
              cx="17.765"
              cy="42.235"
              r=".5"
              fill="#4574ba"
              transform="rotate(-60.166 17.764 42.233)"
            />
            <circle
              cx="19.5"
              cy="43.23"
              r=".5"
              fill="#4574ba"
              transform="rotate(-60.166 19.499 43.229)"
            />
            <circle
              cx="21.235"
              cy="44.225"
              r=".5"
              fill="#4574ba"
              transform="rotate(-60.166 21.234 44.223)"
            />
            <circle
              cx="22.97"
              cy="45.22"
              r=".5"
              fill="#4574ba"
              transform="rotate(-60.166 22.968 45.218)"
            />
            <circle
              cx="24.705"
              cy="46.215"
              r=".5"
              fill="#4574ba"
              transform="rotate(-60.166 24.703 46.213)"
            />
            <circle
              cx="26.44"
              cy="47.21"
              r=".5"
              fill="#4574ba"
              transform="rotate(-60.166 26.438 47.208)"
            />
            <circle
              cx="48.03"
              cy="41.237"
              r=".5"
              fill="#4574ba"
              transform="rotate(-29.834 48.03 41.237)"
            />
            <circle
              cx="46.295"
              cy="42.232"
              r=".5"
              fill="#4574ba"
              transform="rotate(-29.834 46.296 42.232)"
            />
            <circle
              cx="44.56"
              cy="43.227"
              r=".5"
              fill="#4574ba"
              transform="rotate(-29.834 44.56 43.227)"
            />
            <circle
              cx="42.825"
              cy="44.222"
              r=".5"
              fill="#4574ba"
              transform="rotate(-29.834 42.826 44.222)"
            />
            <circle
              cx="41.09"
              cy="45.217"
              r=".5"
              fill="#4574ba"
              transform="rotate(-29.834 41.09 45.217)"
            />
            <circle
              cx="39.355"
              cy="46.212"
              r=".5"
              fill="#4574ba"
              transform="rotate(-29.834 39.356 46.212)"
            />
            <circle
              cx="37.621"
              cy="47.207"
              r=".5"
              fill="#4574ba"
              transform="rotate(-29.834 37.621 47.207)"
            />
            <path
              fill="#437abe"
              d="M32.03 46.418c-.276 0-.5-.224-.5-.5V38.99c0-.276.224-.5.5-.5s.5.224.5.5v6.928C32.53 46.195 32.307 46.418 32.03 46.418zM32.03 6.519c-1.379 0-2.5-1.122-2.5-2.5s1.121-2.5 2.5-2.5 2.5 1.122 2.5 2.5S33.409 6.519 32.03 6.519zM32.03 2.519c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5S32.857 2.519 32.03 2.519z"
            />
            <circle cx="16.03" cy="25.237" r=".5" fill="#4574ba" />
            <circle cx="16.03" cy="27.237" r=".5" fill="#4574ba" />
            <circle cx="16.03" cy="29.237" r=".5" fill="#4574ba" />
            <circle cx="16.03" cy="31.237" r=".5" fill="#4574ba" />
            <circle cx="16.03" cy="33.237" r=".5" fill="#4574ba" />
            <circle cx="16.03" cy="35.237" r=".5" fill="#4574ba" />
            <circle cx="16.03" cy="37.237" r=".5" fill="#4574ba" />
            <circle cx="16.03" cy="39.237" r=".5" fill="#4574ba" />
            <circle cx="48.03" cy="39.237" r=".5" fill="#4574ba" />
            <circle cx="48.03" cy="25.237" r=".5" fill="#4574ba" />
            <circle cx="48.03" cy="27.237" r=".5" fill="#4574ba" />
            <circle cx="48.03" cy="29.237" r=".5" fill="#4574ba" />
            <circle cx="48.03" cy="31.237" r=".5" fill="#4574ba" />
            <circle cx="48.03" cy="33.237" r=".5" fill="#4574ba" />
            <circle cx="48.03" cy="35.237" r=".5" fill="#4574ba" />
            <circle cx="48.03" cy="37.237" r=".5" fill="#4574ba" />
            <circle
              cx="28.175"
              cy="48.205"
              r=".5"
              fill="#4574ba"
              transform="rotate(-60.166 28.173 48.203)"
            />
            <circle
              cx="35.886"
              cy="48.202"
              r=".5"
              fill="#4574ba"
              transform="rotate(-29.834 35.886 48.202)"
            />
            <circle
              cx="18.633"
              cy="21.742"
              r=".5"
              fill="#4574ba"
              transform="rotate(-29.834 18.633 21.742)"
            />
            <circle
              cx="20.368"
              cy="20.747"
              r=".5"
              fill="#4574ba"
              transform="rotate(-29.834 20.368 20.747)"
            />
            <circle
              cx="22.102"
              cy="19.752"
              r=".5"
              fill="#4574ba"
              transform="rotate(-29.834 22.103 19.752)"
            />
            <circle
              cx="23.837"
              cy="18.757"
              r=".5"
              fill="#4574ba"
              transform="rotate(-29.834 23.838 18.757)"
            />
            <circle
              cx="25.572"
              cy="17.762"
              r=".5"
              fill="#4574ba"
              transform="rotate(-29.834 25.573 17.762)"
            />
            <circle
              cx="27.307"
              cy="16.767"
              r=".5"
              fill="#4574ba"
              transform="rotate(-29.834 27.307 16.767)"
            />
            <circle
              cx="36.633"
              cy="16.767"
              r=".5"
              fill="#4574ba"
              transform="rotate(-60.166 36.63 16.767)"
            />
            <circle
              cx="38.368"
              cy="17.762"
              r=".5"
              fill="#4574ba"
              transform="rotate(-60.166 38.366 17.762)"
            />
            <circle
              cx="40.102"
              cy="18.757"
              r=".5"
              fill="#4574ba"
              transform="rotate(-60.166 40.1 18.757)"
            />
            <circle
              cx="41.837"
              cy="19.752"
              r=".5"
              fill="#4574ba"
              transform="rotate(-60.166 41.835 19.752)"
            />
            <circle
              cx="43.572"
              cy="20.747"
              r=".5"
              fill="#4574ba"
              transform="rotate(-60.166 43.57 20.747)"
            />
            <circle
              cx="45.307"
              cy="21.742"
              r=".5"
              fill="#4574ba"
              transform="rotate(-60.166 45.305 21.742)"
            />
            <path
              fill="#437abe"
              d="M35 15.49h-6c-.276 0-.5-.224-.5-.5v-5c0-1.378 1.121-2.5 2.5-2.5h2c1.379 0 2.5 1.122 2.5 2.5v5C35.5 15.267 35.276 15.49 35 15.49zM29.5 14.49h5v-4.5c0-.827-.673-1.5-1.5-1.5h-2c-.827 0-1.5.673-1.5 1.5V14.49zM32.03 27.519c-1.379 0-2.5-1.122-2.5-2.5s1.121-2.5 2.5-2.5 2.5 1.122 2.5 2.5S33.409 27.519 32.03 27.519zM32.03 23.519c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5S32.857 23.519 32.03 23.519zM35 36.49h-6c-.276 0-.5-.224-.5-.5v-5c0-1.378 1.121-2.5 2.5-2.5h2c1.379 0 2.5 1.122 2.5 2.5v5C35.5 36.267 35.276 36.49 35 36.49zM29.5 35.49h5v-4.5c0-.827-.673-1.5-1.5-1.5h-2c-.827 0-1.5.673-1.5 1.5V35.49zM32.121 53.51c-1.379 0-2.5-1.122-2.5-2.5s1.121-2.5 2.5-2.5 2.5 1.122 2.5 2.5S33.5 53.51 32.121 53.51zM32.121 49.51c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5S32.948 49.51 32.121 49.51zM35.091 62.481h-6c-.276 0-.5-.224-.5-.5v-5c0-1.378 1.121-2.5 2.5-2.5h2c1.379 0 2.5 1.122 2.5 2.5v5C35.591 62.258 35.367 62.481 35.091 62.481zM29.591 61.481h5v-4.5c0-.827-.673-1.5-1.5-1.5h-2c-.827 0-1.5.673-1.5 1.5V61.481zM11.03 18.519c-1.379 0-2.5-1.122-2.5-2.5s1.121-2.5 2.5-2.5 2.5 1.122 2.5 2.5S12.409 18.519 11.03 18.519zM11.03 14.519c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5S11.857 14.519 11.03 14.519zM14 27.49H8c-.276 0-.5-.224-.5-.5v-5c0-1.378 1.121-2.5 2.5-2.5h2c1.379 0 2.5 1.122 2.5 2.5v5C14.5 27.267 14.276 27.49 14 27.49zM8.5 26.49h5v-4.5c0-.827-.673-1.5-1.5-1.5h-2c-.827 0-1.5.673-1.5 1.5V26.49zM53.03 18.519c-1.379 0-2.5-1.122-2.5-2.5s1.121-2.5 2.5-2.5 2.5 1.122 2.5 2.5S54.409 18.519 53.03 18.519zM53.03 14.519c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5S53.857 14.519 53.03 14.519zM56 27.49h-6c-.276 0-.5-.224-.5-.5v-5c0-1.378 1.121-2.5 2.5-2.5h2c1.379 0 2.5 1.122 2.5 2.5v5C56.5 27.267 56.276 27.49 56 27.49zM50.5 26.49h5v-4.5c0-.827-.673-1.5-1.5-1.5h-2c-.827 0-1.5.673-1.5 1.5V26.49zM11.03 42.519c-1.379 0-2.5-1.122-2.5-2.5s1.121-2.5 2.5-2.5 2.5 1.122 2.5 2.5S12.409 42.519 11.03 42.519zM11.03 38.519c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5S11.857 38.519 11.03 38.519zM14 51.49H8c-.276 0-.5-.224-.5-.5v-5c0-1.378 1.121-2.5 2.5-2.5h2c1.379 0 2.5 1.122 2.5 2.5v5C14.5 51.267 14.276 51.49 14 51.49zM8.5 50.49h5v-4.5c0-.827-.673-1.5-1.5-1.5h-2c-.827 0-1.5.673-1.5 1.5V50.49zM53.03 42.519c-1.379 0-2.5-1.122-2.5-2.5s1.121-2.5 2.5-2.5 2.5 1.122 2.5 2.5S54.409 42.519 53.03 42.519zM53.03 38.519c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5S53.857 38.519 53.03 38.519zM56 51.49h-6c-.276 0-.5-.224-.5-.5v-5c0-1.378 1.121-2.5 2.5-2.5h2c1.379 0 2.5 1.122 2.5 2.5v5C56.5 51.267 56.276 51.49 56 51.49zM50.5 50.49h5v-4.5c0-.827-.673-1.5-1.5-1.5h-2c-.827 0-1.5.673-1.5 1.5V50.49zM53.03 36.49c-.276 0-.5-.224-.5-.5v-7c0-.276.224-.5.5-.5s.5.224.5.5v7C53.53 36.267 53.307 36.49 53.03 36.49zM37 53.617c-.172 0-.341-.089-.433-.25-.139-.239-.057-.545.183-.683l11-6.351c.238-.138.545-.058.683.183.139.239.057.545-.183.683l-11 6.351C37.171 53.595 37.085 53.617 37 53.617zM27 53.582c-.085 0-.171-.021-.25-.067l-11-6.351c-.239-.138-.321-.444-.183-.683.138-.239.444-.319.683-.183l11 6.351c.239.138.321.444.183.683C27.341 53.492 27.172 53.582 27 53.582zM11.03 36.49c-.276 0-.5-.224-.5-.5v-7c0-.276.224-.5.5-.5s.5.224.5.5v7C11.53 36.267 11.307 36.49 11.03 36.49zM15 17.821c-.172 0-.341-.089-.433-.25-.139-.239-.057-.545.183-.683l12-6.928c.238-.138.545-.058.683.183.139.239.057.545-.183.683l-12 6.928C15.171 17.799 15.085 17.821 15 17.821zM49 17.786c-.085 0-.171-.021-.25-.067l-12-6.928c-.239-.138-.321-.444-.183-.683.138-.239.444-.319.683-.183l12 6.928c.239.138.321.444.183.683C49.341 17.696 49.172 17.786 49 17.786zM37 29.538c-.172 0-.341-.089-.433-.25-.139-.239-.057-.545.183-.683l11-6.351c.238-.139.545-.057.683.183.139.239.057.545-.183.683l-11 6.351C37.171 29.516 37.085 29.538 37 29.538zM27 29.538c-.085 0-.171-.021-.25-.067l-11-6.351c-.239-.138-.321-.444-.183-.683.138-.239.444-.32.683-.183l11 6.351c.239.138.321.444.183.683C27.341 29.448 27.172 29.538 27 29.538z"
            />
          </svg>
          <div className="containert">
            <h4 className="Value_Title_Color">
              <b>Keep community at our center</b>
            </h4>
            <p>
              Community is the key to success and heart of our website. Post,
              Share, and Comment on our community to help us grow. Community to
              help you achieve your goals.
            </p>
          </div>
        </div>
        <div className="Value">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100px"
            height="50px"
            data-name="Layer 1"
            viewBox="0 0 128 128"
          >
            <circle cx="8" cy="35" r="8" />
            <circle cx="58" cy="104" r="8" />
            <circle cx="52" cy="62" r="8" />
            <circle cx="84" cy="82" r="8" />
            <circle cx="111" cy="98" r="8" />
            <circle cx="16" cy="91" r="8" />
            <circle cx="120" cy="50" r="8" />
            <circle cx="96" cy="24" r="8" />
            <path d="M93.20764 89.6828l6.60052 4.02344a12.0003 12.0003 0 0 1 2.0354-3.44421l-6.62549-4.03821A11.99707 11.99707 0 0 1 93.20764 89.6828zM109.76971 56.2403L105.22559 60.189 100.264 35.20337a11.91177 11.91177 0 0 1-3.9234.77942L101.748 63.21143 91.17194 72.40179a12.09051 12.09051 0 0 1 2.77264 2.88959l8.70093-7.56091 3.80713 19.17072a11.91626 11.91626 0 0 1 3.90527-.86859L106.123 64.7085l6.26221-5.44183A12.08378 12.08378 0 0 1 109.76971 56.2403zM68.18109 97.67926L75.981 90.90137a12.0662 12.0662 0 0 1-2.49628-3.1297l-7.9458 6.90479A12.08056 12.08056 0 0 1 68.18109 97.67926zM85.70776 30.13843l-26.326 22.42041a12.08039 12.08039 0 0 1 2.69891 2.9552L88.2962 33.18793A12.07781 12.07781 0 0 1 85.70776 30.13843zM75.1109 73.968L63.0697 66.62848a12.01133 12.01133 0 0 1-2.15143 3.37262l12.02734 7.33105A12.01744 12.01744 0 0 1 75.1109 73.968zM16.81262 43.11737L40.797 57.73682a12.001 12.001 0 0 1 2.02435-3.45026L19.00592 39.7699A12.01941 12.01941 0 0 1 16.81262 43.11737zM33.81934 74.3291L24.3468 82.39655a12.05082 12.05082 0 0 1 2.37012 3.23566l9.46179-8.058 13.175 18.12671a12.0524 12.0524 0 0 1 3.21118-2.38513L39.23242 74.97266l4.76416-4.05707a12.06564 12.06564 0 0 1-2.50006-3.12445l-4.6225 3.9364L16.39874 43.55682a12.04311 12.04311 0 0 1-3.28583 2.28363z" />
          </svg>
          <div className="containert">
            <h4 className="Value_Title_Color">
              <b>Empower people to deliver outstanding results</b>
            </h4>
            <p>Support your team to achieve their goals.</p>
          </div>
        </div>
        <div className="Value">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100px"
            height="50px"
            color="yellow"
            enableBackground="new 0 0 32 32"
            viewBox="0 0 32 32"
          >
            <path
              fill="yellow"
              d="M28.118,6.913c-0.048-0.271-0.31-0.461-0.579-0.405l-2.691,0.475c-0.272,0.048-0.454,0.307-0.405,0.579  c0.047,0.271,0.306,0.457,0.579,0.405l1.502-0.265l-7.184,10.26l-7.054-4.938c-0.225-0.16-0.539-0.104-0.696,0.122l-8.1,11.567  c-0.158,0.227-0.104,0.538,0.123,0.696C3.7,25.471,3.8,25.5,3.899,25.5c0.158,0,0.313-0.074,0.41-0.213l7.813-11.158l7.054,4.938  c0.108,0.077,0.244,0.106,0.374,0.083c0.13-0.022,0.247-0.097,0.323-0.205l7.471-10.669l0.265,1.502  c0.042,0.242,0.253,0.413,0.492,0.413c0.029,0,0.058-0.002,0.087-0.008c0.272-0.048,0.454-0.307,0.405-0.579L28.118,6.913z"
            />
          </svg>
          <div className="containert">
            <h4 className="Value_Title_Color">
              <b>Learn, Share & Grow</b>
            </h4>
            <p>
              Learn from the best and most experienced people from around the
              world. Adopt and Growth Mindset. Always learn new things. Share
              new things. Always grow your skills, knowledge, experience,
              personality and character.
            </p>
          </div>
        </div>
        <div className="Value">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100px"
            height="50px"
            data-name="Layer 1"
            viewBox="0 0 512 512"
          >
            <circle cx="256" cy="256" r="219.5" fill="yellow" />
            <path
              fill="yellow"
              d="M96.5,256C96.5,144.95184,178.969,53.17993,286,38.5495A221.37921,221.37921,0,0,0,256,36.5C134.77344,36.5,36.5,134.7735,36.5,256S134.77344,475.5,256,475.5a221.37921,221.37921,0,0,0,30-2.0495C178.969,458.82007,96.5,367.04816,96.5,256Z"
            />
            <path
              fill="#74563a"
              d="M345.24052,332.47612a5.00558,5.00558,0,0,1,7.00967,5.04412A93.93106,93.93106,0,0,1,258.632,423h-5.264a93.859,93.859,0,0,1-93.61864-85.47955,5.00558,5.00558,0,0,1,7.00932-5.04413A219.03625,219.03625,0,0,0,256.015,351.56h1.113A218.94088,218.94088,0,0,0,345.24052,332.47612Z"
            />
            <path
              fill="#674b34"
              d="M245.52734,415.07385A93.73827,93.73827,0,0,1,190.181,341.37323a219.35755,219.35755,0,0,1-23.40024-8.8884,5.00812,5.00812,0,0,0-7.03157,5.03351A93.92109,93.92109,0,0,0,253.368,423h5.264a94.90741,94.90741,0,0,0,12.36719-.80652A93.25455,93.25455,0,0,1,245.52734,415.07385Z"
            />
            <path
              fill="#e5303e"
              d="M296.46509 415.06641v.00744A93.60723 93.60723 0 0 1 258.632 423h-5.264a93.64367 93.64367 0 0 1-37.84067-7.92615C216.69308 413.34448 230.40585 393.75623 255.5 393.5 281.213 393.23755 295.41644 413.51172 296.46509 415.06641zM153.12783 154.07164v0a3.28836 3.28836 0 0 1-3.948 2.45764h0A39.06837 39.06837 0 0 0 102.27448 185.728l0 .00011a39.06832 39.06832 0 0 0 29.19868 46.90528l3.20285.74518 64.41627 14.98732a12 12 0 0 0 14.40716-8.96849l14.98733-64.41627.74518-3.20285A39.06838 39.06838 0 0 0 200.03322 124.873l-.00011 0A39.06831 39.06831 0 0 0 153.12783 154.07164zM363.12916 154.07164v0a3.28836 3.28836 0 0 0 3.948 2.45764h0A39.06837 39.06837 0 0 1 413.98251 185.728l0 .00011a39.06832 39.06832 0 0 1-29.19868 46.90528l-3.20285.74518-64.41627 14.98732a12 12 0 0 1-14.40716-8.96849l-14.98732-64.41627-.74519-3.20285A39.06838 39.06838 0 0 1 316.22377 124.873l.00011 0A39.06831 39.06831 0 0 1 363.12916 154.07164z"
            />
            <path
              fill="#b72732"
              d="M287.77026 174.98114l.88611 3.80865a39.02306 39.02306 0 0 1 27.56745-23.9168l.00006-.00007a39.06832 39.06832 0 0 1 46.90527 29.19874h.00006a3.28828 3.28828 0 0 0 3.94794 2.45764h.00006a39.07225 39.07225 0 0 1 44.92139 23.0462 38.8778 38.8778 0 0 0 1.98394-23.84741V185.728a39.06839 39.06839 0 0 0-46.90533-29.19873h-.00006a3.28828 3.28828 0 0 1-3.94794-2.45764h-.00006a39.06832 39.06832 0 0 0-46.90527-29.19874l-.00006.00007a39.06833 39.06833 0 0 0-29.19873 46.90527zM122.27441 205.72809V205.728a39.06852 39.06852 0 0 1 46.9054-29.19873h.00012a3.28825 3.28825 0 0 0 3.94788-2.45764h.00012a39.06823 39.06823 0 0 1 46.90521-29.19874l.00012.00007a39.244 39.244 0 0 1 6.90149 2.30523A39.00721 39.00721 0 0 0 200.03326 124.873l-.00012-.00007a39.06819 39.06819 0 0 0-46.90521 29.19874h-.00012a3.28825 3.28825 0 0 1-3.94788 2.45764h-.00012a39.06852 39.06852 0 0 0-46.9054 29.19873v.00006a39.07284 39.07284 0 0 0 22.29725 44.6A38.89333 38.89333 0 0 1 122.27441 205.72809zM271 422.19c-.63.09-1.27.16-1.91.23-.32.04-.64.07-.96.1-.66.07-1.33.13-2 .18-.83.07-1.65.12-2.49.17-.62.03-1.25.06-1.88.08-.31.01-.62.02-.93.02-.73.02-1.47.03-2.2.03h-5.26a93.61192 93.61192 0 0 1-37.84-7.93 52.04815 52.04815 0 0 1 10.92-11.27A93.406 93.406 0 0 0 271 422.19z"
            />
            <path
              fill="#b72732"
              d="M271,422.19c-.63.09-1.27.16-1.91.23-.32.04-.64.07-.96.1-.66.07-1.33.13-2,.18-.83.07-1.65.12-2.49.17-.62.03-1.25.06-1.88.08-.31.01-.62.02-.93.02-.73.02-1.47.03-2.2.03h-5.26a93.61192,93.61192,0,0,1-37.84-7.93,52.04815,52.04815,0,0,1,10.92-11.27A93.406,93.406,0,0,0,271,422.19Z"
            />
          </svg>

          <div className="containert">
            <h4 className="Value_Title_Color">
              <b>Customer Stories</b>
            </h4>
            <p>
              We love to hear from our customers. Looking for ways to improve
              our services and products.
            </p>
          </div>
        </div>
        <div className="Value">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100px"
            height="50px"
            enableBackground="new 0 0 64 64"
            viewBox="0 0 64 64"
          >
            <path
              fill="yellow"
              d="M14,26.99H8v-5c0-1.105,0.895-2,2-2h2c1.105,0,2,0.895,2,2V26.99z"
            />
            <path
              fill="#dbe7f6"
              d="M8,25.99v1h6v-5c0-0.552-0.224-1.052-0.586-1.414L8,25.99z"
            />
            <circle cx="11.03" cy="16.019" r="2" fill="#f4f8f8" />
            <path
              fill="#f4f8f8"
              d="M56,26.99h-6v-5c0-1.105,0.895-2,2-2h2c1.105,0,2,0.895,2,2V26.99z"
            />
            <path
              fill="#dbe7f6"
              d="M50,25.99v1h6v-5c0-0.552-0.224-1.052-0.586-1.414L50,25.99z"
            />
            <circle cx="53.03" cy="16.019" r="2" fill="#f4f8f8" />
            <path
              fill="#f4f8f8"
              d="M14,50.99H8v-5c0-1.105,0.895-2,2-2h2c1.105,0,2,0.895,2,2V50.99z"
            />
            <path
              fill="#dbe7f6"
              d="M8,49.99v1h6v-5c0-0.552-0.224-1.052-0.586-1.414L8,49.99z"
            />
            <circle cx="11.03" cy="40.019" r="2" fill="#f4f8f8" />
            <path
              fill="#f4f8f8"
              d="M56,50.99h-6v-5c0-1.105,0.895-2,2-2h2c1.105,0,2,0.895,2,2V50.99z"
            />
            <path
              fill="#dbe7f6"
              d="M50,49.99v1h6v-5c0-0.552-0.224-1.052-0.586-1.414L50,49.99z"
            />
            <circle cx="53.03" cy="40.019" r="2" fill="#f4f8f8" />
            <path
              fill="#f4f8f8"
              d="M35,14.99h-6v-5c0-1.105,0.895-2,2-2h2c1.105,0,2,0.895,2,2V14.99z"
            />
            <path
              fill="#dbe7f6"
              d="M29,13.99v1h6v-5c0-0.552-0.224-1.052-0.586-1.414L29,13.99z"
            />
            <circle cx="32.03" cy="4.019" r="2" fill="#f4f8f8" />
            <path
              fill="#f4f8f8"
              d="M35,35.99h-6v-5c0-1.105,0.895-2,2-2h2c1.105,0,2,0.895,2,2V35.99z"
            />
            <path
              fill="#dbe7f6"
              d="M29,34.99v1h6v-5c0-0.552-0.224-1.052-0.586-1.414L29,34.99z"
            />
            <circle cx="32.03" cy="25.019" r="2" fill="#f4f8f8" />
            <path
              fill="#f4f8f8"
              d="M35,62h-6v-5c0-1.105,0.895-2,2-2h2c1.105,0,2,0.895,2,2V62z"
            />
            <path
              fill="#dbe7f6"
              d="M29,61v1h6v-5c0-0.552-0.224-1.052-0.586-1.414L29,61z"
            />
            <circle cx="32.03" cy="51.029" r="2" fill="#f4f8f8" />
            <circle
              cx="16.03"
              cy="41.24"
              r=".5"
              fill="#4574ba"
              transform="rotate(-60.166 16.03 41.239)"
            />
            <circle
              cx="17.765"
              cy="42.235"
              r=".5"
              fill="#4574ba"
              transform="rotate(-60.166 17.764 42.233)"
            />
            <circle
              cx="19.5"
              cy="43.23"
              r=".5"
              fill="#4574ba"
              transform="rotate(-60.166 19.499 43.229)"
            />
            <circle
              cx="21.235"
              cy="44.225"
              r=".5"
              fill="#4574ba"
              transform="rotate(-60.166 21.234 44.223)"
            />
            <circle
              cx="22.97"
              cy="45.22"
              r=".5"
              fill="#4574ba"
              transform="rotate(-60.166 22.968 45.218)"
            />
            <circle
              cx="24.705"
              cy="46.215"
              r=".5"
              fill="#4574ba"
              transform="rotate(-60.166 24.703 46.213)"
            />
            <circle
              cx="26.44"
              cy="47.21"
              r=".5"
              fill="#4574ba"
              transform="rotate(-60.166 26.438 47.208)"
            />
            <circle
              cx="48.03"
              cy="41.237"
              r=".5"
              fill="#4574ba"
              transform="rotate(-29.834 48.03 41.237)"
            />
            <circle
              cx="46.295"
              cy="42.232"
              r=".5"
              fill="#4574ba"
              transform="rotate(-29.834 46.296 42.232)"
            />
            <circle
              cx="44.56"
              cy="43.227"
              r=".5"
              fill="#4574ba"
              transform="rotate(-29.834 44.56 43.227)"
            />
            <circle
              cx="42.825"
              cy="44.222"
              r=".5"
              fill="#4574ba"
              transform="rotate(-29.834 42.826 44.222)"
            />
            <circle
              cx="41.09"
              cy="45.217"
              r=".5"
              fill="#4574ba"
              transform="rotate(-29.834 41.09 45.217)"
            />
            <circle
              cx="39.355"
              cy="46.212"
              r=".5"
              fill="#4574ba"
              transform="rotate(-29.834 39.356 46.212)"
            />
            <circle
              cx="37.621"
              cy="47.207"
              r=".5"
              fill="#4574ba"
              transform="rotate(-29.834 37.621 47.207)"
            />
            <path
              fill="#437abe"
              d="M32.03 46.418c-.276 0-.5-.224-.5-.5V38.99c0-.276.224-.5.5-.5s.5.224.5.5v6.928C32.53 46.195 32.307 46.418 32.03 46.418zM32.03 6.519c-1.379 0-2.5-1.122-2.5-2.5s1.121-2.5 2.5-2.5 2.5 1.122 2.5 2.5S33.409 6.519 32.03 6.519zM32.03 2.519c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5S32.857 2.519 32.03 2.519z"
            />
            <circle cx="16.03" cy="25.237" r=".5" fill="#4574ba" />
            <circle cx="16.03" cy="27.237" r=".5" fill="#4574ba" />
            <circle cx="16.03" cy="29.237" r=".5" fill="#4574ba" />
            <circle cx="16.03" cy="31.237" r=".5" fill="#4574ba" />
            <circle cx="16.03" cy="33.237" r=".5" fill="#4574ba" />
            <circle cx="16.03" cy="35.237" r=".5" fill="#4574ba" />
            <circle cx="16.03" cy="37.237" r=".5" fill="#4574ba" />
            <circle cx="16.03" cy="39.237" r=".5" fill="#4574ba" />
            <circle cx="48.03" cy="39.237" r=".5" fill="#4574ba" />
            <circle cx="48.03" cy="25.237" r=".5" fill="#4574ba" />
            <circle cx="48.03" cy="27.237" r=".5" fill="#4574ba" />
            <circle cx="48.03" cy="29.237" r=".5" fill="#4574ba" />
            <circle cx="48.03" cy="31.237" r=".5" fill="#4574ba" />
            <circle cx="48.03" cy="33.237" r=".5" fill="#4574ba" />
            <circle cx="48.03" cy="35.237" r=".5" fill="#4574ba" />
            <circle cx="48.03" cy="37.237" r=".5" fill="#4574ba" />
            <circle
              cx="28.175"
              cy="48.205"
              r=".5"
              fill="#4574ba"
              transform="rotate(-60.166 28.173 48.203)"
            />
            <circle
              cx="35.886"
              cy="48.202"
              r=".5"
              fill="#4574ba"
              transform="rotate(-29.834 35.886 48.202)"
            />
            <circle
              cx="18.633"
              cy="21.742"
              r=".5"
              fill="#4574ba"
              transform="rotate(-29.834 18.633 21.742)"
            />
            <circle
              cx="20.368"
              cy="20.747"
              r=".5"
              fill="#4574ba"
              transform="rotate(-29.834 20.368 20.747)"
            />
            <circle
              cx="22.102"
              cy="19.752"
              r=".5"
              fill="#4574ba"
              transform="rotate(-29.834 22.103 19.752)"
            />
            <circle
              cx="23.837"
              cy="18.757"
              r=".5"
              fill="#4574ba"
              transform="rotate(-29.834 23.838 18.757)"
            />
            <circle
              cx="25.572"
              cy="17.762"
              r=".5"
              fill="#4574ba"
              transform="rotate(-29.834 25.573 17.762)"
            />
            <circle
              cx="27.307"
              cy="16.767"
              r=".5"
              fill="#4574ba"
              transform="rotate(-29.834 27.307 16.767)"
            />
            <circle
              cx="36.633"
              cy="16.767"
              r=".5"
              fill="#4574ba"
              transform="rotate(-60.166 36.63 16.767)"
            />
            <circle
              cx="38.368"
              cy="17.762"
              r=".5"
              fill="#4574ba"
              transform="rotate(-60.166 38.366 17.762)"
            />
            <circle
              cx="40.102"
              cy="18.757"
              r=".5"
              fill="#4574ba"
              transform="rotate(-60.166 40.1 18.757)"
            />
            <circle
              cx="41.837"
              cy="19.752"
              r=".5"
              fill="#4574ba"
              transform="rotate(-60.166 41.835 19.752)"
            />
            <circle
              cx="43.572"
              cy="20.747"
              r=".5"
              fill="#4574ba"
              transform="rotate(-60.166 43.57 20.747)"
            />
            <circle
              cx="45.307"
              cy="21.742"
              r=".5"
              fill="#4574ba"
              transform="rotate(-60.166 45.305 21.742)"
            />
            <path
              fill="#437abe"
              d="M35 15.49h-6c-.276 0-.5-.224-.5-.5v-5c0-1.378 1.121-2.5 2.5-2.5h2c1.379 0 2.5 1.122 2.5 2.5v5C35.5 15.267 35.276 15.49 35 15.49zM29.5 14.49h5v-4.5c0-.827-.673-1.5-1.5-1.5h-2c-.827 0-1.5.673-1.5 1.5V14.49zM32.03 27.519c-1.379 0-2.5-1.122-2.5-2.5s1.121-2.5 2.5-2.5 2.5 1.122 2.5 2.5S33.409 27.519 32.03 27.519zM32.03 23.519c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5S32.857 23.519 32.03 23.519zM35 36.49h-6c-.276 0-.5-.224-.5-.5v-5c0-1.378 1.121-2.5 2.5-2.5h2c1.379 0 2.5 1.122 2.5 2.5v5C35.5 36.267 35.276 36.49 35 36.49zM29.5 35.49h5v-4.5c0-.827-.673-1.5-1.5-1.5h-2c-.827 0-1.5.673-1.5 1.5V35.49zM32.121 53.51c-1.379 0-2.5-1.122-2.5-2.5s1.121-2.5 2.5-2.5 2.5 1.122 2.5 2.5S33.5 53.51 32.121 53.51zM32.121 49.51c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5S32.948 49.51 32.121 49.51zM35.091 62.481h-6c-.276 0-.5-.224-.5-.5v-5c0-1.378 1.121-2.5 2.5-2.5h2c1.379 0 2.5 1.122 2.5 2.5v5C35.591 62.258 35.367 62.481 35.091 62.481zM29.591 61.481h5v-4.5c0-.827-.673-1.5-1.5-1.5h-2c-.827 0-1.5.673-1.5 1.5V61.481zM11.03 18.519c-1.379 0-2.5-1.122-2.5-2.5s1.121-2.5 2.5-2.5 2.5 1.122 2.5 2.5S12.409 18.519 11.03 18.519zM11.03 14.519c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5S11.857 14.519 11.03 14.519zM14 27.49H8c-.276 0-.5-.224-.5-.5v-5c0-1.378 1.121-2.5 2.5-2.5h2c1.379 0 2.5 1.122 2.5 2.5v5C14.5 27.267 14.276 27.49 14 27.49zM8.5 26.49h5v-4.5c0-.827-.673-1.5-1.5-1.5h-2c-.827 0-1.5.673-1.5 1.5V26.49zM53.03 18.519c-1.379 0-2.5-1.122-2.5-2.5s1.121-2.5 2.5-2.5 2.5 1.122 2.5 2.5S54.409 18.519 53.03 18.519zM53.03 14.519c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5S53.857 14.519 53.03 14.519zM56 27.49h-6c-.276 0-.5-.224-.5-.5v-5c0-1.378 1.121-2.5 2.5-2.5h2c1.379 0 2.5 1.122 2.5 2.5v5C56.5 27.267 56.276 27.49 56 27.49zM50.5 26.49h5v-4.5c0-.827-.673-1.5-1.5-1.5h-2c-.827 0-1.5.673-1.5 1.5V26.49zM11.03 42.519c-1.379 0-2.5-1.122-2.5-2.5s1.121-2.5 2.5-2.5 2.5 1.122 2.5 2.5S12.409 42.519 11.03 42.519zM11.03 38.519c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5S11.857 38.519 11.03 38.519zM14 51.49H8c-.276 0-.5-.224-.5-.5v-5c0-1.378 1.121-2.5 2.5-2.5h2c1.379 0 2.5 1.122 2.5 2.5v5C14.5 51.267 14.276 51.49 14 51.49zM8.5 50.49h5v-4.5c0-.827-.673-1.5-1.5-1.5h-2c-.827 0-1.5.673-1.5 1.5V50.49zM53.03 42.519c-1.379 0-2.5-1.122-2.5-2.5s1.121-2.5 2.5-2.5 2.5 1.122 2.5 2.5S54.409 42.519 53.03 42.519zM53.03 38.519c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5S53.857 38.519 53.03 38.519zM56 51.49h-6c-.276 0-.5-.224-.5-.5v-5c0-1.378 1.121-2.5 2.5-2.5h2c1.379 0 2.5 1.122 2.5 2.5v5C56.5 51.267 56.276 51.49 56 51.49zM50.5 50.49h5v-4.5c0-.827-.673-1.5-1.5-1.5h-2c-.827 0-1.5.673-1.5 1.5V50.49zM53.03 36.49c-.276 0-.5-.224-.5-.5v-7c0-.276.224-.5.5-.5s.5.224.5.5v7C53.53 36.267 53.307 36.49 53.03 36.49zM37 53.617c-.172 0-.341-.089-.433-.25-.139-.239-.057-.545.183-.683l11-6.351c.238-.138.545-.058.683.183.139.239.057.545-.183.683l-11 6.351C37.171 53.595 37.085 53.617 37 53.617zM27 53.582c-.085 0-.171-.021-.25-.067l-11-6.351c-.239-.138-.321-.444-.183-.683.138-.239.444-.319.683-.183l11 6.351c.239.138.321.444.183.683C27.341 53.492 27.172 53.582 27 53.582zM11.03 36.49c-.276 0-.5-.224-.5-.5v-7c0-.276.224-.5.5-.5s.5.224.5.5v7C11.53 36.267 11.307 36.49 11.03 36.49zM15 17.821c-.172 0-.341-.089-.433-.25-.139-.239-.057-.545.183-.683l12-6.928c.238-.138.545-.058.683.183.139.239.057.545-.183.683l-12 6.928C15.171 17.799 15.085 17.821 15 17.821zM49 17.786c-.085 0-.171-.021-.25-.067l-12-6.928c-.239-.138-.321-.444-.183-.683.138-.239.444-.319.683-.183l12 6.928c.239.138.321.444.183.683C49.341 17.696 49.172 17.786 49 17.786zM37 29.538c-.172 0-.341-.089-.433-.25-.139-.239-.057-.545.183-.683l11-6.351c.238-.139.545-.057.683.183.139.239.057.545-.183.683l-11 6.351C37.171 29.516 37.085 29.538 37 29.538zM27 29.538c-.085 0-.171-.021-.25-.067l-11-6.351c-.239-.138-.321-.444-.183-.683.138-.239.444-.32.683-.183l11 6.351c.239.138.321.444.183.683C27.341 29.448 27.172 29.538 27 29.538z"
            />
          </svg>
          <div className="containert">
            <h4 className="Value_Title_Color">
              <b>Keep community at our center</b>
            </h4>
            <p>
              Community is the key to success and heart of our website. Post,
              Share, and Comment on our community to help us grow. Community to
              help you achieve your goals.
            </p>
          </div>
        </div>
        <div className="Value">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100px"
            height="50px"
            data-name="Layer 1"
            viewBox="0 0 128 128"
          >
            <circle cx="8" cy="35" r="8" />
            <circle cx="58" cy="104" r="8" />
            <circle cx="52" cy="62" r="8" />
            <circle cx="84" cy="82" r="8" />
            <circle cx="111" cy="98" r="8" />
            <circle cx="16" cy="91" r="8" />
            <circle cx="120" cy="50" r="8" />
            <circle cx="96" cy="24" r="8" />
            <path d="M93.20764 89.6828l6.60052 4.02344a12.0003 12.0003 0 0 1 2.0354-3.44421l-6.62549-4.03821A11.99707 11.99707 0 0 1 93.20764 89.6828zM109.76971 56.2403L105.22559 60.189 100.264 35.20337a11.91177 11.91177 0 0 1-3.9234.77942L101.748 63.21143 91.17194 72.40179a12.09051 12.09051 0 0 1 2.77264 2.88959l8.70093-7.56091 3.80713 19.17072a11.91626 11.91626 0 0 1 3.90527-.86859L106.123 64.7085l6.26221-5.44183A12.08378 12.08378 0 0 1 109.76971 56.2403zM68.18109 97.67926L75.981 90.90137a12.0662 12.0662 0 0 1-2.49628-3.1297l-7.9458 6.90479A12.08056 12.08056 0 0 1 68.18109 97.67926zM85.70776 30.13843l-26.326 22.42041a12.08039 12.08039 0 0 1 2.69891 2.9552L88.2962 33.18793A12.07781 12.07781 0 0 1 85.70776 30.13843zM75.1109 73.968L63.0697 66.62848a12.01133 12.01133 0 0 1-2.15143 3.37262l12.02734 7.33105A12.01744 12.01744 0 0 1 75.1109 73.968zM16.81262 43.11737L40.797 57.73682a12.001 12.001 0 0 1 2.02435-3.45026L19.00592 39.7699A12.01941 12.01941 0 0 1 16.81262 43.11737zM33.81934 74.3291L24.3468 82.39655a12.05082 12.05082 0 0 1 2.37012 3.23566l9.46179-8.058 13.175 18.12671a12.0524 12.0524 0 0 1 3.21118-2.38513L39.23242 74.97266l4.76416-4.05707a12.06564 12.06564 0 0 1-2.50006-3.12445l-4.6225 3.9364L16.39874 43.55682a12.04311 12.04311 0 0 1-3.28583 2.28363z" />
          </svg>
          <div className="containert">
            <h4 className="Value_Title_Color">
              <b>Empower people to deliver outstanding results</b>
            </h4>
            <p>Support your team to achieve their goals.</p>
          </div>
        </div>
      </div>

      <div className="Team_bg">
        <div className="Team_Info">
          <h1 className="HeadingTitle">Team</h1>
          <div>
            <p>
              We are a team of people who are passionate about computer inside
              and outside. We collaborate to create a better learning curve for
              you and help you to learn more about the computer science,
              programming, information technology, engineering fields and more.
              This team is made up of 1 person but I would love to get a team
              who are more passionate about the same things. You can contact to
              this website by email via <Link to="/contact"> contact </Link>
              . We the team are: <br />
            </p>
            <ul>
              <li> Do research about topic </li>
              <li>
                Plan, planning, analysis, design, implementation and
                development, testing and integration, and maintenance.
              </li>
              <li>Split code into small and post in the questions and books</li>
            </ul>
          </div>
        </div>
        <div className="Team">
          <div
            className="card"
            ref={myref}
            id={`${visible ? "ComeFromLeft" : ""}`}
          >
            <img
              className="PersonImage"
              src={Globe}
              alt="Avatar"
              loading="lazy"
            />
            <div className="containert">
              <h4>
                <b>Tula Magar</b>
              </h4>
              <h5>Owner & Coder..</h5>
              <p>
                I am a computer science student and I am passionate about the
                computer inside and outside. I love to learn new things and I am
                always trying to learn more about the computer science,
                programming, information technology, engineering fields and
                more.
              </p>
            </div>
          </div>
          <div
            className="card"
            ref={myref}
            id={`${visible ? "SmallToBig" : ""}`}
          >
            <img
              className="PersonImage"
              src={WeTheOne}
              alt="Avatar"
              loading="lazy"
              // style={{ width: "100%" }}
            />
            <div className="containert">
              <h4>
                <b>Tula Magar</b>
              </h4>
              <h5>Owner & Coder..</h5>
              <p>
                I am a computer science student and I am passionate about the
                computer inside and outside. I love to learn new things and I am
                always trying to learn more about the computer science,
                programming, information technology, engineering fields and
                more.
              </p>
            </div>
          </div>
          <div
            className="card"
            ref={myref}
            id={`${visible ? "SmallToBig" : ""}`}
          >
            <img
              className="PersonImage"
              src={Globe}
              alt="Avatar"
              loading="lazy"
              // style={{ width: "100%" }}
            />
            <div className="containert">
              <h4>
                <b>Tula Magar</b>
              </h4>
              <h5>Owner & Coder..</h5>
              <p>
                I am a computer science student and I am passionate about the
                computer inside and outside. I love to learn new things and I am
                always trying to learn more about the computer science,
                programming, information technology, engineering fields and
                more.
              </p>
            </div>
          </div>
          <div
            className="card"
            ref={myref}
            id={`${visible ? "ComeFromRight" : ""}`}
          >
            <img
              className="PersonImage"
              src={WeTheOne}
              alt="Avatar"
              loading="lazy"
              // style={{ width: "100%" }}
            />
            <div className="containert">
              <h4>
                <b>Tula Magar</b>
              </h4>
              <h5>Owner & Coder..</h5>
              <p>
                I am a computer science student and I am passionate about the
                computer inside and outside. I love to learn new things and I am
                always trying to learn more about the computer science,
                programming, information technology, engineering fields and
                more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default About;
