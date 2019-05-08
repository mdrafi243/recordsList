import React, { Component } from "react";
import "./App.css";
import DataList from "./components/dataList";
import FlatButton from "material-ui/FlatButton/FlatButton";
import TextField from "material-ui/TextField";

//const updateDataList = dataRocrd => {};

const App = props => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Sample Test Application</h1>
      </header>
      {props.children}
    </div>
  );
};

export default App;
