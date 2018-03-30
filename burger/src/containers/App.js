import React, {PureComponent} from 'react';
import classesCss from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

import WithClass from '../hoc/WithClass';

class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log('[app.js] inside constructor', props);
    this.state = {
      persons: [
        {id: 'asfa1', name: 'stts', age: 28},
        {id: 'vasdf1', name: 'awre', age: 29},
        {id: 'asdf11', name: 'alxer', age: 26},
      ],
    }
  }

  componentWillMount() {
    console.log('[app.js] inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[app.js] inside componentDidMount()');
  }

  /*shouldComponentUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] Inside shouldComponentUpdate', nextProps, nextState);
    return nextState.persons !== this.state.persons ||
        nextState.showPersons !== this.state.showPersons;
  }*/

  componentWillUpdate(nextProps, nextState){
    console.log('[UPDATE App.js] Inside componentWillUpdate', nextProps, nextState)
  }

  componentDidUpdate () {
    console.log('[UPDATE App.js] Inside componentDidUpdate')
  }

 /* state = {
    persons: [
      {id: 'asfa1', name: 'stts', age: 28},
      {id: 'vasdf1', name: 'awre', age: 29},
      {id: 'asdf11', name: 'alxer', age: 26},
    ],
    otherState: 'some other value',
    showPersons: false,
  };*/

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  };

  render() {
    console.log('[app.js] inside render');
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}/>;
    }

    return (
        <WithClass classes={classesCss.App}>
          <button onClick={() => {this.setState({showPersons: true})}}>show person</button>
          <Cockpit
              showTitle={this.props.title}
              showPersons={this.state.showPersons}
              persons={this.state.persons}
              clicked={this.togglePersonsHandler}/>
          {persons}
        </WithClass>
    );
    // return React.createElement('div', {className: 'App'},
    // React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;