import React, { useState, useEffect, useTransition } from "react";
import CodeMirror from "@uiw/react-codemirror";

function EditorApp() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [, startTransition] = useTransition();

  useEffect(() => {
    console.log(html); //gets called whenever get state changes
  }, [html]);

  useEffect(() => {
    startTransition(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
        </html>
      `);
    });
  }, [html, css, js]);

  return (
    <>
      <div className="pane">
        <div>
          <CodeMirror
            value={html}
            className="EditorMode"
            spellCheck="false"
            options={{
              spellCheck: "false",
            }}
            extensions={[
              markdown({ base: markdownLanguage, codeLanguages: languages }),
            ]}
            onChange={(value) => setHtml(value)}
          />
        </div>
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
    </>
  );
}

export default EditorApp;
