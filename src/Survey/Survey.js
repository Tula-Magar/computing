import React, { useState } from "react";
import "./Survey.css";

function Survey() {
  const [device, setDevice] = useState();
  const [browser, setBrowser] = useState();

  // useEffect(() => {
  //   console.log(device);
  // }, [device]);

  // useEffect(() =>{
  //   console.log(browser);
  // }, [browser])

  const programming_languages = [
    "html",
    "css",
    "javascript",
    "react",
    "node",
    "python",
    "java",
    "c++",
    "c#",
    "ruby",
    "php",
    "git",
    "sql",
    "mongodb",
    "react",
    "redux",
    "bootstrap",
    "jquery",
    "ajax",
    "express",
  ];
  const handleChange = (event) => {
    setDevice(event.target.value);
  };

  const handleBrowserChange = (event) => {
    setBrowser(event.target.value);
  };
  const interest_menu = (event) => {
    console.log(event.target.value);
  };
  const resetRadioState = () => {
    setDevice("");
    setBrowser("");
  };
  return (
    <React.Fragment>
      <h1 className="servey-title">Survey</h1>
      <p className="servey-request">
        Please complete the survey to help us improve our service, website, and
        others. We will not share your information with anyone. Thank you for
        your support.
      </p>

      <form className="survey-form">
        <div className="survey-form-device-group">
          <p className="survey-topic">
            What device did you use to access the website?{" "}
          </p>
          <div>
            <input
              type="radio"
              value="desktop"
              checked={device === "desktop"}
              onChange={handleChange}
            />{" "}
            PC
          </div>
          <div>
            <input
              type="radio"
              value="tablet"
              checked={device === "tablet"}
              onChange={handleChange}
            />{" "}
            Tablet
          </div>
          <div>
            <input
              type="radio"
              value="mobile"
              checked={device === "mobile"}
              onChange={handleChange}
            />{" "}
            Mobile
          </div>
        </div>
        <div className="survey-form-browser-group">
          <p className="survey-topic">What browser do you use?</p>
          <div>
            <input
              type="radio"
              value="chrome"
              checked={browser === "chrome"}
              onChange={handleBrowserChange}
            />{" "}
            Chrome
          </div>
          <div>
            <input
              type="radio"
              value="firefox"
              checked={browser === "firefox"}
              onChange={handleBrowserChange}
            />{" "}
            Firefox
          </div>
          <div>
            <input
              type="radio"
              value="edge"
              checked={browser === "edge"}
              onChange={handleBrowserChange}
            />{" "}
            Edge
          </div>
        </div>
        <div className="survey-form-interest-group">
          <p className="survey-topic">
            What programming languages are you interested?
          </p>
          <select
            className="survey-interest-selection"
            onChange={interest_menu}
          >
            {programming_languages.map((language, index) => {
              return (
                <option
                  className="survey-interest-option"
                  key={index}
                  value={language}
                >
                  {language}
                </option>
              );
            })}
          </select>
        </div>
        <div className="survey-form-rating-group">
          <p className="survey-topic">
            Are you satisfied that you found out the website?
          </p>
          <div>
            <input
              type="radio"
              value="very_satisfied"
              checked={browser === "very_satisfied"}
              onChange={handleBrowserChange}
            />{" "}
            Very Satisfied
          </div>
          <div>
            <input
              type="radio"
              value="satisfied"
              checked={browser === "satisfied"}
              onChange={handleBrowserChange}
            />{" "}
            Satisfied
          </div>
          <div>
            <input
              type="radio"
              value="neutral"
              checked={browser === "neutral"}
              onChange={handleBrowserChange}
            />{" "}
            neutral
          </div>
          <div>
            <input
              type="radio"
              value="dissatisfied"
              checked={browser === "dissatisfied"}
              onChange={handleBrowserChange}
            />{" "}
            Dissatisfied
          </div>
          <div>
            <input
              type="radio"
              value="very_dissatisfied"
              checked={browser === "very_dissatisfied"}
              onChange={handleBrowserChange}
            />{" "}
            Very Dissatisfied
          </div>
        </div>
        <div className="survey-form-submit-button">
          <button
            className="submit-survey"
            type="reset"
            onClick={resetRadioState}
          >
            Submit
          </button>
        </div>
      </form>
    </React.Fragment>
  );
}

export default React.memo(Survey);
