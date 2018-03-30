import React from 'react';

import classesCss from './Cockpit.css';
import Aux from '../../hoc/Auxiliary';

const cockpit = (props) => {

  const classes = [];
  let btnClass = classesCss.Button;
  if (props.showPersons) {
    btnClass = [classesCss.Button, classesCss.Red].join(' ');
  }

  if (props.persons.length <= 2) {
    classes.push(classesCss.red); // classes = ['red']
  }
  if (props.persons.length <= 1) {
    classes.push(classesCss.bold); // classes = ['red', 'bold']
  }

  return (
      <Aux>
        <h1>{props.showTitle}</h1>,
        <p className={classes.join(' ')}>This is really working!</p>,
        <button
            className={btnClass}
            onClick={props.clicked}>Toggle Persons
        </button>
      </Aux>
  );
};

export default cockpit;