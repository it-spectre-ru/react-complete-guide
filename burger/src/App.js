import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'


class App extends Component {
  state = {
    persons: [
      {name: 'St', age: 28},
      {name: 'Aw', age: 33}
    ]
  }

  switchNameHandler = (newName) => {
    // console.log('was clickked');
    // DON'T DO THIS --> this.state.persons[0].name = 'st ts'
    this.setState({persons: [
      {name: newName, age: 33},
      {name: 'Awer', age: 28}
    ]});
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, react app</h1>
        <p>this is really working</p>
        <button onClick={() => this.switchNameHandler('st')}>Switch name</button>
        <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}/>
        <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Awer')}>My hobbies: dev</Person>
      </div>
    );
    /*return React.createElement('div', {className: 'App'}, React.createElement('h1', '', 'now it works'));*/
  }
}

export default App;
