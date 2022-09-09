import React, { useState, useEffect, useTransition, useRef } from "react";
// import CodeMirror from "@uiw/react-codemirror";
// import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
// import { languages } from "@codemirror/language-data";
import CodeEditor from "@uiw/react-textarea-code-editor";

function HtmlCssJsEditor({ props }) {
  const [html, setHtml] = useState(props);
  const [srcDoc, setSrcDoc] = useState("");
  const [, startTransition] = useTransition();
  const [height, setHeight] = useState("0px");
  const ref = useRef();

  useEffect(() => {
    setHtml(props);
  }, [props]);

  useEffect(() => {
    const element = ref.current;
    setHeight(element.contentWindow.document.body.scrollHeight + "px");
    console.log(element.contentWindow.document.body.scrollHeight);
    startTransition(() => {
      setSrcDoc(html);
    });
  }, [html, height]);
  // const onLoad = () => {
  //   setHeight(ref.contentWindow.document.body.scrollHeight + "px");
  // };

  return (
    <>
      <div className="pane">
        <div>
          {/* <CodeMirror
            value={html}
            spellCheck="false"
            aria-label="HTML Code Editor"
            padding={15}
            options={{
              spellCheck: "false",
              lineWrapping: true,
            }}
            extensions={[
              markdown({ base: markdownLanguage, codeLanguages: languages }),
            ]}
            onChange={(value) => setHtml(value)}
          /> */}
          <div data-color-mode="light">
            <CodeEditor
              value={html}
              language="html"
              placeholder="Please enter html, css, js code."
              onChange={(evn) => setHtml(evn.target.value)}
              padding={15}
              className="EditorMode"
              spellCheck={false}
              // style={{
              //   fontFamily:
              //     "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
              //   fontSize: 14,
              // }}
            />
          </div>
        </div>
        <div className="EditorOutput">
          <iframe
            ref={ref}
            srcDoc={srcDoc}
            title="output"
            // sandbox="allow-scripts"
            frameBorder="0"
            height={height}
            className="text-editor-output"
          />
        </div>
      </div>
    </>
  );
}

export default HtmlCssJsEditor;
