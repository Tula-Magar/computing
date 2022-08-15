import React, { lazy } from "react";
import UseTitle from "../../Title.js";
const LeftNav = lazy(() => import("../../LeftNav/leftNav.js"));
const RelatedCssLinks = lazy(() =>
  import("./js_related_links/js_courses_links.js")
);
const HtmlCssJsEditor = lazy(() => import("../../Editor/HtmlCssJsEditor.js"));
export default function JsArray() {
  UseTitle("Js Arrays");

  return (
    <>
      <div id="container">
        <div id="left">
          <LeftNav />
        </div>

        <div id="middle">
          <h1>Javascript Arrays</h1>
          <p>
            Arrays are a data structure that can hold multiple values in a
            single variable. Arrays are zero based, meaning the first index is 0
            and the last index is the length of the array - 1. Arrays can be
            created with the following syntax:
          </p>
          <pre>
            <code>var myArray = [value1, value2, value3, value4, value5];</code>
          </pre>
          <p>Arrays can be created with the following syntax:</p>
          <pre>
            <code>
              var myArray = new Array(value1, value2, value3, value4, value5);
            </code>
          </pre>
          <p>Arrays can be created with the following syntax:</p>
          <pre>
            <code>var myArray = new Array(5);</code>
          </pre>
          <p>Arrays can be created with the following syntax:</p>

          <h1>How to access an element in an array</h1>
          <p>
            To access an element in an array, you can use the following syntax:
          </p>
          <pre>
            <code>
              var myArray = [value1, value2, value3, value4, value5];
              myArray[0]; // value1 myArray[1]; // value2 myArray[2]; // value3
              myArray[3]; // value4 myArray[4]; // value5
            </code>
          </pre>

          <h1> How to add an element to an array</h1>
          <p>
            To add an element to an array, you can use the following syntax:
          </p>
          <pre>
            <code>
              var myArray = [value1, value2, value3, value4, value5]; myArray[5]
              = value6;
            </code>
          </pre>

          <h1>How to remove an element from an array</h1>
          <p>
            To remove an element from an array, you can use the following
            syntax:
          </p>
          <pre>
            <code>
              var myArray = [value1, value2, value3, value4, value5];
              myArray.pop(); // removes the last element in the array
              myArray.shift(); // removes the first element in the array
              myArray.splice(index, 1); // removes the element at the specified
              index
            </code>
          </pre>
          <h1>How to replace an element in an array with another element</h1>
          <p>
            To replace an element in an array with another element, you can use
            the following syntax:
          </p>
          <pre>
            <code>
              var myArray = [value1, value2, value3, value4, value5];
              myArray[index] = newValue;
            </code>
          </pre>
          <h1>
            How to check if an element exists in an array using the indexOf
          </h1>
          <p>
            To check if an element exists in an array using the indexOf method,
            you can use the following syntax:
          </p>
          <pre>
            <code>
              var myArray = [value1, value2, value3, value4, value5];
              myArray.indexOf(value); // returns the index of the value
            </code>
          </pre>
          <h1>
            How to check if an element exists in an array using the includes
          </h1>
          <p>
            To check if an element exists in an array using the includes method,
            you can use the following syntax:
          </p>
          <pre>
            <code>
              var myArray = [value1, value2, value3, value4, value5];
              myArray.includes(value); // returns true or false
            </code>
          </pre>
          <h1>How to check if an element exists in an array using the find</h1>
          <p>
            To check if an element exists in an array using the find method, you
            can use the following syntax:
          </p>
          <pre>
            <code>
              var myArray = [value1, value2, value3, value4, value5];
              myArray.find(value); // returns the value or undefined
            </code>
          </pre>
          <h1>
            How to check if an element exists in an array using the findIndex
          </h1>
          <p>
            To check if an element exists in an array using the findIndex
            method, you can use the following syntax:
          </p>
          <pre>
            <code>
              var myArray = [value1, value2, value3, value4, value5];
              myArray.findIndex(value); // returns the index of the value or -1
            </code>
          </pre>
          <h1>How to check if an element exists in an array using the some</h1>
          <p>
            To check if an element exists in an array using the some method, you
            can use the following syntax:
          </p>
          <pre>
            <code>
              var myArray = [value1, value2, value3, value4, value5];
              myArray.some(value); // returns true or false
            </code>
          </pre>
          <h1>How to check if an element exists in an array using the every</h1>
          <p>
            To check if an element exists in an array using the every method,
            you can use the following syntax:
          </p>
          <pre>
            <code>
              var myArray = [value1, value2, value3, value4, value5];
              myArray.every(value); // returns true or false
            </code>
          </pre>
          <h1>
            How to check if an element exists in an array using the forEach
          </h1>
          <p>
            To check if an element exists in an array using the forEach method,
            you can use the following syntax:
          </p>
          <pre>
            <code>
              var myArray = [value1, value2, value3, value4, value5];
              myArray.forEach(value); // returns undefined
            </code>
          </pre>
          <h1>How to check if an element exists in an array using the map</h1>
          <p>
            To check if an element exists in an array using the map method, you
            can use the following syntax:
          </p>
          <pre>
            <code>
              var myArray = [value1, value2, value3, value4, value5];
              myArray.map(value); // returns an array
            </code>
          </pre>
          <h1>
            How to check if an element exists in an array using the filter
          </h1>
          <p>
            To check if an element exists in an array using the filter method,
            you can use the following syntax:
          </p>
          <pre>
            <code>
              var myArray = [value1, value2, value3, value4, value5];
              myArray.filter(value); // returns an array
            </code>
          </pre>
          <h1>
            How to check if an element exists in an array using the reduce
          </h1>
          <p>
            To check if an element exists in an array using the reduce method,
            you can use the following syntax:
          </p>
          <pre>
            <code>
              var myArray = [value1, value2, value3, value4, value5];
              myArray.reduce(value); // returns a value
            </code>
          </pre>
          <h1>
            How to check if an element exists in an array using the reduceRight
          </h1>
          <p>
            To check if an element exists in an array using the reduceRight
            method, you can use the following syntax:
          </p>
          <pre>
            <code>
              var myArray = [value1, value2, value3, value4, value5];
              myArray.reduceRight(value); // returns a value
            </code>
          </pre>
        </div>

        <div id="right">
          <RelatedCssLinks />
        </div>
      </div>
    </>
  );
}
