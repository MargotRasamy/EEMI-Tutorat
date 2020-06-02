import React, { Component, useReducer } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Register from "./components/Register";
import EditTodo from "./components/edit-todo";
import TodosList from "./components/todos-list";
import UsersList from "./components/UsersList";
import Login from "./components/Login";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="https://codingthesmartway.com" target="_blank">
            </a>
            <Link to="/" className="navbar-brand">MERN-Stack App</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">List</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/register" className="nav-link">Create an element</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <Route path="/" exact component={UsersList} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
        </div>
      </Router>
    );
  }
}

export default App;