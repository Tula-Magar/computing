import React from "react";
import "./html_style.css";
import UseTitle from "../../Title.js";
import RelatedLinks from "./html_links/related_links";
import LeftSideLinks from "./html_links/left_side_links";
import Html_attributes from "../../img/html_images/html_attributes.PNG";
export default function html_intro() {
  UseTitle("What is HTML Attributes?");

  return (
    <>
      <div id="container">
        <div id="left">
          <LeftSideLinks />
        </div>
        <div id="middle">
          <h1>What is HTML Attributes?</h1>
          <p>
            The below image shows the HTML tag and its attributes. If you
            understand what the image trying to tell you then you can easily
            understand the HTML attributes, where to put them, and what they do.
          </p>
          <img
            style={{ width: "847px", height: "175px" }}
            src={Html_attributes}
            alt="html_attributes"
          />
          <p>
            HTML attributes are properties that are added to HTML elements and
            inside opening tags. Attributes are used to add extra information to
            HTML elements.
          </p>
          <h1>Extra Information About HTML Elements?</h1>
          <section>
            They are many HTML attributes that are used to add extra information
            to HTML elements.
            <table className="html_attributes_table">
              <thead>
                <tr>
                  <th>Attribute</th>
                  <th> Elements Belongs to</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-label="Attribute">class</td>
                  <td data-label="Elements Belongs to">any html elements</td>
                  <td data-label="Description">
                    HTMl class attributes are used that defines the specific
                    class name of the one to many elements. Class attribute is
                    used to select the elements that have the same class name.
                    Css and JavaScript can access the class name of the elements
                    to do specific tasks.
                  </td>
                </tr>
                <tr>
                  <td data-label="Attribute">id</td>
                  <td data-label="Elements Belongs to">any html elements</td>
                  <td data-label="Description">
                    ID attribute is used to select the element that has the same
                    ID. Or ID and class attribute is used to select the element
                    that has the same ID and class name. But the different is ID
                    can't have multiple same attribute name. ID most be unique
                    everything you gave a ID attribute. ID is like database row
                    ID such as excel, sql, etc. They don't allow duplicate ID.
                  </td>
                </tr>
                <tr>
                  <td data-label="Attribute">style</td>
                  <td data-label="Elements Belongs to">
                    inline css style for any html elements
                  </td>
                  <td data-label="Description">
                    Style attribute is used to add css style to the elements.
                    You can add inline css style to the elements.
                  </td>
                </tr>
                <tr>
                  <td data-label="Attribute">src</td>
                  <td data-label="Elements Belongs to">img</td>
                  <td data-label="Description">
                    Src attribute is used to add the image source to the image.
                    You src local or online images.
                  </td>
                </tr>
                <tr>
                  <td data-label="Attribute">alt</td>
                  <td data-label="Elements Belongs to">img</td>
                  <td data-label="Description">
                    Alt attribute is used to add the image description to the
                    image. If the image is not found then the description will
                    be shown.
                  </td>
                </tr>
                <tr>
                  <td data-label="Attribute">href</td>
                  <td data-label="Elements Belongs to">a tag</td>
                  <td data-label="Description">
                    Href attribute is used to add the link to the link. You can
                    add the local or online link.
                  </td>
                </tr>
                <tr>
                  <td data-label="Attribute">accept-charset</td>
                  <td data-label="Elements Belongs to">form</td>

                  <td data-label="Description">
                    Accept-charset attribute is used to add the charset to the
                    form and encodes the data to utf-8. You don't need to add
                    the accept-charset if you are specific meta data as an utf-8
                    in the head.
                  </td>
                </tr>
                <tr>
                  <td data-label="Attribute">accesskey</td>
                  <td data-label="Elements Belongs to">
                    button, input, label, legend, textarea
                  </td>
                  <td data-label="Description">
                    The accesskey attribute specifies a shortcut key to
                    activate/focus an element.
                  </td>
                </tr>
                <tr>
                  <td data-label="Attribute">action</td>
                  <td data-label="Elements Belongs to">form</td>
                  <td data-label="Description">
                    The action attribute specifies the action to be performed on
                    a form and is used to send the form data to the server.
                  </td>
                </tr>
                <tr>
                  <td data-label="Attribute">autocomplete</td>
                  <td data-label="Elements Belongs to">input</td>
                  <td data-label="Description">
                    The autocomplete attribute specifies whether the input field
                    should be autocompleted by using on and off value.
                  </td>
                </tr>
                <tr>
                  <td data-label="Attribute">autofocus</td>
                  <td data-label="Elements Belongs to">form, input</td>
                  <td data-label="Description">
                    The autofocus attribute specifies that the which input field
                    should be focused when the page loads.
                  </td>
                </tr>
                <tr>
                  <td data-label="Attribute">autoplay</td>
                  <td data-label="Elements Belongs to">video</td>
                  <td data-label="Description">
                    The autoplay attribute specifies that the video should be
                    autoplayed.
                  </td>
                </tr>
                <tr>
                  <td data-label="Attribute">checked</td>
                  <td data-label="Elements Belongs to">input, radio-button</td>
                  <td data-label="Description">
                    The checked attribute specifies that the check field should
                    be checked.
                  </td>
                </tr>
                <tr>
                  <td data-label="Attribute">cols</td>
                  <td data-label="Elements Belongs to">textarea</td>
                  <td data-label="Description">
                    The cols attribute specifies the number of columns in a
                    textarea.
                  </td>
                </tr>
                <tr>
                  <td data-label="Attribute">colspan</td>
                  <td data-label="Elements Belongs to">td, th</td>
                  <td data-label="Description">
                    The colspan attribute specifies the number of columns a cell
                    should span.
                  </td>
                </tr>
                <tr>
                  <td data-label="Attribute">content</td>
                  <td data-label="Elements Belongs to">meta</td>
                  <td data-label="Description">
                    The content attribute specifies the content of the meta tag.
                  </td>
                </tr>
                <tr>
                  <td data-label="Attribute">contenteditable</td>
                  <td data-label="Elements Belongs to">any html elements</td>
                  <td data-label="Description">
                    The contenteditable attribute specifies whether the content
                    of the element is editable.
                  </td>
                </tr>
                <tr>
                  <td data-label="Attribute">contextmenu</td>
                  <td data-label="Elements Belongs to">any html elements</td>
                  <td data-label="Description">
                    This is used to add a contextmenu to an HTML element.
                  </td>
                </tr>
                <tr>
                  <td data-label="Attribute">controls</td>
                  <td data-label="Elements Belongs to">audio, video</td>
                  <td data-label="Description">
                    The controls attribute specifies that the media element
                    should be displayed with controls.
                  </td>
                </tr>
                <tr>
                  <td data-label="Attribute">coords</td>
                  <td data-label="Elements Belongs to">area</td>
                  <td data-label="Description">
                    The coords attribute specifies the coordinates of the shape.
                  </td>
                </tr>
                <tr>
                  <td data-label="Attribute">data</td>
                  <td data-label="Elements Belongs to">any html elements</td>
                  <td data-label="Description">
                    The data attribute specifies the value of the element.
                  </td>
                </tr>
                <tr>
                  <td data-label="Attribute">datetime</td>
                  <td data-label="Elements Belongs to">input</td>
                  <td data-label="Description">
                    The datetime attribute specifies the date and time when the
                    element was last modified.
                  </td>
                </tr>

                <tr>
                  <td data-label="Attribute">dir</td>
                  <td data-label="Elements Belongs to">
                    any html elements except input
                  </td>
                  <td data-label="Description">
                    The dir attribute specifies the text direction of the
                    element. You can use ltr or rtl to specify the text
                    direction. ltr is for left to right and rtl is for right to
                    left. The default value is ltr.
                  </td>
                </tr>
                <tr>
                  <td data-label="Attribute">disabled</td>
                  <td data-label="Elements Belongs to">
                    button, input, select, textarea
                  </td>
                  <td data-label="Description">
                    The disabled attribute specifies that the element should be
                    disabled cannot be used.
                  </td>
                </tr>
                <tr>
                  <td data-label="Attribute">enctype</td>
                  <td data-label="Elements Belongs to">form</td>
                  <td data-label="Description">
                    The enctype attribute specifies how the form-data should be
                    encoded.
                  </td>
                </tr>
                <tr>
                  <td data-label="Attribute">for</td>
                  <td data-label="Elements Belongs to">label</td>

                  <td data-label="Description">
                    The for attribute specifies which form element a label is
                    for.
                  </td>
                </tr>
                <tr>
                  <td data-label="Attribute">formaction</td>
                  <td data-label="Elements Belongs to">input, button</td>
                  <td data-label="Description">
                    The formaction attribute specifies the action of the form.
                  </td>
                </tr>
                <tr>
                  <td data-label="Attribute">formenctype</td>
                  <td data-label="Elements Belongs to">input, button</td>
                  <td data-label="Description">
                    The formenctype attribute specifies how the form-data should
                    be encoded.
                  </td>
                </tr>
                <tr>
                  <td data-label="Attribute">formmethod</td>
                  <td data-label="Elements Belongs to">input, button</td>
                  <td data-label="Description">
                    The formmethod attribute specifies the HTTP method used to
                    send the form-data.
                  </td>
                </tr>
                <tr>
                  <td data-label="Attribute">formtarget</td>
                  <td data-label="Elements Belongs to">input, button</td>
                  <td data-label="Description">
                    The formtarget attribute specifies where to display the form
                    - in a new window or in the same window.
                  </td>
                </tr>
                <tr>
                  <td data-label="Attribute">script</td>
                  <td data-label="Elements Belongs to">script {"( Code )"}</td>
                  <td data-label="Description">
                    The script attribute specifies a script to be run when the
                    page is loaded.
                  </td>
                </tr>
                <tr>
                  <td data-label="Attribute">crossorigin</td>
                  <td data-label="Elements Belongs to">
                    img, audio, video, script, and link
                  </td>
                  <td data-label="Description">
                    The crossorigin attribute specifies whether the content of
                    the element can be loaded from a source, different or
                    orginal origin.
                  </td>
                </tr>
                <tr>
                  <td data-label="Attribute">decoding</td>
                  <td data-label="Elements Belongs to">
                    img, audio, video, script, and link
                  </td>
                  <td data-label="Description">
                    The decoding attribute specifies how the element should be
                    decoded.
                  </td>
                </tr>
                <tr>
                  <td data-label="Attribute">draggable</td>
                  <td data-label="Elements Belongs to">
                    img, audio, video, script, and link
                  </td>
                  <td data-label="Description">
                    The draggable attribute specifies whether the element can be
                    dragged here and there on the page.
                  </td>
                </tr>
                <tr>
                  <td data-label="Attribute">dropzone</td>
                  <td data-label="Elements Belongs to">
                    img, audio, video, script, and link
                  </td>
                  <td data-label="Description">
                    The dropzone attribute ttribute specifies whether the
                    dragged data is copied, moved, or linked, when it is dropped
                    on an element.
                  </td>
                </tr>
                <tr>
                  <td data-label="Attribute">defer</td>
                  <td data-label="Elements Belongs to">script</td>
                  <td data-label="Description">
                    The defer attribute specifies that the script should be
                    loaded after the page has been loaded.
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>

        <div id="right">
          <RelatedLinks />
        </div>
      </div>
    </>
  );
}
