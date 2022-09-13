import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import README from "./README.md"
import "./styles/style.css";

export default function App() {

    const [input, setInput] = useState();
    const [documentation, setDocumentation] = useState();

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/stay1st/markdown-previewer/main/src/README.md').then((response) => {
            return response.ok ? response.text() : Promise.reject('README.md not fetched correctly!');
        }).then((text) => setInput(text)).catch((error) => console.log(error));
    }, []);

    return (
        <div className="app">
            <div id="left-container">
                <div>
                    <h2 className="main-text">Text Editor</h2>
                    <textarea
                        id="editor"
                        value={input}
                        onChange={(event) => setInput(event.target.value)}
                    ></textarea>
                </div>
                <div>
                    <h3 className="main-text">Documentation</h3>
                    <div id="documentation-area">
                    </div>
                </div>
            </div>
            <div id="right-container" className="main-text">
                <div id="previewer">
                    <ReactMarkdown>
                        {input}
                    </ReactMarkdown>
                </div>
            </div>
        </div>
    )
}