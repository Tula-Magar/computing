/* eslint-disable*/
import React, { lazy } from "react";
import { Route } from "react-router-dom";

// Files locations:

// programing_languages/html_l/allfiles.js:
// import CSS_routes from "../../programming_languages/css_l/css_intro.js";
const CSS_home = lazy(() =>
  import("../../programming_languages/css_l/css_home.js")
);

const CSS_intro = lazy(() =>
  import("../../programming_languages/css_l/css_intro.js")
);
const CSS_animation = lazy(() =>
  import("../../programming_languages/css_l/css_animation.js")
);
const CSS_margin = lazy(() =>
  import("../../programming_languages/css_l/css_margin.js")
);
const CSS_padding = lazy(() =>
  import("../../programming_languages/css_l/css_padding.js")
);
const CSS_border = lazy(() =>
  import("../../programming_languages/css_l/css_border.js")
);
const CSS_float = lazy(() =>
  import("../../programming_languages/css_l/css_float.js")
);
const CSS_position = lazy(() =>
  import("../../programming_languages/css_l/css_position.js")
);
// const CSS_width = lazy(() =>
//   import("../../programming_languages/css_l/css_width.js")
// );
// const CSS_height = lazy(() =>
//   import("../../programming_languages/css_l/css_height.js")
// );
// const CSS_background = lazy(() =>
//   import("../../programming_languages/css_l/css_background.js")
// );
// const CSS_color = lazy(() =>
//   import("../../programming_languages/css_l/css_color.js")
// );
// const CSS_text = lazy(() =>
//   import("../../programming_languages/css_l/css_text.js")
// );
// const CSS_font = lazy(() =>
//   import("../../programming_languages/css_l/css_font.js")
// );
// const CSS_border_radius = lazy(() =>
//   import("../../programming_languages/css_l/css_border_radius.js")
// );
// const CSS_box_shadow = lazy(() =>
//   import("../../programming_languages/css_l/css_box_shadow.js")
// );
const CSS_transition = lazy(() =>
  import("../../programming_languages/css_l/css_transition.js")
);
// const CSS_animation_keyframes = lazy(() =>
//   import("../../programming_languages/css_l/css_animation_keyframes.js")
// );
// const CSS_animation_timing = lazy(() => import("../../programming_languages/css_l/css_animation_timing.js"));
// const CSS_animation_iteration = lazy(() => import("../../programming_languages/css_l/css_animation_iteration.js"));
// const CSS_animation_direction = lazy(() => import("../../programming_languages/css_l/css_animation_direction.js"));
// const CSS_animation_play_state = lazy(() => import("../../programming_languages/css_l/css_animation_play_state.js"));
// const CSS_animation_fill_mode = lazy(() => import("../../programming_languages/css_l/css_animation_fill_mode.js"));
// const CSS_animation_name = lazy(() => import("../../programming_languages/css_l/css_animation_name.js"));
// const CSS_animation_duration = lazy(() => import("../../programming_languages/css_l/css_animation_duration.js"));
// const CSS_animation_delay = lazy(() => import("../../programming_languages/css_l/css_animation_delay.js"));
// const CSS_animation_iteration_count = lazy(() => import("../../programming_languages/css_l/css_animation_iteration_count.js"));
// const CSS_animation_direction_alternate = lazy(() => import("../../programming_languages/css_l/css_animation_direction_alternate.js"));
// const CSS_animation_direction_alternate_reverse = lazy(() => import("../../programming_languages/css_l/css_animation_direction_alternate_reverse.js"));
// const CSS_animation_direction_normal = lazy(() => import("../../programming_languages/css_l/css_animation_direction_normal.js"));
// const CSS_animation_direction_reverse = lazy(() => import("../../programming_languages/css_l/css_animation_direction_reverse.js"));
// const CSS_animation_fill_mode_forwards = lazy(() => import("../../programming_languages/css_l/css_animation_fill_mode_forwards.js"));
// const CSS_animation_fill_mode_backwards = lazy(() => import("../../programming_languages/css_l/css_animation_fill_mode_backwards.js"));
// const CSS_animation_fill_mode_both = lazy(() => import("../../programming_languages/css_l/css_animation_fill_mode_both.js"));
// const CSS_animation_fill_mode_none = lazy(() => import("../../programming_languages/css_l/css_animation_fill_mode_none.js"));

const CSS_display = lazy(() =>
  import("../../programming_languages/css_l/css_display.js")
);
const CSS_flex = lazy(() =>
  import("../../programming_languages/css_l/css_flex.js")
);
const CSS_grid = lazy(() =>
  import("../../programming_languages/css_l/css_grid.js")
);
const CSS_responsive = lazy(() =>
  import("../../programming_languages/css_l/css_responsive.js")
);
const CSS_selector = lazy(() =>
  import("../../programming_languages/css_l/css_selector.js")
);
const CSS_ID_Selector = lazy(() =>
  import("../../programming_languages/css_l/css_selector/css_ID_Selector.js")
);
const CSS_class_Selector = lazy(() =>
  import("../../programming_languages/css_l/css_selector/css_Class_Selector.js")
);
const CSS_Tag_Selector = lazy(() =>
  import("../../programming_languages/css_l/css_selector/css_Tag_Selector.js")
);
// const CSS_pseudo_class = lazy(() => import("../../programming_languages/css_l/css_pseudo_class.js"));
const CSS_zIndex = lazy(() =>
  import("../../programming_languages/css_l/css_zIndex.js")
);
const CSS_syntax = lazy(() =>
  import("../../programming_languages/css_l/css_syntax.js")
);
const CSS_media = lazy(() =>
  import("../../programming_languages/css_l/css_media.js")
);
// const CSS_media_query = lazy(() => import("../../programming_languages/css_l/css_media_query.js"));

const CSS_comment = lazy(() =>
  import("../../programming_languages/css_l/css_comment.js")
);

const css_routes = [
  [<Route path="/css_home" element={<CSS_home />} />, "/css_home"],
  [<Route path="/css_intro" element={<CSS_intro />} />],
  [<Route path="/css_margin" element={<CSS_margin />} />],
  [<Route path="/css_border" element={<CSS_border />} />],
  [<Route path="/css_padding" element={<CSS_padding />} />],
  [<Route path="/css_position" element={<CSS_position />} />],
  [<Route path="/css_zIndex" element={<CSS_zIndex />} />],
  [<Route path="/css_float" element={<CSS_float />} />],
  [<Route path="/css_syntax" element={<CSS_syntax />} />],
  [<Route path="/css_display" element={<CSS_display />} />],
  [<Route path="/css_flex" element={<CSS_flex />} />],
  [<Route path="/css_grid" element={<CSS_grid />} />],
  [<Route path="/css_responsive" element={<CSS_responsive />} />],
  [<Route path="/css_selector" element={<CSS_selector />} />],
  [<Route path="/css_ID_Selector" element={<CSS_ID_Selector />} />],
  [<Route path="/css_class_Selector" element={<CSS_class_Selector />} />],
  [<Route path="/css_Tag_Selector" element={<CSS_Tag_Selector />} />],
  [<Route path="/css_zIndex" element={<CSS_zIndex />} />],
  [<Route path="/css_comment" element={<CSS_comment />} />],
  [<Route path="/css_media" element={<CSS_media />} />],
];

export default css_routes;
/*eslint-enable */
