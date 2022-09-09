import React, { useState } from 'react';
import './index.css';
import App from './App';


class RegeExpCheck extends React.Component {
  constructor(props) {
    super(props);
    console.log( 'RegeExpCheck props:', this.props);
  }
//----------------------------
  onFieldChange(event) {

    let textAreaEqualsName = []; // the prop for the callback for App.onChange = textarea user input
                                                                                console.log('onFieldChange("textAreaEqualsName"):', textAreaEqualsName)
    let eventValueJSXChange = ''; // declaring "eventValueJSXChange" to capture our text to be replaced for **bold**
    const regexArr = [/^#\s/,/^##\s/,/^###\s/,/[*]{2}.*[*]{2}/]; // the Array of regexs we will be using to replace our user input symbols to JSX "HTML" "<attributes>""
    let regexMatch = []; // holds matches of user's input in the text area
    //-----------------------------------------------------------------
    // defining the function to take two arguments event = event.target.value and val = regexArr.map(val => val)
    function handleRegEx(event, val) {
      let result = event.match(val);
                                                                                console.log('onFieldChange(handleRegEx("result")):', result); // result of handleRegEx check
      // initializing our conditional statement, checking for regex matches to push all matches to "regexMatch"
      if ( result !== null ){
        regexMatch.push(event.match(val))
      } else {
        // returning boolean null for our console.log for accuracy in the code
        return null;
      }
    }
      regexArr.map(val => handleRegEx(event.target.value, val)); // mapping the regexs in the array, invoking the defined function "handleRegEx=()=> {pushing all matches to "regexArray"}
                                                                                    console.log('onFieldChange("regexMatch"):', regexMatch) // pushed array after handleRegEx check
    //------------------------------------------------------------------

      this.props.onChange(textAreaEqualsName, event.target.value, regexMatch);

                                                                                      console.log('RegeExpCheck.onFieldChange.this.props:', this.props);
  }
  //------------------------------------------------------------------------------------

  render() {
    return (
      <div>
        <textarea
          id="editor"
          name='textAreaSyntax'
          onChange={this.onFieldChange.bind(this)}
          cols='40'
          rows='20'
        />
      </div>
    )
  }
}
export default RegeExpCheck
