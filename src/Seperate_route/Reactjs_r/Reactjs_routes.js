/* eslint-disable*/
/* eslint-disable */
import React, { lazy } from "react";
import { Route } from "react-router-dom";

// Files locations:

// programing_languages/react_l/allfiles.js:
// import React_intro from "../../programming_languages/Reactjs_l/reactjs_intro.js";

const React_intro = lazy(() =>
  import("../../programming_languages/Reactjs_l/reactjs_intro.js")
);

const Reactjs_routes = [
  [<Route path="/reactjs_intro" element={<React_intro />} />],
];
export default Reactjs_routes;
/* eslint-enable*/
