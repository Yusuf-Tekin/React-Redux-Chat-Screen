import React, { Component } from "react";
import "./App.css";
import Main from "./Components/Main";
import Loader from "react-loader-spinner";
class App extends Component {
  render() {
    return (
      <div>
        <Main />
      </div>
    );
  }
}
export default App;
