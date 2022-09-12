import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import "./styles/style.css";

export default function App() {

    const [input, setInput] = useState();

    return (
        <div className="app">
            <div id="left-container">
                <div>
                    <h2 className="main-text">Text Editor</h2>
                    <textarea
                        id="editor"
                        value={input}
                        onChange={(event) => setInput(event.target.value)}
                    />
                </div>
                <div>
                    <h3 className="main-text">Text Editor</h3>
                    <p id="documentation-area"
                        value={input}
                        onChange={(event) => setInput(event.target.value)}
                    ></p>
                </div>
            </div>
            <div id="right-container" className="main-text">
                <h1 id="h1-text">Markdown Previewer</h1>
                <div id="previewer">
                    <ReactMarkdown>
                        {input}
                    </ReactMarkdown>
                </div>
            </div>
        </div>
    )
}