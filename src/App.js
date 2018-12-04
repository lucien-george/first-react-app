import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import dc_logo from './dc_logo.png'
import marvel_logo from './marvel_logo.jpg'

function HomePage() {
  return(
    <div>
      <h1>First react app</h1>
        <div className="container">
          <Link to="/dc-comics" className="column">
            <img src={dc_logo} className="App-dc" alt="dc logo"/>
          </Link>
          <Link to="/marvel-comics" className="column">
            <img src={marvel_logo} className="App-marvel" alt="marvel logo"/>
          </Link>
        </div>
    </div>
  )
}

function DCComics() {
  return(
    <div>
      <h1>This is the DCComics pages</h1>
    </div>
  )
}

function MarvelComics() {
  return(
    <div>
      <h1>This is the Marvel Page</h1>
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/dc-comics" component={DCComics}/>
          <Route exact path="/marvel-comics" component={MarvelComics}/>
        </div>
      </Router>
    );
  }
}

export default App;
