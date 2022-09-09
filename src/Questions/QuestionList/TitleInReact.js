import React, { useState } from "react";
import UseTitle from "../../Title.js";
import "../QuestionList/TitleInReact.css";
import { Link } from "react-router-dom";

function TitleInReact() {
  UseTitle("How to Create Title in React?");

  const [ShowIframe, SetShowIframe] = useState(false);

  return (
    <>
      <div id="container">
        <div id="left">
          <li className="list">
            <Link className="list" to="/">
              Home
            </Link>
            <Link className="list" to="/">
              Home
            </Link>
            <Link className="list" to="/">
              Home
            </Link>
          </li>
        </div>

        <div id="middle">
          <h1 className="TitleInReact"> How to Create Title in React? </h1>

          <p className="ReusableTitleInReact">
            There are varity of way to render a HTML title in react but I am
            going to create a simple react component. I am going to create a
            functional react component that returns the HTML title element. The
            function will takes the property as a react props and return the
            HTML title element. You can reuse the code by exporting then
            importing in different react file.
          </p>

          <h3 className="ReactTitleBegin">Let's begin</h3>
          <p>
            First, let's create a seperate file and name Title.js in the src
            folder from the react project. Title.js file going to be a custom
            component that we are going to create and export the component. Now,
            we can able to reuse the Title.js component to other files such as
            App.js. If we want to reuse the Title.js then we must import the
            Title.js in the other files such as App.js and pass the programming
            string as a title of the page. The example is given below in react
            code and tap on <i className="material-icons">menu</i> to expand. It
            is located on the top left side.
          </p>

          {!ShowIframe ? (
            <iframe
              // src="https://codesandbox.io/s/titleinreact-v9k6dx?file=/package.json"  // codesandbox link
              src="https://stackblitz.com/edit/react-8hfq6z?embed=1&file=src/App.js,src/Title.js" // stackblitz link
              // src="https://stackblitz.com/edit/react-ts-7rzdzj?embed=1&file=App.tsx"
              className="code"
              title="TitleInReact"
            ></iframe>
          ) : null}
          <button onClick={() => SetShowIframe(!ShowIframe)}>
            {!ShowIframe ? "CloseLiveEditor" : "LiveCodeEditor"}
          </button>
        </div>

        <div id="right">
          <h3 style={{ color: "lightblue" }}>Related Question and Answer</h3>
          <button>
            <a href="https://techcomputinginfo.com/#/question/blog">
              For example, relating questions For example, relating questions
              For example, relating questions
            </a>
          </button>
          <br />
          <button>
            <a href="https://techcomputinginfo.com/#/question/blog">
              For example, relating questions
            </a>
          </button>
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
        </div>
      </div>
    </>
  );
}

export default TitleInReact;
