import React, { lazy } from "react";
import UseTitle from "../../Title.js";
const LeftNav = lazy(() => import("../../LeftNav/leftNav.js"));
const RelatedCssLinks = lazy(() =>
  import("./js_related_links/js_courses_links.js")
);
//https://www.freecodecamp.org/news/manipulating-arrays-in-javascript/
const HtmlCssJsEditor = lazy(() => import("../../Editor/HtmlCssJsEditor.js"));
export default function JsArrow() {
  UseTitle("Js Array");

  return (
    <>
      <div id="container">
        <div id="left">
          <LeftNav />
        </div>

        <div id="middle">
          <h1>Javascript Array</h1>
          <p>
            An array is a data structure that stores a collection of data. It is
            a list of items. The items can be of any type. For example, an array
            can store a list of numbers, a list of strings, a list of objects, a
            list of functions, and so on. The items in an array are called
            elements. The elements in an array are ordered. The order is
            important because each element in an array has an index. The index
            is a number that represents the position of the element in the
            array. The first element in an array has an index of 0, the second
            element has an index of 1, and so on. The last element in an array
            has an index of array.length - 1. The length property is a number
            that represents the number of elements in the array. The length
            property is always one more than the highest index in the array. The
            length property is useful when you want to loop through the elements
            in an array. For example, if you want to loop through the elements
            in an array, you can use a for loop. The for loop will run as many
            times as the length of the array. The for loop will start at 0 and
            end at array.length - 1. The for loop will increment the index by 1
            each time it runs. The for loop will use the index to access the
            element at that index. The for loop will use the element to do
            something. For example, you can use the for loop to add all the
            elements in an array. The for loop will add the element to a
            variable. The for loop will continue to add the elements until it
            reaches the end of the array. The for loop will return the variable.
            The variable will contain the sum of all the elements in the array.
            The for loop will look like this:
          </p>
          <HtmlCssJsEditor
            props={`const array = [1, 2, 3, 4, 5];\nconst sum = 0;\nfor (let i = 0; i < array.length; i++) {\n  sum += array[i];\n}\nconsole.log(sum);`}
          />
          <p>
            The for loop will run 5 times. The first time the for loop runs, the
            index will be 0. The for loop will add the element at index 0 to the
            sum variable. The sum variable will be 1. The second time the for
            loop runs, the index will be 1. The for loop will add the element at
            index 1 to the sum variable. The sum variable will be 3. The third
            time the for loop runs, the index will be 2. The for loop will add
            the element at index 2 to the sum variable. The sum variable will be
            6. The fourth time the for loop runs, the index will be 3. The for
            loop will add the element at index 3 to the sum variable. The sum
            variable will be 10. The fifth time the for loop runs, the index
            will be 4. The for loop will add the element at index 4 to the sum
            variable. The sum variable will be 15. The for loop will end. The
            sum variable will be 15. The sum variable will be logged to the
            console. The console will log 15.
          </p>
        </div>

        <div id="right">
          <RelatedCssLinks />
        </div>
      </div>
    </>
  );
}
