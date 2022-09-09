import React, { useState } from "react";


export default function UserInput() {

    const [htmlAttr, setHtmlAttr] = useState(<></>);
    const [input, setInput] = useState('Hello');
    // const expressions = {
    //     h1: [/^#\s.*/, jsxObj.h1()],
    //     h2: [/^#{2}\s.*/, jsxObj.h2()],
    //     h3: [/^#{3}\s.*/, jsxObj.h3()],
    //     h4: [/^#{4}\s.*/, jsxObj.h4()],
    //     bold: [/[\*]{2}[a-zA-Z0-9\t\n ./<>?;:"'`!@#$%^&*()\[\]{}_+=|\\-]+[\*]/g, jsxObj.bold()]
    // };

    const handleChange = (event) => {

        const boldConvert = (input) => {

            let regInput = ''

            regInput = input.match(/[\*]{2}[a-zA-Z0-9\t\n ./<>?;:"'`!@#$%^&*()\[\]{}_+=|\\-]+[\*]/g);
            regInput = regInput.toString();

            let beforeAstr = input.split(regInput)[0];
            let middleExp = regInput.replace(new RegExp(/\*\*/, 'g'), '');
            let afterAstr = input.split(regInput)[2];

            // console.log('regInput-------------START:', regInput);
            // console.log('beforeAstr BOLD:', beforeAstr);
            // console.log("middleExp BOLD:", middleExp);
            // console.log("aftrAst BOLD:", afterAstr);
            // console.log("input in func:", input);
            // console.log("input match:---------END", input.match(/[\*]{2}[a-zA-Z0-9\t\n ./<>?;:"'`!@#$%^&*()\[\]{}_+=|\\-]+[\*]/g));

            return <p>{beforeAstr}<strong>{middleExp}</strong>{afterAstr}</p>;
        };

        function h1(input){
            let match = input.match(/^#\s.*/);
            input = input.replace('# ', ''); 
            return <h1>{input}{console.log("h1-Match:", match)}</h1> 
        };
        function h2(input){
            let match = input.match(/^#{2}\s.*/)
            input = input.replace('##', ''); 
            return <h2>{input}{console.log("h2-Match:", match)}</h2> 
        };
        function h3(input){ 
            let match = input.match(/^#{3}\s.*/)
            input = input.replace('###', ''); 
            return <h3>{input}{console.log("h3-Match:", match)}</h3>
        };
        function h4(input){
            let match = input.match(/^#{4}\s.*/)
            input = input.replace('####', ''); 
            return <h3>{input}{console.log("h4-Match:", match)}</h3>
        };
        function strong(input){
            let match = input.match(/[\*]{2}[a-zA-Z0-9\t\n ./<>?;:"'`!@#$%^&*()\[\]{}_+=|\\-]+[\*]/g)
            return boldConvert(input)
        };

        setHtmlAttr(event.target.value);
        setInput(event.target.value);

        const arrRegEx = [/^#\s.*/, /^#{2}\s.*/, /^#{3}\s.*/, /^#{4}\s.*/, /[\*]{2}[a-zA-Z0-9\t\n ./<>?;:"'`!@#$%^&*()\[\]{}_+=|\\-]+[\*]/g];

        const callBacks = [h1(), h2(), h3(), h4(), strong()];

        let text = ''

        for (let i = 0; i < arrRegEx.length; i++) {

            let text = input.match(arrRegEx[i])

            if (text !== null) {
                text = callBacks[i](text);
                setHtmlAttr(text);
            }
        }
    }
    return (
        <div>
            <textarea
                id="editor"
                onChange={handleChange}
                value={input}
                cols='40'
                rows='20'
            />
            {htmlAttr}
        </div>
    )
};

    // (input) {
        //         let regInput = '';
        //         const boldConvert = () => {

        //             regInput = input.match(/[\*]{2}[a-zA-Z0-9\t\n ./<>?;:"'`!@#$%^&*()\[\]{}_+=|\\-]+[\*]/g);
        //             regInput = regInput.toString();
        //             let beforeAstr = input.split(regInput)[0];
        //             let middleExp = regInput.replace(new RegExp(/\*\*/, 'g'), '');
        //             let afterAstr = input.split(regInput)[2];

        //             console.log('regInput-------------START:', regInput);
        //             console.log('beforeAstr BOLD:', beforeAstr);
        //             console.log("middleExp BOLD:", middleExp);
        //             console.log("aftrAst BOLD:", afterAstr);
        //             console.log("input in func:", input);
        //             console.log("input match:---------END", input.match(/[\*]{2}[a-zA-Z0-9\t\n ./<>?;:"'`!@#$%^&*()\[\]{}_+=|\\-]+[\*]/g));

        //             return <p>{beforeAstr}<strong>{middleExp}</strong>{afterAstr}</p>;
        //         };
        //         return <div>{boldConvert(input)}{console.log('input OUT:',input)}</div>}]
        //                                         //  input = input.repalce("**", '');
        //                                         //  input = <strong>{input}</strong>; return <p>{input}</p>}]