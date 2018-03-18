import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, react app</h1>
        <p>this is really working</p>
        <Person name="St" age="33"/>
        <Person name="Aw" age="28">My hobbies: dev</Person>
      </div>
    );
    /*return React.createElement('div', {className: 'App'}, React.createElement('h1', '', 'now it works'));*/
  }
}

export default App;
