import React, { useState } from "react";
import RegExpCheck from "./RegExpCheck";
import JsxHandler from "./JsxHandler";



class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("APP props:", props)
    this.state = {
    }
    console.log('App props:', this.props);
    // this.handleChange = this.handleChange.bind(this);
    // this.modInput = this.setModInput.bind(this);
  }

  onChange(arrayOfRegExp, event, regexMatch) {

    this.setState({ match: regexMatch });
    this.setState({ input: event });
    this.setState({ jsx: [arrayOfRegExp, event, regexMatch] });

    const h1 = (array) => array.map(val => val.toString() === '# ');
    const h2 = (array) => array.map(val => val.toString() === '# ');
    const h3 = (array) => array.map(val => val.toString() === '### ');
    const bold = (array) => array.map(val => val.hasOwnProperty('**'));

    this.setState({arrOfMethods: [h1, h2, h3, bold]})

  }

  // console.log('App.onChange(arrayOfRegExp):', arrayOfRegExp)
  // console.log('App.onChange(event):', event)
  // console.log('App.onChange(regexMatch):', regexMatch)

  render() {
    return (
      <div className="App">
        <h2>Markdown Previewer</h2>
        <div>
          <RegExpCheck onChange={this.onChange.bind(this)} />
          {console.log('App.onChange(state):', this.state)}
        </div>
        <JsxHandler
          state={this.state}
        />
        <div>
          <p>{this.state.input}</p>
        </div>
      </div>
    )
  };
}

export default App;