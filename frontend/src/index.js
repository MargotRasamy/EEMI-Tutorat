import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Provider }    from 'react-redux';
import store from './Store';

import App from './App';
import Register from "./components/4-layouts/register/register.js";
import CreateCourse from "./components/courses/newCourse";
import EditTodo from "./components/edit-todo";
import UsersList from "./components/UsersList";
import Calendar from "./components/calendar";
import Login from "./components/4-layouts/login/login.js";
import AllCourses from './components/courses/allCourses';
import Landing from './components/4-layouts/landing/landing';
import Messages from './components/message.js';

import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import './styles/style.scss';

const Root = () => {
  return(
    <React.StrictMode>
      <Router >
        <App >
          <Route exact path="/" component={Landing} />
          <Route path="/users" exact component={UsersList} />
          <Route path="/calendar" exact component={Calendar} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/courses/new" component={CreateCourse} />
          <Route path="/courses/all" component={AllCourses} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/message" component={Messages} />
        </App>
      </Router>
    </React.StrictMode>
  );
}

ReactDOM.render(
  <Provider store={store} >
    <Root />
  </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
