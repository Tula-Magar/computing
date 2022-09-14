import React, { lazy } from "react";
import UseTitle from "../../Title.js";
const LeftNav = lazy(() => import("../../LeftNav/leftNav.js"));
const RelatedCssLinks = lazy(() =>
  import("./js_related_links/js_courses_links.js")
);
const HtmlCssJsEditor = lazy(() => import("../../Editor/HtmlCssJsEditor.js"));
export default function javascript_lets() {
  UseTitle("Html Let");

  const codeLet = `<!DOCTYPE html>
<html>
<body>
    <div id="demo"></div>
    <script>
        let  x = 10;
        // Here x is 10

        {  // opening curly brace starts a new block

            let x = 2;
            // Here x is 2 
            // x is not visible outside the block
            // x can be used here in the block

        } // closing curly brace ends the block

        // Here x is 2
        document.getElementById("demo").innerHTML = x;
    </script>
</body>
</html>`;

  const codeLet1 = `<!DOCTYPE html>
<html>
<body>
    <div id="demo"></div>
    <script>

        let x = 2;
        let x = 3;  // error: x has already been declared

    document.getElementById("demo").innerHTML = x;
        
    </script>
</body>
</html>`;
  const codeLet2 = `<!DOCTYPE html>
<html>
<body>
    <div id="demo"></div>
    <script>
        try {
            x = 3.14;   // This will cause an error (x is used without declaration and before declaration)
            let x;     // This will not cause an error
        catch(err) {
            document.getElementById("demo").innerHTML = err.message;
        }
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
          <h1>Javascript Let</h1>
          <p>
            The let statement declares a block scope local variable, optionally
            initializing it to a value. It is important to note that the scope
            of a variable declared with let is the block in which it is defined,
            and any contained sub-blocks. This is in contrast to the var
            keyword, which defines a variable globally, or locally to an entire
            function regardless of block scope.
          </p>
          <HtmlCssJsEditor props={codeLet} />

          <h1>Can't Redeclare</h1>
          <p>
            A variable declared with let cannot be re-declared in the same
            scope. This results in a SyntaxError. For example:
          </p>
          <HtmlCssJsEditor props={codeLet1} />

          <h1>Doesn't Allow Hoisting</h1>
          <p>
            Variables declared with let are not hoisted to the top of the block.
            This means that the variable cannot be used before it is declared.
            For example:
          </p>
          <HtmlCssJsEditor props={codeLet2} />
        </div>

        <div id="right">
          <RelatedCssLinks />
        </div>
      </div>
    </>
  );
}
