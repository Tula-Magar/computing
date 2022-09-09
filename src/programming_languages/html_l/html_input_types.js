import React from "react";
import "./html_style.css";
import UseTitle from "../../Title.js";
import RelatedLinks from "./html_links/related_links";
import { Link } from "react-router-dom";
//https://html.com/tags/
export default function Html_input_types() {
  UseTitle("Html Input Types");

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
          <h1>Html Input Types</h1>
          <p>
            The type attribute is a required attribute. The type attribute can
            be used to specify the type of input field. There are many types of
            input types in HTML. It's important to know the difference between
            the types of input fields. The types of input fields are:
          </p>
          <table className="html_attributes_table">
            <thead>
              <tr>
                <th>Input Type</th>
                <th data-label="Description">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="text">text</td>
                <td data-label="Description">
                  A text input field. This is the default type of input field.
                </td>
              </tr>
              <tr>
                <td data-label="text">password</td>
                <td data-label="Description">
                  A password input field. This type of input field is not
                  visible to the user.
                </td>
              </tr>
              <tr>
                <td data-label="text">checkbox</td>
                <td data-label="Description">
                  A checkbox input field. This type of input field is used to
                  select one or more options.
                </td>
              </tr>
              <tr>
                <td data-label="text">radio</td>
                <td data-label="Description">
                  A radio button input field. This type of input field is used
                  to select one option from a set of options.
                </td>
              </tr>
              <tr>
                <td data-label="text">submit</td>
                <td data-label="Description">
                  A submit button. This type of input field is used to submit a
                  form.
                </td>
              </tr>
              <tr>
                <td data-label="text">reset</td>
                <td data-label="Description">
                  A reset button. This type of input field is used to reset a
                  form.
                </td>
              </tr>
              <tr>
                <td data-label="text">file</td>
                <td data-label="text">
                  A file input field. This type of input field is used to upload
                  a file.
                </td>
              </tr>
              <tr>
                <td data-label="text">hidden</td>
                <td data-label="Description">
                  A hidden input field. This type of input field is used to
                  store data that is not visible to the user.
                </td>
              </tr>
              <tr>
                <td data-label="text">image</td>
                <td data-label="Description">
                  An image input field. This type of input field is used to
                  upload an image.
                </td>
              </tr>
              <tr>
                <td data-label="text">button</td>
                <td data-label="Description">
                  A button. This type of input field is used to create a button.
                </td>
              </tr>
              <tr>
                <td data-label="text">number</td>
                <td data-label="Description">
                  A number input field. This type of input field is used to
                  enter a number.
                </td>
              </tr>
              <tr>
                <td data-label="text">range</td>
                <td data-label="Description">
                  A range input field. This type of input field is used to enter
                  a number.
                </td>
              </tr>
              <tr>
                <td data-label="text">date</td>
                <td data-label="Description">
                  A date input field. This type of input field is used to enter
                  a date.
                </td>
              </tr>
              <tr>
                <td data-label="text">datetime</td>
                <td data-label="Description">
                  A datetime input field. This type of input field is used to
                  enter a date and time.
                </td>
              </tr>
              <tr>
                <td data-label="text">datetime-local</td>
                <td data-label="Description">
                  A datetime-local input field. This type of input field is used
                  to enter a date and time.
                </td>
              </tr>
              <tr>
                <td data-label="text">time</td>
                <td data-label="Description">
                  A time input field. This type of input field is used to enter
                  a time.
                </td>
              </tr>
              <tr>
                <td data-label="text">week</td>
                <td data-label="Description">
                  A week input field. This type of input field is used to enter
                  a week.
                </td>
              </tr>
              <tr>
                <td data-label="text">month</td>
                <td data-label="Description">
                  A month input field. This type of input field is used to enter
                  a month.
                </td>
              </tr>
              <tr>
                <td data-label="text">color</td>
                <td data-label="Description">
                  A color input field. This type of input field is used to enter
                  a color.
                </td>
              </tr>
              <tr>
                <td data-label="text">url</td>
                <td data-label="Description">
                  A url input field. This type of input field is used to enter a
                  url.
                </td>
              </tr>
              <tr>
                <td data-label="text">email</td>
                <td data-label="Description">
                  An email input field. This type of input field is used to
                  enter an email.
                </td>
              </tr>
              <tr>
                <td data-label="text">tel</td>
                <td data-label="Description">
                  A tel input field. This type of input field is used to enter a
                  telephone number.
                </td>
              </tr>
              <tr>
                <td data-label="text">search</td>
                <td data-label="Description">
                  A search input field. This type of input field is used to
                  enter a search term.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div id="right">
          <RelatedLinks />
        </div>
      </div>
    </>
  );
}
