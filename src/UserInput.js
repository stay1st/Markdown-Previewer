import React, { useState } from "react";

export default function UserInput() {


    const [input, setInput] = useState('Hello');
    const [htmlAttr, setHtmlAttr] = useState(<></>);

    let text = '';

    const expressions = {

        h1: [/^#\s.*/,function(input){return <h1>{input}</h1>}],
        h2: [/^#{2}\s.*/,function(input){return <h2>{input}</h2>}],
        h3: [/^#{3}\s.*/,function(input){return <h3>{input}</h3>}]
    }
    const [regex, setRegex] = useState(expressions);

    const handleChange = (event) => {

        setHtmlAttr(event.target.value);
        setInput(event.target.value);

            let regexVals = Object.values(regex).map(val => val[0]); // mapping the regexp(s) to an array
            let regexKeys = Object.keys(regex);                   // mapping the regex keys to an array
            let attributes = Object.values(regex).map(val => val[1]); // mapping the HTML attributes to an array

///* console regexVals */ console.log("regexVals:", regexVals);
///* console regexKeys */ console.log("regexKeys:", regexKeys);
///* console attributes */ console.log("attributes B4:", attributes);

            for (let i = 0; i <= regexVals.length; i++) {
///* console regexVals vs input */ console.log("input match:", input.match(expression));
                if (input.match(regexVals[i]) !== null) {
///* console input = regular expression*/ console.log("matches regex(input):", input);
                    text = attributes[i](event.target.value)
                    setHtmlAttr(text);
///* console text */ console.log("attributes IF:", text);
                }
            }
        }

    return (
        <div>
            <input
                id="editor"
                onChange={handleChange}
                value={input}
            />
            {input}
            {htmlAttr}
            {text}
        </div>
    )
};