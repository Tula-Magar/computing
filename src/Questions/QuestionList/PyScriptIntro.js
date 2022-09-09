import React from "react";
import "../Questions_List.css";
import UseTitle from "../../Title.js";
import "../QuestionList/TitleInReact.css";
import { AiOutlineCopy } from "react-icons/ai";
import { Link } from "react-router-dom";

function PyScriptIntro() {
  UseTitle("Getting started with PyScript?");

  const FirstHtmlFIle = `<html>
  <head>
    <link rel=&quot;stylesheet&quot; href=&quot;https://pyscript.net/alpha/pyscript.css&quot; />
    <script defer src=&quot;https://pyscript.net/alpha/pyscript.js&quot;></script>
  </head>
  <body> 
    <py-script> print('Hello, World!') </py-script> 
  </body>
</html>`;

  const Py_script = `<html>
  <head>
    <link rel="stylesheet" href="https://pyscript.net/alpha/pyscript.css" />
    <script defer src="https://pyscript.net/alpha/pyscript.js"></script>
  </head>
  <body>
      <py-script>
        print("Let's compute π:")
        def compute_pi(n):
            pi = 2
            for i in range(1,n):
                pi *= 4 * i ** 2 / (4 * i ** 2 - 1)
            return pi

        pi = compute_pi(100000)
        s = f"π is approximately {pi:.3f}"
        print(s)
      </py-script>
  </body>
</html>`;

  const LabeledElements = `<html> 
  <head>
    <link rel="stylesheet" href="https://pyscript.net/alpha/pyscript.css" /> 
    <script defer src="https://pyscript.net/alpha/pyscript.js"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous"> 
  </head>
  <body> 
    <b><p>Today is <u><label id='today'></label></u></p></b>
    <br>
    <div id="pi" className="alert alert-primary"></div>
    <py-script>
      import datetime as dt
      pyscript.write('today', dt.date.today().strftime('%A %B %d, %Y'))

      def compute_pi(n):
          pi = 2
          for i in range(1,n):
              pi *= 4 * i ** 2 / (4 * i ** 2 - 1)
          return pi

      pi = compute_pi(100000)
      pyscript.write('pi', f'π is approximately {pi:.3f}')
    
    </py-script>
  </body>
</html>`;

  const LocalModules = `<html> 
  <head> 
    <link rel="stylesheet" href="https://pyscript.net/alpha/pyscript.css" /> 
    <script defer src="https://pyscript.net/alpha/pyscript.js"></script> 
    <py-env>
        - numpy 
        - matplotlib
        - paths:
          - ./data.py
    </py-env> 
  </head> 
  <body> 
    <h1>Let's plot random numbers</h1>
    <div id="plot"></div>
    <py-script output="plot">
      import matplotlib.pyplot as plt
      from data import make_x_and_y

      x, y = make_x_and_y(n=1000)

      fig, ax = plt.subplots()
      ax.scatter(x, y)
      fig
    </py-script> 
  </body> 
</html>`;

  const Py_End_Tag = `<html> 
  <head>
    <link rel="stylesheet" href="https://pyscript.net/alpha/pyscript.css" /> 
    <script defer src="https://pyscript.net/alpha/pyscript.js"></script> 
    <py-env> 
       - numpy - matplotlib</py-env> 
  </head>
  <body> 
    <h1>Let's plot random numbers</h1> 
    <div id="plot"></div>
    <py-script output="plot">
      import matplotlib.pyplot as plt
      import numpy as np

      x = np.random.randn(1000)
      y = np.random.randn(1000)

      fig, ax = plt.subplots()
      ax.scatter(x, y)
      fig 
    </py-script>
  </body>
</html>`;
  const copyToClipboard = (props) => {
    navigator.clipboard.writeText(props);
  };

  return (
    <>
      <div id="container">
        <div id="left">
          <li className="list">
            <Link className="list" to="/">
              {" "}
              Home
            </Link>
            <Link className="list" to="/">
              {" "}
              Home
            </Link>
            <Link className="list" to="/">
              {" "}
              Home
            </Link>
          </li>
        </div>

        <div id="middle">
          <h1>Getting started with PyScript</h1>
          <p>
            This website will guide you through getting started with PyScript.
          </p>
          <h1>Development setup</h1>
          <p>
            PyScript does not require any development environment other than a
            web browser. We recommend using
            <a
              className="NoUnderLine"
              href="https://www.google.com/chrome/downloads/"
            >
              {" "}
              Chrome.{" "}
            </a>
            If you're using{" "}
            <a className="NoUnderLine" href="https://code.visualstudio.com/">
              {" "}
              VSCode
            </a>
            , the
            <a
              className="NoUnderLine"
              href="https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer"
            >
              {" "}
              Live Server extension{" "}
            </a>{" "}
            can be used to reload the page as you edit the HTML file.
          </p>
          <h1>Installation</h1>
          <p>
            There is no installation required. In this document, we'll use the
            PyScript assets served on
            <a className="pyScriptFullPath" href="https://pyscript.net">
              {" "}
              https://pyscript.net.{" "}
            </a>
            If you want to download the source and build it yourself, follow the
            instructions in the README.md file.
          </p>
          <h1>Your first PyScript HTML file</h1>
          <p>Here's a "Hello, world!" example using PyScript.</p>
          <p>
            Using your favorite editor, create a new file called hello.html in
            the same directory as your PyScript, JavaScript, and CSS files with
            the following content, and open the file in your web browser. You
            can typically open an HTML by double-clicking it in your file
            explorer.
          </p>

          <pre className="CodeSampleBackground">
            <button
              className="copy"
              onClick={() => copyToClipboard(FirstHtmlFIle)}
            >
              <AiOutlineCopy />
            </button>
            <code>
              <span className="pl-kos">&lt;</span>
              <span className="pl-ent">html</span>
              <span className="pl-kos">&gt;</span> {"\n  "}
              <span className="pl-kos">&lt;</span>
              <span className="pl-ent">head</span>
              <span className="pl-kos">&gt;</span> {"\n    "}
              <span className="pl-kos">&lt;</span>
              <span className="pl-ent">link</span>
              <span className="pl-c1"> rel</span>="
              <span className="pl-s">stylesheet</span>"
              <span className="pl-c1"> href</span>="
              <span className="pl-s">
                https://pyscript.net/alpha/pyscript.css
              </span>
              "/&gt; {"\n    "}
              <span className="pl-kos">&lt;</span>
              <span className="pl-ent">script</span>
              <span className="pl-c1"> defer</span>
              <span className="pl-c1"> src</span>="
              <span className="pl-s">
                https://pyscript.net/alpha/pyscript.js
              </span>
              "<span className="pl-kos">&gt;</span>
              <span className="pl-kos">&lt;/</span>
              <span className="pl-ent">script</span>
              <span className="pl-kos">&gt;</span> {"\n  "}
              <span className="pl-kos">&lt;/</span>
              <span className="pl-ent">head</span>
              <span className="pl-kos">&gt;</span> {"\n  "}
              <span className="pl-kos">&lt;</span>
              <span className="pl-ent">body</span>
              <span className="pl-kos">&gt;</span>
              {"\n    "}
              <span className="pl-kos">&lt;</span>
              <span className="pl-ent">py-script</span>
              <span className="pl-kos">&gt;</span>
              <span className="pl-cod"> print('Hello, World!')</span>
              <span className="pl-kos">&lt;/</span>
              <span className="pl-ent">py-script</span>
              <span className="pl-kos">&gt;</span>
              <span className="pl-kos">&lt;/</span>
              <span className="pl-ent">body</span>
              <span className="pl-kos">&gt;</span> {"\n"}
              <span className="pl-kos">&lt;/</span>
              <span className="pl-ent">html</span>
              <span className="pl-kos">&gt;</span>
            </code>
          </pre>

          <h1>The py-script tag</h1>
          <p>
            The <code>&lt;py-script&gt;</code> tag lets you execute multi-line
            Python scripts and print back onto the page. For example, we can
            compute π.
          </p>

          <pre className="CodeSampleBackground">
            <button className="copy" onClick={() => copyToClipboard(Py_script)}>
              <AiOutlineCopy />
            </button>
            <span className="pl-kos">&lt;</span>
            <span className="pl-ent">html</span>
            <span className="pl-kos">&gt;</span>
            {"\n  "}
            <span className="pl-kos">&lt;</span>
            <span className="pl-ent">head</span>
            <span className="pl-kos">&gt;</span> {"\n    "}
            <span className="pl-kos">&lt;</span>
            <span className="pl-ent">link</span>{" "}
            <span className="pl-c1">rel</span>
            ="
            <span className="pl-s">stylesheet</span>"{" "}
            <span className="pl-c1">href</span>="
            <span className="pl-s">
              https://pyscript.net/alpha/pyscript.css
            </span>
            " /&gt; {"\n    "}
            <span className="pl-kos">&lt;</span>
            <span className="pl-ent">script</span>{" "}
            <span className="pl-c1">defer</span>{" "}
            <span className="pl-c1">src</span>
            ="
            <span className="pl-s">https://pyscript.net/alpha/pyscript.js</span>
            "<span className="pl-kos">&gt;</span>
            <span className="pl-kos">&lt;/</span>
            <span className="pl-ent">script</span>
            <span className="pl-kos">&gt;</span>
            {"\n  "}
            <span className="pl-kos">&lt;/</span>
            <span className="pl-ent">head</span>
            <span className="pl-kos">&gt;</span>
            {"\n  "}
            <span className="pl-kos">&lt;</span>
            <span className="pl-ent">body</span>
            <span className="pl-kos">&gt;</span>
            {"\n    "}
            <span className="pl-kos">&lt;</span>
            <span className="pl-ent">py-script</span>
            <span className="pl-kos">&gt;</span>
            {`  
      print("Let's compute π:")
        def compute_pi(n):
            pi = 2
            for i in range(1,n):
                pi *= 4 * i ** 2 / (4 * i ** 2 - 1)
            return pi

        pi = compute_pi(100000)
        s = f"π is approximately {pi:.3f}"
        print(s)`}
            {"\n     "}
            <span className="pl-kos">&lt;/</span>
            <span className="pl-ent">py-script</span>
            <span className="pl-kos">&gt;</span>
            {"\n   "}
            <span className="pl-kos">&lt;/</span>
            <span className="pl-ent">body</span>
            <span className="pl-kos">&gt;</span>
            {"\n"}
            <span className="pl-kos">&lt;/</span>
            <span className="pl-ent">html</span>
            <span className="pl-kos">&gt;</span>
          </pre>
          <h1>Writing into labeled elements</h1>
          <p dir="auto">
            In the example above, we had a single <code>&lt;py-script&gt;</code>{" "}
            tag printing one or more lines onto the page in order. Within the{" "}
            <code>&lt;py-script&gt;</code>, you have access to the{" "}
            <code>pyscript</code> module, which provides a <code>.write()</code>{" "}
            method to send strings into labeled elements on the page.
          </p>
          <p dir="auto">
            For example, we'll add some style elements and provide placeholders
            for the <code>&lt;py-script&gt;</code> tag to write to.
          </p>
          <pre className="CodeSampleBackground">
            <button
              className="copy"
              onClick={() => copyToClipboard(LabeledElements)}
            >
              <AiOutlineCopy />
            </button>
            <span className="pl-kos">&lt;</span>
            <span className="pl-ent">html</span>
            <span className="pl-kos">&gt;</span> {"\n  "}
            <span className="pl-kos">&lt;</span>
            <span className="pl-ent">head</span>
            <span className="pl-kos">&gt;</span>
            {"\n    "}
            <span className="pl-kos">&lt;</span>
            <span className="pl-ent">link</span>{" "}
            <span className="pl-c1">rel</span>="
            <span className="pl-s">stylesheet</span>"{" "}
            <span className="pl-c1">href</span>="
            <span className="pl-s">
              https://pyscript.net/alpha/pyscript.css
            </span>
            " /&gt; {"\n    "}
            <span className="pl-kos">&lt;</span>
            <span className="pl-ent">script</span>{" "}
            <span className="pl-c1">defer</span>{" "}
            <span className="pl-c1">src</span>="
            <span className="pl-s">https://pyscript.net/alpha/pyscript.js</span>
            "<span className="pl-kos">&gt;</span>
            <span className="pl-kos">&lt;/</span>
            <span className="pl-ent">script</span>
            <span className="pl-kos">&gt;</span>
            {"\n    "}
            <span className="pl-kos">&lt;</span>
            <span className="pl-ent">link</span>{" "}
            <span className="pl-c1">href</span>="
            <span className="pl-s">
              https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css
            </span>
            " <span className="pl-c1">rel</span>="
            <span className="pl-s">stylesheet</span>"{" "}
            <span className="pl-c1">crossorigin</span>="
            <span className="pl-s">anonymous</span>"
            <span className="pl-kos">&gt;</span> {"\n  "}
            <span className="pl-kos">&lt;/</span>
            <span className="pl-ent">head</span>
            <span className="pl-kos">&gt;</span>
            {"\n  "}
            <span className="pl-kos">&lt;</span>
            <span className="pl-ent">body</span>
            <span className="pl-kos">&gt;</span> {"\n    "}
            <span className="pl-kos">&lt;</span>
            <span className="pl-ent">b</span>
            <span className="pl-kos">&gt;</span>
            <span className="pl-kos">&lt;</span>
            <span className="pl-ent">p</span>
            <span className="pl-kos">&gt;</span>Today is{" "}
            <span className="pl-kos">&lt;</span>
            <span className="pl-ent">u</span>
            <span className="pl-kos">&gt;</span>
            <span className="pl-kos">&lt;</span>
            <span className="pl-ent">label</span>{" "}
            <span className="pl-c1">id</span>='
            <span className="pl-s">today</span>'
            <span className="pl-kos">&gt;</span>
            <span className="pl-kos">&lt;/</span>
            <span className="pl-ent">label</span>
            <span className="pl-kos">&gt;</span>
            <span className="pl-kos">&lt;/</span>
            <span className="pl-ent">u</span>
            <span className="pl-kos">&gt;</span>
            <span className="pl-kos">&lt;/</span>
            <span className="pl-ent">p</span>
            <span className="pl-kos">&gt;</span>
            <span className="pl-kos">&lt;/</span>
            <span className="pl-ent">b</span>
            <span className="pl-kos">&gt;</span>
            {"\n    "}
            <span className="pl-kos">&lt;</span>
            <span className="pl-ent">br</span>
            <span className="pl-kos">&gt;</span>
            {"\n    "}
            <span className="pl-kos">&lt;</span>
            <span className="pl-ent">div</span>{" "}
            <span className="pl-c1">id</span>="
            <span className="pl-s">pi</span>"{" "}
            <span className="pl-c1">className</span>="
            <span className="pl-s">alert alert-primary</span>"
            <span className="pl-kos">&gt;</span>
            <span className="pl-kos">&lt;/</span>
            <span className="pl-ent">div</span>
            <span className="pl-kos">&gt;</span>
            {"\n    "}
            <span className="pl-kos">&lt;</span>
            <span className="pl-ent">py-script</span>
            <span className="pl-kos">&gt;</span>
            <div className="white">{`
      import datetime as dt
      pyscript.write('today', dt.date.today().strftime('%A %B %d, %Y'))

      def compute_pi(n):
          pi = 2
          for i in range(1,n):
              pi *= 4 * i ** 2 / (4 * i ** 2 - 1)
          return pi

      pi = compute_pi(100000)
      pyscript.write('pi', f'π is approximately {pi:.3f}')
    `}</div>
            {"\n    "}
            <span className="pl-kos">&lt;/</span>
            <span className="pl-ent">py-script</span>
            <span className="pl-kos">&gt;</span>
            {"\n  "}
            <span className="pl-kos">&lt;/</span>
            <span className="pl-ent">body</span>
            <span className="pl-kos">&gt;</span>
            {"\n"}
            <span className="pl-kos">&lt;/</span>
            <span className="pl-ent">html</span>
            <span className="pl-kos">&gt;</span>
          </pre>
          <h1>The py-env tag</h1>
          <p dir="auto">
            In addition to the{" "}
            <a
              className="NoUnderLine"
              href="https://docs.python.org/3/library/"
              rel="nofollow"
            >
              Python Standard Library
            </a>{" "}
            and the <code>pyscript</code> module, many 3rd-party OSS packages
            will work out-of-the-box with PyScript.
          </p>
          <p dir="auto">
            In order to use them, you will need to declare the dependencies
            using the <code>&lt;py-env&gt;</code> tag in the HTML head. You can
            also link to <code>.whl</code> files directly on disk like in our{" "}
            <a
              className="NoUnderLine"
              href="https://github.com/pyscript/pyscript/blob/main/examples/toga/freedom.html"
            >
              toga example
            </a>
            .
          </p>
          <pre className="CodeSampleBackground">
            <button
              className="copy"
              onClick={() =>
                copyToClipboard(`<py-env>
- './static/wheels/travertino-0.1.3-py3-none-any.whl'
</py-env>`)
              }
            >
              <AiOutlineCopy />
            </button>

            <code>
              &lt;py-env&gt; {"\n  "}-
              './static/wheels/travertino-0.1.3-py3-none-any.whl'{"\n"}
              &lt;/py-env&gt;
            </code>
          </pre>
          <p dir="auto">
            If your <code>.whl</code> is not a pure Python wheel, then open a PR
            or issue with{" "}
            <a
              className="NoUnderLine"
              href="https://github.com/pyodide/pyodide"
            >
              pyodide
            </a>{" "}
            to get it added{" "}
            <a
              className="NoUnderLine"
              href="https://github.com/pyodide/pyodide/tree/main/packages"
            >
              here
            </a>
            . If there's enough popular demand, the pyodide team will likely
            work on supporting your package. Regardless, things will likely move
            faster if you make the PR and consult with the team to get
            unblocked.
          </p>
          <p dir="auto">
            For example, NumPy and Matplotlib are available. Notice here we're
            using <code>&lt;py-script output="plot"&gt;</code>
            as a shortcut, which takes the expression on the last line of the
            script and runs <code>pyscript.write('plot', fig)</code>.
          </p>
          <pre className="CodeSampleBackground">
            <button
              className="copy"
              onClick={() => copyToClipboard(Py_End_Tag)}
            >
              <AiOutlineCopy />
            </button>
            <span className="pl-kos">&lt;</span>
            <span className="pl-ent">html</span>
            <span className="pl-kos">&gt;</span> {"\n  "}
            <span className="pl-kos">&lt;</span>
            <span className="pl-ent">head</span>
            <span className="pl-kos">&gt;</span>
            {"\n    "}
            <span className="pl-kos">&lt;</span>
            <span className="pl-ent">link</span>{" "}
            <span className="pl-c1">rel</span>="
            <span className="pl-s">stylesheet</span>"{" "}
            <span className="pl-c1">href</span>="
            <span className="pl-s">
              https://pyscript.net/alpha/pyscript.css
            </span>
            " /&gt; {"\n    "}
            <span className="pl-kos">&lt;</span>
            <span className="pl-ent">script</span>{" "}
            <span className="pl-c1">defer</span>{" "}
            <span className="pl-c1">src</span>="
            <span className="pl-s">https://pyscript.net/alpha/pyscript.js</span>
            "<span className="pl-kos">&gt;</span>
            <span className="pl-kos">&lt;/</span>
            <span className="pl-ent">script</span>
            <span className="pl-kos">&gt;</span> {"\n    "}
            <span className="pl-kos">&lt;</span>
            <span className="pl-ent">py-env</span>
            <span className="pl-kos">&gt;</span> {"\n       "}- numpy -
            matplotlib
            <span className="pl-kos">&lt;/</span>
            <span className="pl-ent">py-env</span>
            <span className="pl-kos">&gt;</span> {"\n  "}
            <span className="pl-kos">&lt;/</span>
            <span className="pl-ent">head</span>
            <span className="pl-kos">&gt;</span>
            {"\n  "}
            <span className="pl-kos">&lt;</span>
            <span className="pl-ent">body</span>
            <span className="pl-kos">&gt;</span> {"\n    "}
            <span className="pl-kos">&lt;</span>
            <span className="pl-ent">h1</span>
            <span className="pl-kos">&gt;</span>Let's plot random numbers
            <span className="pl-kos">&lt;/</span>
            <span className="pl-ent">h1</span>
            <span className="pl-kos">&gt;</span> {"\n    "}
            <span className="pl-kos">&lt;</span>
            <span className="pl-ent">div</span>{" "}
            <span className="pl-c1">id</span>="
            <span className="pl-s">plot</span>"
            <span className="pl-kos">&gt;</span>
            <span className="pl-kos">&lt;/</span>
            <span className="pl-ent">div</span>
            <span className="pl-kos">&gt;</span>
            {"\n    "}
            <span className="pl-kos">&lt;</span>
            <span className="pl-ent">py-script</span>{" "}
            <span className="pl-c1">output</span>="
            <span className="pl-s">plot</span>"
            <span className="pl-kos">&gt;</span>
            {`
      import matplotlib.pyplot as plt
      import numpy as np

      x = np.random.randn(1000)
      y = np.random.randn(1000)

      fig, ax = plt.subplots()
      ax.scatter(x, y)
      fig`}{" "}
            {"\n    "}
            <span className="pl-kos">&lt;/</span>
            <span className="pl-ent">py-script</span>
            <span className="pl-kos">&gt;</span>
            {"\n  "}
            <span className="pl-kos">&lt;/</span>
            <span className="pl-ent">body</span>
            <span className="pl-kos">&gt;</span>
            {"\n"}
            <span className="pl-kos">&lt;/</span>
            <span className="pl-ent">html</span>
            <span className="pl-kos">&gt;</span>
          </pre>

          <h1>Local modules</h1>
          <p dir="auto">
            In addition to packages, you can declare local Python modules that
            will be imported in the <code>&lt;py-script&gt;</code> tag. For
            example, we can place the random number generation steps in a
            function in the file <code>data.py</code>.
          </p>

          <pre className="CodeSampleBackground">
            <button
              className="copy"
              onClick={() =>
                copyToClipboard(`# data.py 
import numpy as np 
def make_x_and_y(n):
  x = np.random.randn(n) 
  y = np.random.randn(n) 
  return x, y`)
              }
            >
              <AiOutlineCopy />
            </button>
            <span className="pl-c"># data.py</span> {"\n"}
            <span className="pl-k">import</span>{" "}
            <span className="pl-s1">numpy</span>{" "}
            <span className="pl-k">as</span> <span className="pl-s1">np</span>{" "}
            {"\n  "}
            <span className="pl-k">def</span>{" "}
            <span className="pl-en">make_x_and_y</span>(
            <span className="pl-s1">n</span>
            ):{"\n    "}
            <span className="pl-s1">x</span> <span className="pl-c1">=</span>{" "}
            <span className="pl-s1">np</span>.
            <span className="pl-s1">random</span>.
            <span className="pl-en">randn</span>(
            <span className="pl-s1">n</span>) {"\n    "}
            <span className="pl-s1">y</span> <span className="pl-c1">=</span>{" "}
            <span className="pl-s1">np</span>.
            <span className="pl-s1">random</span>.
            <span className="pl-en">randn</span>(
            <span className="pl-s1">n</span>) {"\n    "}
            <span className="pl-k">return</span>{" "}
            <span className="pl-s1">x</span>, <span className="pl-s1">y</span>
          </pre>

          <p dir="auto">
            In the HTML tag <code>&lt;py-env&gt;</code>, paths to local modules
            are provided in the
            <code> paths:</code> key.
          </p>

          <pre className="CodeSampleBackground">
            <button
              className="copy"
              onClick={() => copyToClipboard(LocalModules)}
            >
              <AiOutlineCopy />
            </button>
            <span className="pl-kos">&lt;</span>
            <span className="pl-ent">html</span>
            <span className="pl-kos">&gt;</span> {"\n  "}
            <span className="pl-kos">&lt;</span>
            <span className="pl-ent">head</span>
            <span className="pl-kos">&gt;</span> {"\n    "}
            <span className="pl-kos">&lt;</span>
            <span className="pl-ent">link</span>{" "}
            <span className="pl-c1">rel</span>="
            <span className="pl-s">stylesheet</span>"{" "}
            <span className="pl-c1">href</span>="
            <span className="pl-s">
              https://pyscript.net/alpha/pyscript.css
            </span>
            " /&gt; {"\n    "}
            <span className="pl-kos">&lt;</span>
            <span className="pl-ent">script</span>{" "}
            <span className="pl-c1">defer</span>{" "}
            <span className="pl-c1">src</span>="
            <span className="pl-s">https://pyscript.net/alpha/pyscript.js</span>
            "<span className="pl-kos">&gt;</span>
            <span className="pl-kos">&lt;/</span>
            <span className="pl-ent">script</span>
            <span className="pl-kos">&gt;</span> {"\n    "}
            <span className="pl-kos">&lt;</span>
            <span className="pl-ent">py-env</span>
            <span className="pl-kos">&gt;</span>
            {`
        - numpy 
        - matplotlib
        - paths:
          - ./data.py`}
            {"\n    "}
            <span className="pl-kos">&lt;/</span>
            <span className="pl-ent">py-env</span>
            <span className="pl-kos">&gt;</span> {"\n  "}
            <span className="pl-kos">&lt;/</span>
            <span className="pl-ent">head</span>
            <span className="pl-kos">&gt;</span> {"\n  "}
            <span className="pl-kos">&lt;</span>
            <span className="pl-ent">body</span>
            <span className="pl-kos">&gt;</span> {"\n    "}
            <span className="pl-kos">&lt;</span>
            <span className="pl-ent">h1</span>
            <span className="pl-kos">&gt;</span>Let's plot random numbers
            <span className="pl-kos">&lt;/</span>
            <span className="pl-ent">h1</span>
            <span className="pl-kos">&gt;</span>
            {"\n    "}
            <span className="pl-kos">&lt;</span>
            <span className="pl-ent">div</span>{" "}
            <span className="pl-c1">id</span>="
            <span className="pl-s">plot</span>"
            <span className="pl-kos">&gt;</span>
            <span className="pl-kos">&lt;/</span>
            <span className="pl-ent">div</span>
            <span className="pl-kos">&gt;</span>
            {"\n    "}
            <span className="pl-kos">&lt;</span>
            <span className="pl-ent">py-script</span>{" "}
            <span className="pl-c1">output</span>="
            <span className="pl-s">plot</span>"
            <span className="pl-kos">&gt;</span>
            {"\n    "}
            {`  import matplotlib.pyplot as plt
      from data import make_x_and_y

      x, y = make_x_and_y(n=1000)

      fig, ax = plt.subplots()
      ax.scatter(x, y)
      fig`}
            {"\n    "}
            <span className="pl-kos">&lt;/</span>
            <span className="pl-ent">py-script</span>
            <span className="pl-kos">&gt;</span> {"\n  "}
            <span className="pl-kos">&lt;/</span>
            <span className="pl-ent">body</span>
            <span className="pl-kos">&gt;</span> {"\n"}
            <span className="pl-kos">&lt;/</span>
            <span className="pl-ent">html</span>
            <span className="pl-kos">&gt;</span>
          </pre>

          <h1>The py-repl tag</h1>
          <p dir="auto">
            The <code>&lt;py-repl&gt;</code> tag creates a REPL component that
            is rendered to the page as a code editor, allowing you to write
            executable code inline.
          </p>
          <h1>The py-config tag</h1>
          <p dir="auto">
            Use the <code>&lt;py-config&gt;</code> tag to set and configure
            general metadata about your PyScript application in YAML format. If
            you are unfamiliar with YAML, consider reading{" "}
            <a
              className="NoUnderLine"
              href="https://www.redhat.com/sysadmin/yaml-beginners"
              rel="nofollow"
            >
              Red Hat's YAML for beginners
            </a>{" "}
            guide for more information.
          </p>
          <p dir="auto">
            The <code>&lt;py-config&gt;</code> tag can be used as follows:
          </p>
          <pre className="CodeSampleBackground">
            <button
              className="copy"
              onClick={() =>
                copyToClipboard(`- autoclose_loader: false
- runtimes:
  -
    src: "https://cdn.jsdelivr.net/pyodide/v0.20.0/full/pyodide.js"
    name: pyodide-0.20
    lang: python`)
              }
            >
              <AiOutlineCopy />
            </button>
            <code>
              &lt;py-config&gt;
              {`
  - autoclose_loader: false
  - runtimes:
    -
      src: "https://cdn.jsdelivr.net/pyodide/v0.20.0/full/pyodide.js"
      name: pyodide-0.20
      lang: python`}{" "}
              {"\n"}
              &lt;/py-config&gt;
            </code>
          </pre>
          <p dir="auto">
            The following optional values are supported by{" "}
            <code>&lt;py-config&gt;</code>:
          </p>
          <ul dir="auto">
            <li>
              autoclose_loader (boolean): If false, PyScript will not close the
              loading splash screen when the startup operations finish.
            </li>
            <li>
              name (string): Name of the user application. This field can be any
              string and is to be used by the application author for their own
              customization purposes.
            </li>
            <li>
              version (string): Version of the user application. This field can
              be any string and is to be used by the application author for
              their own customization purposes. It is not related to the
              PyScript version.
            </li>
            <li>
              runtimes (List of Runtimes): List of runtime configurations. Each
              Runtime expects the following fields:
              <ul dir="auto">
                <li>src (string, Required): URL to the runtime source.</li>
                <li>
                  name (string): Name of the runtime. This field can be any
                  string and is to be used by the application author for their
                  own customization purposes.
                </li>
                <li>
                  name (string): Programming language supported by the runtime.
                  This field can be used by the application author to provide
                  clarify. It currently has no implications on how PyScript
                  behaves.
                </li>
              </ul>
            </li>
          </ul>
        </div>

        {/* right */}
        <div id="right">
          <h3 style={{ color: "lightblue" }}>Related Question and Answer</h3>
          <button>
            <a href="https://techcomputinginfo.com/#/question/blog">
              For example, relating questions For example, relating questions
              For example, relating questions
            </a>
          </button>
          <br />
          <button>
            <a href="https://techcomputinginfo.com/#/question/blog">
              For example, relating questions
            </a>
          </button>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>

          <br />
        </div>
      </div>
    </>
  );
}

export default PyScriptIntro;
