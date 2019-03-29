import React from 'react';
import AddPost from "./AddPost";
import './css/App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";

export default class App extends React.Component {
  render() {
    return (
      <Router>
          <div className="App">
            <h1>Microblogger</h1>
            <Route path="/" exact component={Home} />
            <Route path="/Post" exact component={AddPost} />
          </div>
      </Router>
    );
  }
}

