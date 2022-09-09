/* eslint-disable*/
import React, { lazy } from "react";
import { Route } from "react-router-dom";

// Files locations:

// programing_languages/html_l/allfiles.js:
// import Html_home from "../../programming_languages/html_l/Html_home.js";
// import Html_intro from "../../programming_languages/html_l/Html_Intro.js";
// import Heading_tag from "../../programming_languages/html_l/Html_heading.js";
// import Html_editor from "../../programming_languages/html_l/Html_editor.js";
// import Html_element from "../../programming_languages/html_l/Html_element.js";
// import Html_attributes from "../../programming_languages/html_l/Html_attributes.js";
// import Html_tags from "../../programming_languages/html_l/Html_tags.js";
// import Html_comment from "../../programming_languages/html_l/Html_comment.js";
// import Html_head from "../../programming_languages/html_l/Html_heading.js";
// import Html_paragraph from "../../programming_languages/html_l/Html_paragraph.js";
// import Html_input_types from "../../programming_languages/html_l/html_input_types.js";
// import Html_tables from "../../programming_languages/html_l/Html_tables.js";
// import Html_list from "../../programming_languages/html_l/Html_list.js";

const Html_home = lazy(() =>
  import("../../programming_languages/html_l/Html_home.js")
);
const Html_intro = lazy(() =>
  import("../../programming_languages/html_l/Html_Intro.js")
);
const Heading_tag = lazy(() =>
  import("../../programming_languages/html_l/Html_heading.js")
);
const Html_editor = lazy(() =>
  import("../../programming_languages/html_l/Html_editor.js")
);
const Html_element = lazy(() =>
  import("../../programming_languages/html_l/Html_element.js")
);
const Html_attributes = lazy(() =>
  import("../../programming_languages/html_l/Html_attributes.js")
);
const Html_tags = lazy(() =>
  import("../../programming_languages/html_l/Html_tags.js")
);
const Html_comment = lazy(() =>
  import("../../programming_languages/html_l/Html_comment.js")
);
const Html_head = lazy(() =>
  import("../../programming_languages/html_l/Html_heading.js")
);
const Html_paragraph = lazy(() =>
  import("../../programming_languages/html_l/Html_paragraph.js")
);
const Html_input_types = lazy(() =>
  import("../../programming_languages/html_l/html_input_types.js")
);

const Html_tables = lazy(() =>
  import("../../programming_languages/html_l/Html_tables.js")
);
const Html_list = lazy(() =>
  import("../../programming_languages/html_l/Html_list.js")
);
const html_routes = [
  [<Route path="/html_home" element={<Html_home />} />],
  [<Route path="/html_intro" element={<Html_intro />} />],
  [<Route path="/heading_tag" element={<Heading_tag />} />],
  [<Route path="/html_editor" element={<Html_editor />} />],
  [<Route path="/html_element" element={<Html_element />} />],
  [<Route path="/html_attributes" element={<Html_attributes />} />],
  [<Route path="/html_tags" element={<Html_tags />} />],
  [<Route path="/html_comment" element={<Html_comment />} />],
  [<Route path="/html_head" element={<Html_head />} />],
  [<Route path="/html_paragraph" element={<Html_paragraph />} />],
  [<Route path="/html_input_types" element={<Html_input_types />} />],
  [<Route path="/html_tables" element={<Html_tables />} />],
  [<Route path="/html_list" element={<Html_list />} />],
];

export default html_routes;
/*eslint-enable */
