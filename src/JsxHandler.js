import React, {useState} from 'react';
import App from './App';

class JsxHandler extends React.Component {
    constructor(props){
        super(props);
    }


    render(){
        return(
            <div>
                <h1>{this.h1}</h1>
                <h2></h2>
                <h3></h3>
                <strong></strong>
                <p></p>
            </div>
        )
    }
}
export default JsxHandler