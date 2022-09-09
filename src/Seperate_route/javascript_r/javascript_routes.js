/* eslint-disable*/
import React, { lazy } from "react";
import { Route } from "react-router-dom";

// Files locations:

// programing_languages/javascript_l/allfiles:
// import Javascript_intro from "../../programming_languages/javascript_l/js_intro";

const JavaScript_home = lazy(() =>
  import("../../programming_languages/javascript_l/js_home")
);
const Javascript_intro = lazy(() =>
  import("../../programming_languages/javascript_l/js_intro")
);
const Javascript_syntax = lazy(() =>
  import("../../programming_languages/javascript_l/js_syntax")
);
const Javascript_variables = lazy(() =>
  import("../../programming_languages/javascript_l/js_variables")
);
const Javascript_data_types = lazy(() =>
  import("../../programming_languages/javascript_l/js_data_types")
);
const Javascript_var = lazy(() =>
  import("../../programming_languages/javascript_l/js_var")
);
const JavaScript_let = lazy(() =>
  import("../../programming_languages/javascript_l/js_let")
);
const Javascript_const = lazy(() =>
  import("../../programming_languages/javascript_l/js_const")
);
const Javascript_operators = lazy(() =>
  import("../../programming_languages/javascript_l/js_operators")
);
const Javascript_statements = lazy(() =>
  import("../../programming_languages/javascript_l/js_statements")
);
const Javascript_expressions = lazy(() =>
  import("../../programming_languages/javascript_l/js_expressions")
);
const Javascript_functions = lazy(() =>
  import("../../programming_languages/javascript_l/js_function")
);
const Javascript_arrays = lazy(() =>
  import("../../programming_languages/javascript_l/js_arrays.js")
);
const Javascript_array_methods = lazy(() =>
  import("../../programming_languages/javascript_l/js_array_method.js")
);
const Javascript_loops = lazy(() =>
  import("../../programming_languages/javascript_l/js_loops.js")
);
const Javascript_objects = lazy(() =>
  import("../../programming_languages/javascript_l/js_objects")
);
const Javascript_dates = lazy(() =>
  import("../../programming_languages/javascript_l/js_dates")
);
const Javascript_strings = lazy(() =>
  import("../../programming_languages/javascript_l/js_string.js")
);
const Javascript_numbers = lazy(() =>
  import("../../programming_languages/javascript_l/js_numbers")
);
const Javascript_booleans = lazy(() =>
  import("../../programming_languages/javascript_l/js_booleans")
);
const Javascript_null = lazy(() =>
  import("../../programming_languages/javascript_l/js_null")
);
const Javascript_undefined = lazy(() =>
  import("../../programming_languages/javascript_l/js_undefined")
);
const Javascript_nan = lazy(() =>
  import("../../programming_languages/javascript_l/js_nan")
);
const Javascript_infinity = lazy(() =>
  import("../../programming_languages/javascript_l/js_infinity")
);
const Javascript_math = lazy(() =>
  import("../../programming_languages/javascript_l/js_math")
);
const Javascript_regexp = lazy(() =>
  import("../../programming_languages/javascript_l/js_regEx.js")
);
const Javascript_dom = lazy(() =>
  import("../../programming_languages/javascript_l/js_dom")
);
const Javascript_element = lazy(() =>
  import("../../programming_languages/javascript_l/js_element")
);
const Javascript_event = lazy(() =>
  import("../../programming_languages/javascript_l/js_event")
);
const Javascript_attribute = lazy(() =>
  import("../../programming_languages/javascript_l/js_attribute")
);
const Javascript_class = lazy(() =>
  import("../../programming_languages/javascript_l/js_class")
);
const Javascript_style = lazy(() =>
  import("../../programming_languages/javascript_l/js_style")
);

const Javascript_window = lazy(() =>
  import("../../programming_languages/javascript_l/js_window")
);

const js_routes = [
  [<Route path="/js_home" element={<JavaScript_home />} />],
  [<Route path="/js_intro" element={<Javascript_intro />} />],
  [<Route path="/js_syntax" element={<Javascript_syntax />} />],
  [<Route path="/js_variables" element={<Javascript_variables />} />],
  [<Route path="/js_data_types" element={<Javascript_data_types />} />],
  [<Route path="/js_var" element={<Javascript_var />} />],
  [<Route path="/js_let" element={<JavaScript_let />} />],
  [<Route path="/js_const" element={<Javascript_const />} />],
  [<Route path="/js_operators" element={<Javascript_operators />} />],
  [<Route path="/js_statements" element={<Javascript_statements />} />],
  [<Route path="/js_expressions" element={<Javascript_expressions />} />],
  [<Route path="/js_functions" element={<Javascript_functions />} />],
  [<Route path="/js_arrays" element={<Javascript_arrays />} />],
  [<Route path="/js_array_methods" element={<Javascript_array_methods />} />],
  [<Route path="/js_loops" element={<Javascript_loops />} />],
  [<Route path="/js_objects" element={<Javascript_objects />} />],
  [<Route path="/js_dates" element={<Javascript_dates />} />],
  [<Route path="/js_strings" element={<Javascript_strings />} />],
  [<Route path="/js_numbers" element={<Javascript_numbers />} />],
  [<Route path="/js_booleans" element={<Javascript_booleans />} />],
  [<Route path="/js_null" element={<Javascript_null />} />],
  [<Route path="/js_undefined" element={<Javascript_undefined />} />],
  [<Route path="/js_nan" element={<Javascript_nan />} />],
  [<Route path="/js_infinity" element={<Javascript_infinity />} />],
  [<Route path="/js_math" element={<Javascript_math />} />],
  [<Route path="/js_regexp" element={<Javascript_regexp />} />],
  [<Route path="/js_dom" element={<Javascript_dom />} />],
  [<Route path="/js_element" element={<Javascript_element />} />],
  [<Route path="/js_event" element={<Javascript_event />} />],
  [<Route path="/js_attribute" element={<Javascript_attribute />} />],
  [<Route path="/js_class" element={<Javascript_class />} />],
  [<Route path="/js_style" element={<Javascript_style />} />],
  [<Route path="/js_window" element={<Javascript_window />} />],
  [<Route path="/js_dom" element={<Javascript_dom />} />],
];
export default js_routes;
/*eslint-enable */
