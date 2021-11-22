import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { Component } from "react";
import Home from './Pages/Home.js';
import './App.scss';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = { apiResponse: "" };
  }

  callAPI() {
      fetch("http://localhost:3000/")
          .then(res => res.text())
          .then(res => this.setState({ apiResponse: res }))
          .catch(err => err);
  }

  componentDidMount() {
      this.callAPI();
  }

  render() {
    return ( 
      <Router>
        <div className='App bg-image'>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
