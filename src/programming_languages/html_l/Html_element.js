import React from "react";
import "./html_style.css";
import UseTitle from "../../Title.js";
import RelatedLinks from "./html_links/related_links";
import LeftSideLinks from "./html_links/left_side_links";
import Element from "../../img/html_images/html_tag.PNG";

//https://html.com/tags/
export default function html_intro() {
  UseTitle("Html Element");

  return (
    <>
      <div id="container">
        <div id="left">
          <LeftSideLinks />
        </div>
        <div id="middle">
          <h1>What is HTML Element?</h1>
          <p>
            HTML element is a part of HTML document. HTML element can be
            container for other elements. HTML element can be used to create a
            web page. Element can be block or inline. Block element is a part of
            a line and has a full line width. Inline element is a part of a line
            and doesn't have a full line width.
          </p>
          {/* <table className="html_attributes_table">
            <thead>
              <tr>
                <th>Block</th>
                <th>Inline</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Block element can have a inline element inside it.</td>
                <td>Inline element can't have a block element inside it.</td>
              </tr>
              <tr>
                <td>
                  Block element can have a block element inside it. Inline element can have a inline element inside it.
                </td>
                <td>&lt;head&gt;</td>
              </tr>
            </tbody>
          </table> */}

          <h1>For Example Of HTML Element</h1>
          <img className="html_learning" src={Element} alt="html_element" />

          <h1>List Of Element</h1>
          <table className="html_attributes_table">
            <thead>
              <tr>
                <th>Element</th>
                <th>Description</th>
                <th>Block or Inline</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>&lt;a&gt;</td>
                <td>Hyperlink is used to create a link.</td>
                <td>Inline</td>
              </tr>
              <tr>
                <td>&lt;abbr&gt;</td>
                <td>
                  Abbreviation is used to create a abbreviation or acronym or
                  short form of a word.
                </td>
                <td>Inline</td>
              </tr>
              <tr>
                <td>&lt;acronym&gt;</td>
                <td>
                  Acronym is used to create a abbreviation or acronym or short
                  form of a word.
                </td>
                <td>Inline</td>
              </tr>
              <tr>
                <td>&lt;address&gt;</td>
                <td>
                  Address is used to create a address. It's like our living home
                  address. You can use address to contain contact information
                  for the person, author, the publisher, or the place of
                  publication, company name, etc.
                </td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;applet&gt;</td>
                <td>
                  Applet is used to create a applet. It's like a small program.
                  Applet let you embed a program in your web page. However, it's
                  not a good idea to use applet in your web page. Most of the
                  broswers don't support applet. You can other way such as{" "}
                  <code>{"<video> and <audio>"}</code> to embed a program in
                  your web page.
                </td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;area&gt;</td>
                <td>
                  Area is used to create a mathatical area figure of a image or
                  map such as a rectangle, circle, triangle, etc.
                </td>
                <td>Inline</td>
              </tr>
              <tr>
                <td>&lt;article&gt;</td>
                <td>
                  Article element defines an article, i.e., a self-contained
                  unit of a Web page. The article should be a single,
                  stand-alone entity that is not part of another page or
                  section.
                </td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;aside&gt;</td>
                <td>
                  Aside element defines content that is quoted from another
                  source, but appears on the same page. The aside element can be
                  used to create a sidebar.
                </td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;audio&gt;</td>
                <td>
                  Audio element can be used to embed a audio file in your web
                  page. Browser audio built-in let you play audio files rather
                  than using plugins.
                </td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;b&gt;</td>
                <td>
                  Bold is used to create a bold text. Bold text look like this{" "}
                  <b>Bold Text</b>
                </td>
                <td>Inline</td>
              </tr>
              <tr>
                <td>&lt;base&gt;</td>
                <td>
                  Base is used to create a base url. Base url is a links. It's a
                  link to the root of the web page.
                </td>
                <td>Inline</td>
              </tr>
              <tr>
                <td>&lt;basefont&gt;</td>
                <td>
                  Basefont is used to create a base font size of a text or html
                  document. However, it has been removed from the HTML5
                  specification.
                </td>
                <td>Inline</td>
              </tr>
              <tr>
                <td>&lt;bdo&gt;</td>
                <td>
                  bdo stand for bidirectional override. It's used to override
                  the directionality of text from left to right or right to
                  left. You need to use <code>{"dir=ltr or dir-rtl"}</code>{" "}
                  attribute to set the directionality.
                </td>
                <td>Inline</td>
              </tr>
              <tr>
                <td>&lt;bgsound&gt;</td>
                <td>
                  Bgsound is used to create a background sound while loading the
                  web page. However, most of the browsers don't support bgsound
                  and it has deprecated.
                </td>
                <td>Inline</td>
              </tr>
              <tr>
                <td>&lt;big&gt;</td>
                <td>
                  Big is used to create a big text. Big text look like this{" "}
                  <big>Big Text</big> in a line of text. Most of the browsers
                  still supports the big tag. However, it has been removed from
                  the HTML5 specification.
                </td>
                <td>Inline</td>
              </tr>
              <tr>
                <td>&lt;blink&gt;</td>
                <td>
                  Blink is used to create a blink text. Most of the browsers
                  still supports the blink tag. However, it has been deprecated
                  from the HTML5 specification.
                </td>
                <td>Inline</td>
              </tr>
              <tr>
                <td>&lt;blockquote&gt;</td>
                <td>
                  Blockquote is used to create a blockquote. Blockquote is a way
                  to quote a passage from another source. It's like a quotation
                  in a book.
                </td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;body&gt;</td>
                <td>
                  Body is used to create a body. Body is a container for all the
                  content of the web page such as text, images, and other HTML
                  elements.
                </td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;br&gt;</td>
                <td>
                  Br is used to create a line break. It's like break a line and
                  create a new line in a text.
                </td>
                <td>Inline</td>
              </tr>
              <tr>
                <td>&lt;button&gt;</td>
                <td>
                  Button is used to create a button. Button is a clickable area
                  in a web page.
                </td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;canvas&gt;</td>
                <td>
                  Canvas is used to create a canvas. It's like a drawing board.
                </td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;caption&gt;</td>
                <td>Caption is a title of a table.</td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;center&gt;</td>
                <td>
                  Center is used to create a center text. Center text look like
                  this <center>Center Text</center>
                </td>

                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;cite&gt;</td>
                <td>
                  Cite is used to create a citation. Cite is a way to quote a
                  source of a passage.
                </td>
                <td>Inline</td>
              </tr>
              <tr>
                <td>&lt;code&gt;</td>
                <td>
                  Code is a way to display a programming code in a web page and
                  it doesn't execute.
                </td>
                <td>Inline</td>
              </tr>
              <tr>
                <td>&lt;col&gt;</td>
                <td>
                  Col is a way to create a column in a table and children of col
                  is td. colgroup is the parent of col.
                </td>
                <td>Inline</td>
              </tr>
              <tr>
                <td>&lt;colgroup&gt;</td>
                <td>
                  Colgroup is a way to create a column group in a table. Col is
                  the child of colgroup.
                </td>

                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;command&gt;</td>
                <td>command is used to create a command.</td>
                <td>Inline</td>
              </tr>
              <tr>
                <td>&lt;datalist&gt;</td>
                <td>
                  Datalist is used to create a datalist. Datalist is a select or
                  dropdown list of pre-defined options with a value for a user
                  to choose from.
                </td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;dd&gt;</td>
                <td>
                  Dd is a way to define a definition. Dd is a child of dt or dt
                  is a parent of dd. dt is used to define a term. dl is a parent
                  of dd and dt.
                </td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;del&gt;</td>
                <td>
                  The <code>{"<del>"}</code> tag is used to identify text that
                  has been deleted from a document but retained to show the
                  history of modifications made to the document. Pair a{" "}
                  <code>{"<del>"}</code> element with an <code>{"<ins>"}</code>{" "}
                  element to identify the inserted text that replaced the
                  deleted text.
                </td>
                <td>Inline</td>
              </tr>
              <tr>
                <td>&lt;details&gt;</td>
                <td>
                  Details is a container for a set of related information. It's
                  a way to show or hide a set of information using a{" "}
                  <code>{"<summary>"}</code> tag. Details is a parent of{" "}
                  <code>{"<summary>"}</code>.
                </td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;dfn&gt;</td>
                <td>
                  The <code>{"<dfn>"}</code> element is used to identify the
                  defining instance of a term in an HTML document. When a term
                  is wrapped in <code>{"<dfn>"}</code> tags, browsers and web
                  crawlers will understand that nearby text contains a
                  definition of the term.
                </td>
                <td>Inline</td>
              </tr>
              <tr>
                <td>&lt;dialog&gt;</td>
                <td>
                  Dialog is a container for a dialog. Dialog is a pop up window
                  or a modal window.
                </td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;dir&gt;</td>
                <td>
                  Dir is a container for a directory. It has been removed from
                  the HTML5 specification.
                </td>
                <td>Block</td>
              </tr>

              <tr>
                <td>&lt;div&gt;</td>
                <td>
                  Div defines a division or a section. Div is very useful as a
                  container for other elements. You can set a style using css
                  and javascript.
                </td>
                <td>Block</td>
              </tr>
              {/* <tr>
                <td>&lt;dl&gt;</td>
                <td>dl is used to create a dl.</td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;dt&gt;</td>
                <td>dt is used to create a dt.</td>
                <td>Block</td>
              </tr> */}
              <tr>
                <td>&lt;em&gt;</td>
                <td>
                  em element is used to indicate text that should receive
                  greater emphasis than the surrounding text.
                </td>
                <td>Inline</td>
              </tr>
              <tr>
                <td>&lt;embed&gt;</td>
                <td>
                  embed element is used to embed a external content such as a
                  source, application, video, audio, image, etc into a web page.
                </td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;fieldset&gt;</td>
                <td>
                  fieldset is a container for a set in a form elements. It's say
                  the fieldset has been deprecated from the HTML5 and
                  recommended to use <code>{"<fieldset>"}</code>.
                </td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;figcaption&gt;</td>
                <td>
                  figcaption element is used to define a caption for a figure
                  such as a image.
                </td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;figure&gt;</td>
                <td>
                  figure element is a container for a image or other content.
                </td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;footer&gt;</td>

                <td>
                  footer element is used to define a footer for a document. It
                  is always placed at the bottom of the page.
                </td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;form&gt;</td>
                <td>
                  form element is used for section of a document that contains a
                  set of form controls such as label, input and submit button to
                  enable a user to interact with a Web resource.
                </td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;h1 to h6&gt;</td>
                <td>
                  h1 to h6 element is used to define a heading. h1 is the most
                  important heading and h6 is the least important heading. Order
                  of heading from bigger to smaller is h1 to h6 and smaller to
                  bigger is h6 to h1.
                </td>
                <td>Block</td>
              </tr>

              <tr>
                <td>&lt;head&gt;</td>
                <td>
                  head element is used to define the head of a document. It is a
                  parent of title, meta, link, style, script, noscript, and
                  base.
                </td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;header&gt;</td>
                <td>
                  header element is used to define a header for a document. It
                  is a introductory section of a document.
                </td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;hgroup&gt;</td>
                <td>
                  hgroup element is used to define a group of heading. It has
                  been deprecated from the HTML5 specification.
                </td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;hr&gt;</td>
                <td>
                  hr element is used to define a horizontal rule. It is used to
                  separate content.
                </td>

                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;html&gt;</td>
                <td>
                  html element is used to define the root of a document. It is a
                  parent of head and body.
                </td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;input&gt;</td>
                <td>
                  input element is used to define an input field. It's let you
                  to type input data.
                </td>
                <td>Inline</td>
              </tr>
              <tr>
                <td>&lt;ins&gt;</td>
                <td>
                  It is used to indicate inserted text in a document and
                  broswers will usually underline the inserted text.
                </td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;kbd&gt;</td>
                <td>kbd element is used to define a keyboard input field.</td>
                <td>Inline</td>
              </tr>
              <tr>
                <td>&lt;keygen&gt;</td>
                <td>
                  It has been deprecated from the HTML5 specification. keygen
                  element used to generate a keypair.
                </td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;label&gt;</td>
                <td>
                  label element is used to define a label or caption for an
                  input field.
                </td>
                <td>Inline</td>
              </tr>
              <tr>
                <td>&lt;legend&gt;</td>

                <td>
                  legend element is used to define a caption for a fieldset.
                </td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;li&gt;</td>
                <td>
                  li element is used to define a list item. It is used to create
                  a order and un-order list.
                </td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;link&gt;</td>
                <td>
                  link element is used to define a link to an external resource
                  with a current document.
                </td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;main&gt;</td>
                <td>
                  main element is a container for the main content of the
                  document.
                </td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;map&gt;</td>
                <td>
                  map element is used to define a client-side image map. It is a
                  container for an image and a collection of areas.
                </td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;mark&gt;</td>
                <td>mark element is used to mark or highlight text.</td>
                <td>Inline</td>
              </tr>
              <tr>
                <td>&lt;menu&gt;</td>
                <td>
                  menu element is used to define a menu. It is a container for a
                  list and isn't differentiated from a{" "}
                  <code>{"ul and li"}</code>
                </td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;menuitem&gt;</td>
                <td>
                  menuitem element is used to define a menu item and command to
                  contextual pop-up menu.
                </td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;meta&gt;</td>
                <td>
                  meta element is used to define metadata about the document. It
                  should be defined in the head of the document. meta element
                  convert computer languages to human languages.
                </td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;meter&gt;</td>
                <td>
                  meter element is used to define a scalar measurement within a
                  given range.
                </td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;nav&gt;</td>
                <td>
                  nav element is used to define a navigation section. It is a
                  container for a list of links and navigation.
                </td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;noscript&gt;</td>
                <td>
                  noscript element is used to define a section of the document
                  that is not displayed if JavaScript is disabled.
                </td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;object&gt;</td>
                <td>
                  object element is used to define an embedded object. It is a
                  container for a data and a form of the object.
                </td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;ol&gt;</td>
                <td>
                  ol element is used to define an ordered list. It is a
                  container for a list of items.
                </td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;optgroup&gt;</td>
                <td>
                  optgroup element is used to define a group of options in a
                  select element.
                </td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;option&gt;</td>
                <td>
                  option element is used to define an option in a select
                  element.
                </td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;output&gt;</td>
                <td>
                  output element is a container for the result of a calculation.
                </td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;p&gt;</td>
                <td>
                  p element is used to define a paragraph. It is a container for
                  a text.
                </td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;param&gt;</td>
                <td>
                  param element is used to define a parameter for an object. It
                  is a container for a name and value.
                </td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;picture&gt;</td>
                <td>
                  picture element is a container for a set of image resources.
                </td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;pre&gt;</td>
                <td>
                  pre element is used to define preformatted text. It is a block
                  of text that is not subject to any processing in the browser.
                </td>

                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;progress&gt;</td>
                <td>
                  progress element is used to define a progress bar. It looks
                  like line graph with progress.
                </td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;q&gt;</td>
                <td>
                  q element is used to define a short quotation. It is a block
                  of text that is quoted from another source.
                </td>
                <td>Inline</td>
              </tr>
              <tr>
                <td>&lt;rp&gt;</td>
                <td>
                  rp element is used to define what to show in browsers that do
                  not support ruby annotations.
                </td>
                <td>Inline</td>
              </tr>
              <tr>
                <td>&lt;rt&gt;</td>
                <td>
                  rt element is used to define what to show in browsers that do
                  not support ruby annotations.
                </td>
                <td>Inline</td>
              </tr>
              <tr>
                <td>&lt;ruby&gt;</td>
                <td>
                  ruby element is used to define a ruby annotation. It is a
                  container for a ruby text and a base text.
                </td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;s&gt;</td>
                <td>
                  s element is used to define text that is no longer correct.
                </td>
                <td>Inline</td>
              </tr>
              <tr>
                <td>&lt;samp&gt;</td>
                <td>
                  samp element is used to define sample text. It is a block of
                  text that represents a sample of a computer program or a
                  computer output.
                </td>
                <td>Inline</td>
              </tr>
              <tr>
                <td>&lt;script&gt;</td>
                <td>
                  script element is used to define a client-side script. It is a
                  container for a client-side program or script elements. Code
                  in a script element is executed when the page has finished
                  parsing the rest of the document.
                </td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;section&gt;</td>
                <td>
                  section element is used to define a section of a document. It
                  is a container for content and can be used to group blocks of
                  content. It's a alternative to the div element.
                </td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;select&gt;</td>
                <td>
                  select element is used to define a drop-down list. It is a
                  container for a list of options.
                </td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;small&gt;</td>
                <td>
                  small element is used to define smaller text. It is a block of
                  text that is displayed in a smaller font. It looks like this:{" "}
                  <small>This is small text</small>
                </td>
                <td>Inline</td>
              </tr>
              <tr>
                <td>&lt;source&gt;</td>
                <td>
                  source element is used to define media resources for media
                  elements and picture elements.
                </td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;span&gt;</td>
                <td>
                  span element is an inline container used to mark up a part of
                  a text, or a part of a document.
                </td>
                <td>Inline</td>
              </tr>
              <tr>
                <td>&lt;strong&gt;</td>
                <td>
                  strong element is used to define strong text. It is a block of
                  text that is displayed in bold. It looks like this:{" "}
                  <strong>This is strong text</strong>
                </td>
                <td>Inline</td>
              </tr>
              <tr>
                <td>&lt;style&gt;</td>
                <td>
                  style element is used to define style information for the
                  page. It is a container for CSS. It is a block of text that is
                  used to add style to the page.
                </td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;sub&gt;</td>
                <td>
                  sub element is used to define subscript text. It is a block of
                  text that is displayed in subscript. It looks like this:{" "}
                  <sub>This is subscript text</sub>
                </td>
                <td>Inline</td>
              </tr>
              <tr>
                <td>&lt;summary&gt;</td>
                <td>
                  summary element defines a summary, or caption, for a details
                  element. It is a container for a text. Summary will be hide
                  and show when user click on details element.
                </td>
                <td>Block</td>
              </tr>

              <tr>
                <td>&lt;sup&gt;</td>
                <td>
                  sup element is a block of text that is displayed in
                  superscript. It looks like this:{" "}
                  <sup>This is superscript text</sup>
                </td>
                <td>Inline</td>
              </tr>
              <tr>
                <td>&lt;table&gt;</td>
                <td>It is a container for a table of data.</td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;tbody&gt;</td>
                <td>tbody element is a container for the rows of a table.</td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;td&gt;</td>
                <td>td element is used to define a cell in a table.</td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;textarea&gt;</td>
                <td>
                  textarea element is a block of text that is used to input
                  multiple lines of text.
                </td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;tfoot&gt;</td>
                <td>tfoot element is a container for the footer of a table.</td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;th&gt;</td>
                <td>
                  th element is used to define a cell in a table that contains a
                  header.
                </td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;thead&gt;</td>
                <td>thead element is a container for the header of a table.</td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;time&gt;</td>
                <td>time element is used to display a date/time.</td>
                <td>Inline</td>
              </tr>
              <tr>
                <td>&lt;title&gt;</td>
                <td>
                  title element is used to define a title for the document or
                  web page or a section of the page.
                </td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;tr&gt;</td>
                <td>tr element is used to define a row in a table.</td>

                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;track&gt;</td>
                <td>
                  track element is used to define text tracks for media
                  elements.
                </td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;u&gt;</td>
                <td>
                  u element is a block of text that is displayed in underlined.
                  It looks like this: <u>This is underlined text</u>
                </td>
                <td>Inline</td>
              </tr>
              <tr>
                <td>&lt;ul&gt;</td>
                <td>ul element is used to define an unordered list.</td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;var&gt;</td>
                <td>
                  var element is used to define a variable. It is a block of
                  text that is displayed in italic. It looks like this:{" "}
                  <var>This is variable text</var>
                </td>

                <td>Inline</td>
              </tr>
              <tr>
                <td>&lt;video&gt;</td>
                <td>video element is used to embed a video into the page.</td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;wbr&gt;</td>
                <td>wbr element is used to define a line break opportunity.</td>
                <td>Inline</td>
              </tr>
            </tbody>
          </table>
          <p>
            <strong>Note:</strong> There are many other tags that are not listed
            in this table. You can find a complete list of tags on the{" "}
            <a href="https://www.w3schools.com/tags/default.asp">
              W3Schools page
            </a>
            .
          </p>
        </div>

        <div id="right">
          <RelatedLinks />
        </div>
      </div>
    </>
  );
}
