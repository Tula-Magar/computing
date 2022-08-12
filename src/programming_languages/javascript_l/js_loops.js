import React, { lazy } from "react";
import UseTitle from "../../Title.js";
const LeftNav = lazy(() => import("../../LeftNav/leftNav.js"));
const RelatedCssLinks = lazy(() =>
  import("./js_related_links/js_courses_links.js")
);
const HtmlCssJsEditor = lazy(() => import("../../Editor/HtmlCssJsEditor.js"));
export default function JsLoops() {
  UseTitle("Js Loops");

  const ForLoop = ` let word = "characters";
  for (let i = 0; i < 10; i++) { //initialization - the variable i is set to 0 and the condition is checked every time the loop runs. If the condition is true, the loop continues. If the condition is false, the loop stops.
    console.log(i); //the loop runs 10 times and prints c, h, a, r, a, c, t, e, r, s
    } // i++ - the variable i is incremented by 1 every time the loop runs.`;

  const WhileLoop = `let i = 0;
while (i < 10) { //initialization - the variable i is set to 0 and the condition is checked every time the loop runs. If the condition is true, the loop continues. If the condition is false, the loop stops.
    console.log(i); // prints 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
    i++; //the variable i is incremented by 1 every time the loop runs.
}`;

  const DoWhileLoop = `let i = 0;
do {
    console.log(i); // prints 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
    i++; //the variable i is incremented by 1 every time the loop runs.
} while (i < 10);//initialization - the variable i is set to 0 and the condition is checked every time the loop runs. If the condition is true, the loop continues. If the condition is false, the loop stops.`;

  const ForEachLoop = `const words = ["characters", "words", "loops", "arrays"];
words.forEach(word => {
    console.log(word); // prints word at a time -> characters, words, loops, arrays
}`;
  return (
    <>
      <div id="container">
        <div id="left">
          <LeftNav />
        </div>

        <div id="middle">
          <h1>JavaScript Loops</h1>
          <p>
            JavaScript has a looping construct called a loop. The loop construct
            is used to execute a block of code a number of times. The loop can
            go in a forward or backward direction.
          </p>
          <p>
            There are two types of loops: for and while. The for loop is used to
            iterate over a list of items. The while loop is used to execute a
            block of code as long as a condition is true. Other loops are made
            up of for and while loops such as do while, and for each and for in.
          </p>
          <h1>for loop</h1>
          <p>
            The for loop is used to iterate over a list of items. The for loop
            is used to execute a block of code a number of times. The loop can
            go in a forward or backward direction. The for loop express as ( for
            (initialization; condition; final expression) "{}" is the block of
            code to be executed.)
          </p>
          <HtmlCssJsEditor props={ForLoop} />
          <h1>while loop</h1>
          <p>
            The while loop is used to execute a block of code as long as a
            condition is true. The while loop express as ( while (condition) "{}
            " is the block of code to be executed.)
          </p>
          <HtmlCssJsEditor props={WhileLoop} />
          <h1>do while loop</h1>
          <p>
            The do while loop is used to execute a block of code at least once.
            The do while loop express as ( do {} while (condition) is the block
            of code to be executed.) The do while loop is similar to the while
            loop, except that the do while loop will execute at least once. The
            do while loop will execute the code inside the curly braces at least
            once, even if the condition is false the first time. The do while
            loop is useful when you want to execute the code inside the curly
            braces at least once, even if the condition is false the first time.
            The code goes to do block and condition check goes to the while
            block.
          </p>
          <HtmlCssJsEditor props={DoWhileLoop} />
          <h1>For Each Loop</h1>
          <p>
            The for each loop is used to iterate over a list of items. The for
            each loop is used to execute a block of code a number of times. The
            loop can go in a forward or backward direction. The for each loop
            express as ( for (variable in list) "{}" is the block of code to be
            executed.)
          </p>
          <b>Note:</b>The for each loop is not a replacement for the for loop.
          The for each loop is a special form of the for loop. The for loop is
          used to iterate over a list of items. The for each loop is used to
          execute a block of code a number of times. For each loop isn't
          suitable to loop in a word to get a character at a time. See the for
          loop example above.
          <HtmlCssJsEditor props={ForEachLoop} />
        </div>

        <div id="right">
          <RelatedCssLinks />
        </div>
      </div>
    </>
  );
}
