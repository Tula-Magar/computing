import React, { lazy } from "react";
import UseTitle from "../../Title.js";
const LeftNav = lazy(() => import("../../LeftNav/leftNav.js"));
const RelatedCssLinks = lazy(() =>
  import("./js_related_links/js_courses_links.js")
);
const HtmlCssJsEditor = lazy(() => import("../../Editor/HtmlCssJsEditor.js"));
export default function javascript_data_types() {
  UseTitle("Html Intro");

  const js_primitive_data_types = `<!DOCTYPE html>
<html>
<body>
    <div id="primitive_data_types"></div>
    <script>
        let x = 10;
        let y = x; // y is 10 because x is 10 
        x = 20; // x is now 20 but y is still 10 because it is a copy of x 
        document.getElementById("primitive_data_types").innerHTML = "x = " + x + ", y = " + y;
    </script>
</body>
</html>`;

  const js_primitive_data_types1 = `<!DOCTYPE html>
<html>
<body>
    <div id="primitive_data_types"></div>
    <script>
        let person = 'John';
        person[0] = 'N'; // This will not work because strings are immutable 
        document.getElementById("primitive_data_types").innerHTML = person;
    </script>
</body>
</html>`;

  const js_non_primitive_data_types = `<!DOCTYPE html>
<html>
<body>
    <div id="non_primitive_data_types"></div>
    <script>
        let x = {firstName:"John", lastName:"Doe"};
        let y = x;
        x.firstName = "Jane";
        document.getElementById("non_primitive_data_types").innerHTML = "x = " + x.firstName + ", y = " + y.firstName;
    </script>
</body>
</html>`;

  return (
    <>
      <div id="container">
        <div id="left">
          <LeftNav />
        </div>

        <div id="middle">
          <h1>JavaScript Data Types</h1>
          <p>
            JavaScript has serveral data types: primitive data types and complex
            data type.
          </p>
          <h1>JavaScript Primitive Data Types</h1>
          <p>
            Primitive data types are immutable. They cannot be changed. They are
            passed by value. When you assign a primitive data type to a
            variable, you are assigning the value of the primitive data type to
            the variable. When you assign a variable to another variable, you
            are assigning the value of the variable to the other variable. When
            you pass a primitive data type to a function, you are passing the
            value of the primitive data type to the function. When you return a
            primitive data type from a function, you are returning the value of
            the primitive data type from the function.
          </p>
          <ul>
            <li>Number</li>
            <li>bigint</li>
            <li>String</li>
            <li>Boolean</li>
            <li>Null</li>
            <li>Undefined</li>
            <li>Symbol</li>
          </ul>
          <HtmlCssJsEditor props={js_primitive_data_types} />

          <p>Another example of primitive data types:</p>
          <HtmlCssJsEditor props={js_primitive_data_types1} />
          <h1>JavaScript Non-Primitive or Complex Data Types</h1>
          <p>
            Complex data types are mutable. They can be changed. They are passed
            by reference. When you assign a complex data type to a variable, you
            are assigning the reference of the complex data type to the
            variable. When you assign a variable to another variable, you are
            assigning the reference of the variable to the other variable. When
            you pass a complex data type to a function, you are passing the
            reference of the complex data type to the function. When you return
            a complex data type from a function, you are returning the reference
            of the complex data type from the function.
          </p>
          <ul>
            <li>Object</li>
          </ul>
          <HtmlCssJsEditor props={js_non_primitive_data_types} />
        </div>

        <div id="right">
          <RelatedCssLinks />
        </div>
      </div>
    </>
  );
}
