import React, { lazy } from "react";
import UseTitle from "../../Title.js";
const LeftNav = lazy(() => import("../../LeftNav/leftNav.js"));
const RelatedCssLinks = lazy(() =>
  import("./js_related_links/js_courses_links.js")
);
const HtmlCssJsEditor = lazy(() => import("../../Editor/HtmlCssJsEditor.js"));
export default function javascript_syntax() {
  UseTitle("Js Syntax");

  const CaseSensitive = `
    <!DOCTYPE html>
    <html>
        <body>
            <h1>JavaScript is case sensitive</h1>
            <p id="demo"></p>
            <script>
                const x = 5;
                const X = 6;
                // const x = 7; // SyntaxError: Identifier 'x' has already been declared
                // const X = 8; // SyntaxError: Identifier 'X' has already been declared
                // const for = 9; // SyntaxError: Unexpected token 'for', for is a reserved word or javascript keyword
                document.getElementById("demo").innerHTML = x + " " + X;
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
          <h1>Javascript Syntax</h1>
          <p>
            Javascript is a case-sensitive language. It means that the
            Javascript language keywords, variables, functions, and any other
            identifiers must have the same case to be recognized as the same.
          </p>
          <HtmlCssJsEditor props={CaseSensitive} />
          <h1>Javascript Identifiers</h1>
          <ul>
            <li>
              Identifiers can be names of variables, functions, and objects.
            </li>
            <li> Identifiers can be any length. </li>
            <li>
              Identifiers can contain letters, digits, underscores, and dollar
              signs.
            </li>
            <li> Identifiers cannot start with a digit. </li>
            <li> Identifiers cannot contain spaces or hyphens. </li>
            <li> Identifiers cannot be Javascript keywords. </li>
          </ul>
          <h1>Javascript Keywords</h1>
          <table className="html_attributes_table">
            <tr>
              <th>Keyword</th>
              <th>Description</th>
            </tr>
            <tr>
              <td>break</td>
              <td>Terminates a switch or a loop</td>
            </tr>
            <tr>
              <td>case</td>
              <td>Starts a case clause in a switch statement</td>
            </tr>
            <tr>
              <td>catch</td>
              <td>Starts a catch clause in a try statement</td>
            </tr>
            <tr>
              <td>class</td>
              <td>Declares a class</td>
            </tr>
            <tr>
              <td>const</td>
              <td>Declares a constant</td>
            </tr>
            <tr>
              <td>continue</td>
              <td>Terminates a loop and starts the next iteration</td>
            </tr>
            <tr>
              <td>debugger</td>
              <td>Invokes the debugger</td>
            </tr>
            <tr>
              <td>default</td>
              <td>Specifies the default clause in a switch statement</td>
            </tr>
            <tr>
              <td>delete</td>
              <td>Deletes a property from an object</td>
            </tr>
            <tr>
              <td>do</td>
              <td>Starts a do-while loop</td>
            </tr>
            <tr>
              <td>else</td>
              <td>Starts an else clause in an if statement</td>
            </tr>
            <tr>
              <td>export</td>
              <td>Exports a module</td>
            </tr>
            <tr>
              <td>extends</td>
              <td>Extends a class</td>
            </tr>
            <tr>
              <td>finally</td>
              <td>Starts a finally clause in a try statement</td>
            </tr>
            <tr>
              <td>for</td>
              <td>Starts a for loop</td>
            </tr>
            <tr>
              <td>function</td>
              <td>Declares a function</td>
            </tr>
            <tr>
              <td>if</td>
              <td>Starts an if statement</td>
            </tr>
            <tr>
              <td>import</td>
              <td>Imports a module</td>
            </tr>
            <tr>
              <td>in</td>
              <td>Checks whether a property exists in an object</td>
            </tr>
            <tr>
              <td>instanceof</td>
              <td>Checks whether an object is an instance of a class</td>
            </tr>
            <tr>
              <td>new</td>
              <td>Creates an instance of a class</td>
            </tr>
            <tr>
              <td>return</td>
              <td>Exits a function</td>
            </tr>
            <tr>
              <td>super</td>
              <td>Refers to the parent class</td>
            </tr>
            <tr>
              <td>switch</td>
              <td>Starts a switch statement</td>
            </tr>
            <tr>
              <td>this</td>
              <td>Refers to the current object</td>
            </tr>
            <tr>
              <td>throw</td>
              <td>Throws an exception</td>
            </tr>
            <tr>
              <td>try</td>
              <td>Starts a try statement</td>
            </tr>
            <tr>
              <td>typeof</td>
              <td>Returns the type of a variable</td>
            </tr>
            <tr>
              <td>var</td>
              <td>Declares a variable</td>
            </tr>
            <tr>
              <td>void</td>
              <td>Specifies an expression that should not return a value</td>
            </tr>
            <tr>
              <td>while</td>
              <td>Starts a while loop</td>
            </tr>
            <tr>
              <td>with</td>
              <td>Starts a with statement</td>
            </tr>
            <tr>
              <td>yield</td>
              <td>Pauses and resumes a generator function</td>
            </tr>
            <tr>
              <td>let</td>
              <td>Declares a block scope local variable</td>
            </tr>
            <tr>
              <td>static</td>
              <td>Declares a static method or property for a class</td>
            </tr>
            <tr>
              <td> while </td>
              <td> Starts a while loop </td>
            </tr>

            <tr>
              <td> async </td>
              <td> Declares an asynchronous function </td>
            </tr>
            <tr>
              <td> await </td>
              <td> Pauses an asynchronous function </td>
            </tr>
            <tr>
              <td> enum </td>
              <td> Declares an enumeration </td>
            </tr>
            <tr>
              <td> of </td>
              <td> Used in a for-of loop </td>
            </tr>
            <tr>
              <td> get </td>
              <td> Declares a getter method for a property </td>
            </tr>
            <tr>
              <td> set </td>
              <td> Declares a setter method for a property </td>
            </tr>
            <tr>
              <td> implements </td>
              <td> Implements an interface </td>
            </tr>
            <tr>
              <td> interface </td>
              <td> Declares an interface </td>
            </tr>
            <tr>
              <td> package </td>
              <td> Declares a package </td>
            </tr>
            <tr>
              <td> private </td>
              <td> Declares a private property or method </td>
            </tr>
            <tr>
              <td> protected </td>
              <td> Declares a protected property or method </td>
            </tr>
            <tr>
              <td> public </td>
              <td> Declares a public property or method </td>
            </tr>
            <tr>
              <td> require </td>
              <td> Declares a CommonJS module </td>
            </tr>
            <tr>
              <td> module </td>
              <td> Declares an ES6 module </td>
            </tr>
            <tr>
              <td> declare </td>
              <td> Declares a type </td>
            </tr>
            <tr>
              <td> abstract </td>
              <td> Declares an abstract class </td>
            </tr>
            <tr>
              <td> as </td>
              <td> Casts a variable to a specific type </td>
            </tr>
            <tr>
              <td> any </td>
              <td> Declares a variable of any type </td>
            </tr>
            <tr>
              <td> boolean </td>
              <td> Declares a boolean variable </td>
            </tr>
            <tr>
              <td> constructor </td>
              <td> Declares a constructor </td>
            </tr>
            <tr>
              <td> declare </td>
              <td> Declares a type </td>
            </tr>
            <tr>
              <td> int </td>
              <td> Declares an integer variable </td>
            </tr>
            <tr>
              <td> number </td>
              <td> Declares a number variable </td>
            </tr>
            <tr>
              <td> string </td>
              <td> Declares a string variable </td>
            </tr>
            <tr>
              <td> symbol </td>
              <td> Declares a symbol variable </td>
            </tr>
            <tr>
              <td> type </td>
              <td> Declares a type alias </td>
            </tr>
            <tr>
              <td> from </td>
              <td> Imports a module </td>
            </tr>
            <tr>
              <td> global </td>
              <td> Declares a global variable </td>
            </tr>
            <tr>
              <td> namespace </td>
              <td> Declares a namespace </td>
            </tr>
            <tr>
              <td> never </td>
              <td> Declares a variable that never returns a value </td>
            </tr>
            <tr>
              <td> null </td>
              <td> Declares a null variable </td>
            </tr>
            <tr>
              <td> undefined </td>
              <td> Declares an undefined variable </td>
            </tr>
            <tr>
              <td> void </td>

              <td> Specifies an expression that should not return a value </td>
            </tr>
            <tr>
              <td> is </td>
              <td> Checks the type of a variable </td>
            </tr>
            <tr>
              <td> keyof </td>
              <td> Returns the key of a property </td>
            </tr>
            <tr>
              <td> readonly </td>
              <td> Declares a read-only property </td>
            </tr>
            <tr>
              <td> super </td>
              <td> Refers to the parent class </td>
            </tr>
          </table>
        </div>

        <div id="right">
          <RelatedCssLinks />
        </div>
      </div>
    </>
  );
}
