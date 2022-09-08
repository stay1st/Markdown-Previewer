import React, { useState } from "react";
import UserInput from "./UserInput"


class App extends React.Component {

  handleChange(){
  }
  

  render() {
    return (
      <div className="App">
        <h2>Markdown Previewer</h2>
        <div>
          <UserInput />
        </div>
        <div>

        </div>

      </div>
    )
  };
}

export default App;
