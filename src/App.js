import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import README from "./README.md"
import "./styles/style.css";

export default function App() {

    const [input, setInput] = useState();
    const [documentation, setDocumentation] = useState(); //For future

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/stay1st/markdown-previewer/main/src/README.md').then((response) => {
            return response.ok ? response.text() : Promise.reject('README.md not fetched correctly!');
        }).then((text) => setInput(text)).catch((error) => console.log(error));
    }, []);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/stay1st/markdown-previewer/main/src/DOCUMENTATION.md').then((response) => {
            return response.ok ? response.text() : Promise.reject('DOCUMENTATION.md not fetched correctly!');
        }).then((text) => setDocumentation(text)).catch((error) => console.log(error))
    }, []); // just for fun!! For future implementation of showing JSX expressions.

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
                        <h3>Headings:</h3>
                        <em>"...there is a space after the hashtags"</em>
                        <h4>H1</h4><p>"#  "</p>
                        <h5>H2</h5><p>"## "</p>
                        <h6>H3</h6><p>"### "</p>
                        <h3>Stylizing Text:</h3>
                        <strong>Bold</strong><p> **bold text**</p>
                        <em>Italic</em>	<p>*italicized text*</p>
                        <blockquote>Blockquote</blockquote>	<p>> blockquote</p>
                        <h3>For List Items:</h3>
                        <h4>Ordered List:</h4>
                        <p>   1. First item</p>
                        <p>   2. Second item</p>
                        <p>   3. Third item</p>
                        <h4>Unordered List:</h4>
                        <p>   - First item</p>
                        <p>   - Second item</p>
                        <p>   - Third item</p>
                        <p><h4>Code:</h4> `code`</p>
                        <p><h4>Horizontal Rule:</h4> ---</p>
                        <p><h4>Link:</h4>	[title](https://www.example.com)</p>
                        <p><h4>Image:</h4>	![alt text](image.jpg)</p>
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