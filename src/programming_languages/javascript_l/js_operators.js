import React, { lazy } from "react";
import UseTitle from "../../Title.js";
const LeftNav = lazy(() => import("../../LeftNav/leftNav.js"));
const RelatedCssLinks = lazy(() =>
  import("./js_related_links/js_courses_links.js")
);
const HtmlCssJsEditor = lazy(() => import("../../Editor/HtmlCssJsEditor.js"));
export default function javascript_operators() {
  UseTitle("js Operators");
  const js_Assignment_Operators = `<!DOCTYPE html>
<html>
<body>
    <div id="Assignment_Operators_equal"></div>
    <div id="Assignment_Operators_addition_assignment"></div>
    <div id="Assignment_Operators_subtraction_assignment"></div>
    <div id="Assignment_Operators_multiplication_assignment"></div>
    <div id="Assignment_Operators_division_assignment"></div>
    <div id="Assignment_Operators_remainder_assignment"></div>
    <div id="Assignment_Operators_exponentiation_assignment"></div>
    <script>
        let x = 10;
        let y = 20;
        x = y;
        document.getElementById("Assignment_Operators_equal").innerHTML = "x = " + x + ", y = " + y;
        x += y;
        document.getElementById("Assignment_Operators_addition_assignment").innerHTML = "x = " + x + ", y = " + y;
        x -= y;
        document.getElementById("Assignment_Operators_subtraction_assignment").innerHTML = "x = " + x + ", y = " + y;
        x *= y;
        document.getElementById("Assignment_Operators_multiplication_assignment").innerHTML = "x = " + x + ", y = " + y;
        x /= y;
        document.getElementById("Assignment_Operators_division_assignment").innerHTML = "x = " + x + ", y = " + y;
        x %= y;
        document.getElementById("Assignment_Operators_remainder_assignment").innerHTML = "x = " + x + ", y = " + y;
        x **= y;
        document.getElementById("Assignment_Operators_exponentiation_assignment").innerHTML = "x = " + x + ", y = " + y;
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
          <h1>JavaScript Operators</h1>
          <p>
            JavaScript has the following types of operators. This section
            describes the operators and contains information about operator
            precedence.
          </p>
          <ul>
            <li>Assignment operators</li>
            <li>Comparison operators</li>
            <li>Arithmetic operators</li>
            <li>Bitwise operators</li>
            <li>Logical operators</li>
            <li>String operators</li>
            <li>Conditional (ternary) operator</li>
            <li>Comma operator</li>
            <li>Unary operators</li>
            <li>Relational operators</li>
          </ul>
          <h2>Assignment Operators</h2>
          <p>Assignment operators assign values to JavaScript variables.</p>
          <table className="table">
            <thead>
              <tr>
                <th>Operator</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>=</td>
                <td>x = y</td>
              </tr>
              <tr>
                <td>+=</td>
                <td>x += y</td>
              </tr>
              <tr>
                <td>-=</td>
                <td>x -= y</td>
              </tr>
              <tr>
                <td>*=</td>
                <td>x *= y</td>
              </tr>
              <tr>
                <td>/=</td>
                <td>x /= y</td>
              </tr>
              <tr>
                <td>%=</td>
                <td>x %= y</td>
              </tr>
              <tr>
                <td>**=</td>
                <td>x **= y</td>
              </tr>
            </tbody>
          </table>
          <HtmlCssJsEditor props={js_Assignment_Operators} />
        </div>

        <div id="right">
          <RelatedCssLinks />
        </div>
      </div>
    </>
  );
}
