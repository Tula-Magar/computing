/* eslint-disable*/
import React, { lazy } from "react";
import { Route } from "react-router-dom";

// Files locations:

// programing_languages/python_l/allfiles.js:
// import Python_intro from "../../programming_languages/python_l/python_intro.js";

const Python_intro = lazy(() =>
  import("../../programming_languages/python_l/python_intro.js")
);

const python_routes = [
  [<Route path="/python_intro" element={<Python_intro />} />],
];
export default python_routes;
/* eslint-enable*/
