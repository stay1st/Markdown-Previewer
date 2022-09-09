import React, { useState } from "react";
import RegExpCheck from "./RegExpCheck";



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    console.log('App props:', this.props);
  }

  createJSX() {
    return this.state.regex.toString()
  }

  onChange(name, event, regex){
    
    this.setState({[name]: regex});
    this.setState({input: event});
    this.createJSX(name, event, regex);

    this.createJSX()

    console.log('App.onChange(name):', name)
    console.log('App.onChange(event):', event)
    console.log('App.onChange(regex):', regex)
  }


  render() {
    return (
      <div className="App">
        <h2>Markdown Previewer</h2>
        <div>
          <RegExpCheck onChange={this.onChange.bind(this)} />
          {console.log('App.onChange(state):', this.state)}
        </div>
        <div>
        <p>{this.state.input}</p>
        </div>
      </div>
    )
  };
}

export default App;