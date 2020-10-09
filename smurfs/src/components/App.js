import React, { Component } from "react";
import "./App.css";
import SmurfList from './SmurfList'
import Form from './Form'
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>App Level</h1>
        <SmurfList/>
        <Form/>
      </div>
    );
  }
}

export default App;
