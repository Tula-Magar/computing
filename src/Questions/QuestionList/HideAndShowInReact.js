import React from "react";
import UseTitle from "../../Title.js";
import { AiOutlineCopy } from "react-icons/ai";
import { Link } from "react-router-dom";
//https://www.toptal.com/designers/htmlarrows/arrows/

function HideAndShowInReact() {
  UseTitle("Computing Question and Answer");
  const HideAndShow = `import {useState} from react; 

const Hide_And_Show = () => { 
  const [Show, SetShow] = useState(false); 

  return( 
     <button onClick  = {() => SetShow(!Show)} 
     !Show ? "Hide" : "Show"
     </button>
  )
}`;
  const copyToClipboard = (props) => {
    navigator.clipboard.writeText(props);
  };
  return (
    <>
      <div id="container">
        <div id="left">
          <li className="list">
            <Link className="list" to="/">
              {" "}
              Home
            </Link>
            <Link className="list" to="/">
              {" "}
              Home
            </Link>
            <Link className="list" to="/">
              {" "}
              Home
            </Link>
          </li>
        </div>

        <div id="middle">
          <h1>Onclick How to Hide and Show things in React?</h1>
          <p>Sometimes you need to hide or show things in your React app.</p>

          <pre className="CodeSampleBackground">
            <button
              className="copy"
              onClick={() => copyToClipboard(HideAndShow)}
            >
              <AiOutlineCopy />
            </button>
            <code>
              <span className="react_imports">import </span>
              {"{"}
              <span className="React_Funtion">useState</span>
              {"}"}
              <span className="react_imports"> from </span>
              <span className="React_Funtion">react</span>; {"\n\n"}
              <span className="react_keyword">const </span>
              <span className="React_Funtion">Hide_And_Show</span>
              <span> = </span>
              <span>() {"=>"} </span>
              <span>{"{"}</span> {"\n  "}
              <span className="react_keyword">const </span>
              <span>[Show, SetShow] =</span>{" "}
              <span className="React_Funtion">useState</span>
              <span>(</span>
              <span className="React_Funtion">{"false"}</span>
              <span>)</span>; {"\n\n  "}
              <span className="React_Funtion">return</span>
              <span>{"("}</span> {"\n     "}
              {"<"}
              <span className="html_tag">button</span>
              <span className="React_Funtion"> onClick </span> =
              <span>{" {"}</span>
              <span>() {"=>"} </span>
              <span className="React_Funtion">SetShow</span>
              <span>{"("}</span>
              <span>!Show</span>
              <span>{")}"}</span> {"\n     "}
              <span>{'!Show ? "Hide" : "Show"'}</span> {"\n     "}
              <span>{"<"}</span>
              <span className="html_tag">/button</span>
              <span>{">"}</span>
              {"\n  "}
              <span>{")"}</span>
              {"\n"}
              <span>{"}"}</span>
            </code>
          </pre>
          <p>
            Above code snippet is for hiding and showing things in React. You
            can use <span className="React_Funtion">useState</span> to hide and
            show things in React. useState is a hook that is used to create a
            state. It takes a value as an argument and returns an array of two
            values. The first value is the current state and the second value is
            a function that can be used to update the state.
          </p>
          <p>
            On every click of the button, the state is updated to the opposite
            of its current value which is false. In first click, the state is
            updated to true and in second click, the state is updated to
            original which is false.
          </p>
          <p>
            We even use hide and show in the button names to make it clear. In
            the first click, the button name is "Hide" and in second click, the
            button name is "Show".
          </p>
          <p>
            You can use any html tag in the button name to redener the content.
            For example if you want to show the text of "Div" tag in the button
            name, you can change "Hide" to
          </p>
          <pre className="CodeSampleBackground">
            <li className="OneLine">{`<div> Hide/Nothing </div>`} </li>
          </pre>
          <p> And "Show" to </p>
          <pre className="CodeSampleBackground">
            <li className="OneLine">
              {`<div> Show some other contents </div>`}{" "}
            </li>
          </pre>
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
          <h1>RIGHTT SIDE</h1>
          <br />
        </div>
      </div>
    </>
  );
}

export default HideAndShowInReact;
