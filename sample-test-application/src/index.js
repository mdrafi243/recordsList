import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuitheme from "material-ui/styles/getMuiTheme";
import darkBaseTheme from "material-ui/styles/baseThemes/darkBaseTheme";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/home";
import NewRecord from "./components/newRecord";

ReactDOM.render(
  <BrowserRouter>
    <MuiThemeProvider muiTheme={getMuitheme(darkBaseTheme)}>
      <App>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/newrecord" component={NewRecord} />
          <Route
            exact
            path="*"
            render={() => {
              return (
                <span>
                  <h1>NOT FOUND</h1> The requested Page does not exist
                </span>
              );
            }}
          />
        </Switch>
      </App>
    </MuiThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
