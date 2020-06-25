import React, { Component, useReducer } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './styles/style.scss';


import "bootstrap/dist/css/bootstrap.min.css";

import Register from "./components/register";
import CreateCourse from "./components/courses/newCourse";
import EditTodo from "./components/edit-todo";
import UsersList from "./components/UsersList";
import Calendar from "./components/calendar";
import Login from "./components/login";
import AllCourses from './components/courses/allCourses';
import Landing from './components/4-layouts/landing/landing';


class App extends Component {
  render() {
    return (
      <div className="main">
        <Router>
        
          <Route path="/landing" exact component={Landing} />
          <Route path="/" exact component={UsersList} />
          <Route path="/calendar" exact component={Calendar} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/courses/new" component={CreateCourse} />
          <Route path="/courses/all" component={AllCourses} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />

      </Router>
      </div>
      
    );
  }
}

export default App;