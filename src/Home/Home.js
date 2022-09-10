import React, { useRef } from "react";
import Slideshow from "../Slideshow/SlideShow.js";
import "./Home.css";
import Moon from "../Background/moon.webp";
import Sea from "../Background/sea.jpg";
import UseTitle from "../Title.js";
import { Link } from "react-router-dom";
const Home = () => {
  const [Ref, Ref2, Ref3, Ref4] = [useRef(), useRef(), useRef(), useRef()];

  const MoveToBenefits = () =>
    window.scrollTo({
      top: Ref4.current.offsetTop - 115,
      behavior: "smooth",
    });

  const MoveToLanguages = () =>
    window.scrollTo({
      top: Ref3.current.offsetTop - 82,
      behavior: "smooth",
    });

  const MoveToNonRelated = () =>
    window.scrollTo({
      top: Ref2.current.offsetTop - 82,
      behavior: "smooth",
    });

  const MoveToFooter = () =>
    window.scrollTo({
      top: Ref.current.offsetTop - 100,
      behavior: "smooth",
    });

  UseTitle("Computing");
  return (
    <React.Fragment>
      <Slideshow />

      <div className="container-large">
        <div className="flex-container">
          <button className="flex-child" onClick={MoveToBenefits}>
            Move To Benefits
          </button>
          <button className="flex-child" onClick={MoveToNonRelated}>
            Move To Non Related
          </button>
          <button className="flex-child" onClick={MoveToLanguages}>
            Move To Languages
          </button>
          <button className="flex-child" onClick={MoveToFooter}>
            Move To Footer
          </button>
        </div>
      </div>

      <div className="b_g_Info">
        <div className="whatWeDo">
          <h1 className="WhatWeDoInfoHeader">Everything you need to know</h1>
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
      <div className="bg_programming">
        <div className="programming_name" ref={Ref3}>
          <div className="html">
            <h1>HTML</h1>
            <p>
              HTML stands for Hypertext Markup Language. It is the language used
              to create web pages ....
            </p>
            <Link className="different_site" to="/html_home">
              Learn More &#x2192;
            </Link>
          </div>
          <div className="css">
            <h1>CSS</h1>
            <p>
              CSS stands for Cascading Style Sheets. It is a style sheet
              language used to make the web pages look nice ....
            </p>
            <Link className="different_site" to="/css_home">
              Learn More &#x2192;
            </Link>
          </div>
          <div className="javascript">
            <h1>JavaScript</h1>
            <p>
              JavaScript is a interpreted programming language. Used for web,
              mobile and desktop applications ....
            </p>
            <Link className="different_site" to="/js_home">
              Learn More &#x2192;
            </Link>
          </div>
          <div className="python">
            <h1>Python</h1>
            <p>
              Python is a interpreted programming language. Used for developing
              web applications and software ....
            </p>
            <Link className="different_site" to="/python_intro">
              Learn More &#x2192;
            </Link>
          </div>
          <div className="reactjs">
            <h1>React js</h1>
            <p>
              React js is a JavaScript library for building user interfaces for
              web ....
            </p>
            <Link className="different_site" to="/reactjs_intro">
              Learn More &#x2192;
            </Link>
          </div>
          <div className="nodejs">
            <h1>Node js</h1>
            <p>
              Node js is a JavaScript runtime environment for executing
              JavaScript.
            </p>
            <Link className="different_site" to="/contact">
              Learn More &#x2192;
            </Link>
          </div>
          <div className="csharp">
            <h1>C#</h1>
            <p>
              C# is a object oriented programming language. Used to develop
              desktop and web applications ....
            </p>
            <Link className="different_site" to="/contact">
              Learn More &#x2192;
            </Link>
          </div>
          <div className="java">
            <h1>Java</h1>
            <p>
              Java is a object oriented programming language. Used to develop
              desktop and web applications ....
            </p>
            <Link className="different_site" to="/contact">
              Learn More &#x2192;
            </Link>
          </div>
          <div className="cplusplus">
            <h1>C++</h1>
            <p>
              C++ is a object oriented programming language. Used to develop
              desktop and web applications ....
            </p>
            <Link className="different_site" to="/contact">
              Learn More &#x2192;
            </Link>
          </div>
          <div className="sql">
            <h1>SQL</h1>
            <p>
              SQL is a database management system. Used to store and manage data
              ....
            </p>
            <Link className="different_site" to="/contact">
              Learn More &#x2192;
            </Link>
          </div>
          <div className="php">
            <h1>PHP</h1>
            <p>
              PHP is a server-side scripting language. Used to develop web and
              ....
            </p>
            <Link className="different_site" to="/contact">
              Learn More &#x2192;
            </Link>
          </div>
          <div className="ruby">
            <h1>Ruby</h1>
            <p>
              Ruby is a object oriented programming language. Used to develop
              .....
            </p>
            <Link className="different_site" to="/contact">
              Learn More &#x2192;
            </Link>
          </div>
          <div className="git">
            <h1>Git</h1>
            <p>
              Git is a version control system. Used to manage the any project
              and ....
            </p>
            <Link className="different_site" to="/contact">
              Learn More &#x2192;
            </Link>
          </div>
          <div className="windows">
            <h1>Windows</h1>
            <p>
              Windows is a operating system by Microsoft. Operating system is
              what is used to run the computer and ....
            </p>

            <Link className="different_site" to="/contact">
              Learn More &#x2192;
            </Link>
          </div>
          <div className="linux">
            <h1>Linux</h1>
            <p>
              Linux is a open source operating system. You can alter the kernel
              of the linux operating system and ....
            </p>
            <Link className="different_site" to="/contact">
              Learn More &#x2192;
            </Link>
          </div>
        </div>
      </div>

      <div className="container-L-image" ref={Ref2}>
        <h1 className="non-related">Non Related Pictures</h1>
        <div className="Static-container">
          <div className="image">
            <img loading="lazy" src={Sea} alt="Clean not found" />
          </div>

          <div className="image">
            <img loading="lazy" src={Moon} alt="Clean not found" />
          </div>
          <div className="image">
            <img loading="lazy" src={Sea} alt="Clean not found" />
          </div>

          <div className="image">
            <img loading="lazy" src={Moon} alt="Clean not found" />
          </div>
        </div>
      </div>

      <div className="Benefit_bg" ref={Ref4}>
        <div className="whatWeDo">
          <h1 className="WhatWeDoInfoHeader">Benefits</h1>
          <p className="WhatWeDoInfo">
            The benefit of this website is that you can learn about the computer
            science, programming, information technology, engineering fields and
            more. You can find out about the suitable books for you from
            <Link className="Link_Color" to="/book">
              Books
            </Link>
            and related problems and solutions from
            <Link className="Link_Color" to="/question">
              Questions
            </Link>
            . You will gain the knowledge of the computer science, programming,
            information technology, engineering fields and more and make a
            better use of the programming language, technology and more. The
            learning curve and projects that your working will be easy for you
            in the coming days. Note that the website is still under
            construction and resources are limited at the moment. All the
            questions solutions and books are free to use. lease, help us to
            make this website better. You can contact to this website by email
            via
            <Link className="Link_Color" to="/contact">
              contact
            </Link>
            .
          </p>
        </div>
      </div>
      <span ref={Ref}></span>
    </React.Fragment>
  );
};

export default Home;
