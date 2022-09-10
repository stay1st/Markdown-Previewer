import React, { useState } from "react";
import RegExpCheck from "./RegExpCheck";
import JsxHandler from "./JsxHandler";



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    console.log('App.props:', this.props);
    // this.handleChange = this.handleChange.bind(this);
    // this.modInput = this.setModInput.bind(this);
  }

  onChange(arrayOfRegExp, event, regexMatch) {

    this.setState({ match: regexMatch });
    this.setState({ input: event });
    this.setState({ jsx: [arrayOfRegExp, event, regexMatch] });

    let array = [];

    const createBools = (regular) => {

      let arrOfBools = []

      const h1 = (array) => {return array.map(val => val.toString() === '# ')};
      const h2 = (array) => {return array.map(val => val.toString() === '# ')};
      const h3 = (array) => {return array.map(val => val.toString() === '### ')};
      const bold = (array) => {return array.map(val => val.hasOwnProperty('**'))};

      const head1 = h1(regular.toString());
      const head2 = h2(regular.toString());
      const head3 = h3(regular.toString());
      const bolded = bold(regular.toString());

      arrOfBools.push(head1, head2, head3, bolded);
      return array.push(arrOfBools)
    }
    createBools(regexMatch);
    this.setState({ bools: array });
    console.log('bools:', this.bools)
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
          arrOfMethods
        />
        <div>
          <p id="preview"></p>
        </div>
      </div>
    )
  };
}

export default App;