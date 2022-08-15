import React, { lazy } from "react";
import UseTitle from "../../Title.js";
const LeftNav = lazy(() => import("../../LeftNav/leftNav.js"));
const RelatedCssLinks = lazy(() =>
  import("./js_related_links/js_courses_links.js")
);
const HtmlCssJsEditor = lazy(() => import("../../Editor/HtmlCssJsEditor.js"));
export default function JsVariables() {
  UseTitle("Js Variables");

  const JsVar = `function sayHi() { 
    var name = "John is " 
    var age = "30"
}
console.log(name + age) // can be accessed outside the function`;

  const JsLet = `function sayHi() {
    let name = "John"
    console.log(name) // can be accessed within the function or block 

    name = "5" // can be changed or reassigned
    console.log(name) 

}
console.log(name) // cann't be accessed outside the function. You will get an error`;

  const JsConst = `function sayHi() {
    const name = "John"
    console.log(name) // can be accessed within the function or block
    
    name = "5" // cann't be changed or reassigned, you will get an error

}
console.log(name) // cann't be accessed outside the function. You will get an error`;

  const JsNothing = `function sayHi( name, age, negative ) {
    console.log(name , age - negative) // can be accessed within the function or block
}
sayHi("John", "30", 2 ); // can be accessed outside the function`;

  return (
    <>
      <div id="container">
        <div id="left">
          <LeftNav />
        </div>

        <div id="middle">
          <h1>JavaScript Variables</h1>
          <p>
            JavaScript variables are containers for storing data. You must
            declare a variable before you can use it for any purpose.
          </p>
          <p>
            JavaScript is a weak typed language. It does not have a type system
            meaning that you don't have to specify the type of a variable.
            JavaScript will automatically assign the type of a variable based on
            the value that it is assigned. Unlike other languages like Java, C,
            C++, etc, you have to specify the type of a variable such as int,
            string, float, and etc.
          </p>
          <p>Following below is an examples of a variable in JavaScript.</p>

          <h1> Var variable </h1>
          <p>
            The var keyword is used to declare a variable. The var keyword is a
            global variable. It can be used anywhere in the program. The var is
            a old variable keyword in JavaScript and still in use.
          </p>
          <HtmlCssJsEditor props={JsVar} />
          <h1>Let variable</h1>
          <p>
            Since 2015, the let keyword was introduced in JavaScript. The let
            keyword is a local variable. It can be used only within the block it
            was defined. You must use the let variable when there is a chance
            that the variable will be reassigned or changed.
          </p>
          <HtmlCssJsEditor props={JsLet} />
          <h1>Const variable</h1>
          <p>
            Since 2015, the const keyword was introduced in JavaScript. The
            const keyword is a constant variable. It can be used only within the
            block it was defined. It can't be reassigned and changed. The const
            variable is very strict but easy to understand.
          </p>
          <HtmlCssJsEditor props={JsConst} />

          <h1>Using Nothing</h1>
          <p> I am using nothing type variable in the function parameters.</p>
          <HtmlCssJsEditor props={JsNothing} />
          <p>
            The reason I am using nothing type variable is because I am not sure
            if the variable will be reassigned or changed. I didn't give the
            variable a type and JavaScript will assign the type of the variable
            based on the value that it is assigned automatically.
          </p>
        </div>

        <div id="right">
          <RelatedCssLinks />
        </div>
      </div>
    </>
  );
}
