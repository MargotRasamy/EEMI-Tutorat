import React, { Component, useReducer } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.scss';
import './styles/style.scss';


import "bootstrap/dist/css/bootstrap.min.css";

import Register from "./components/register";
import CreateCourse from "./components/courses/newCourse";
import EditTodo from "./components/edit-todo";
import UsersList from "./components/UsersList";
import Calendar from "./components/calendar";
import Login from "./components/login";
import AllCourses from './components/courses/allCourses';
import Landing from './components/landing';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="main">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="https://codingthesmartway.com" target="_blank">
            </a>
            <Link to="/" className="navbar-brand">Home</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/register" className="nav-link">Create an element</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <Route path="/landing" exact component={Landing} />
          <Route path="/" exact component={UsersList} />
          <Route path="/calendar" exact component={Calendar} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/courses/new" component={CreateCourse} />
          <Route path="/courses/all" component={AllCourses} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
        </div>
      </Router>
    );
  }
}

export default App;