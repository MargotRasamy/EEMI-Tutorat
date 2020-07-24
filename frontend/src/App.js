import React, { Component, useReducer } from "react";

import './styles/style.scss';
import Header from './components/3-organisms/header/header.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  };

  componentDidMount() {
    if (this.props.isLoggedIn) {
      this.setState({isLoggedIn: this.props.isLoggedIn})
    }
  }

  render() {
    console.log('hello from App')
    return (
        <div className="main">
          <Header />
          {this.props.children}
        </div>
    );
  }
}
export default App;