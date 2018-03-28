import React from 'react';

import classesCss from './Cockpit.css';

const cockpit = (props) => {

  const classes = [];
  let btnClass = '';
  if (props.showPersons) {
    btnClass = classesCss.Red;
  }

  if (props.persons.length <= 2) {
    classes.push(classesCss.red); // classes = ['red']
  }
  if (props.persons.length <= 1) {
    classes.push(classesCss.bold); // classes = ['red', 'bold']
  }

  return (
      <div className={classesCss.Cockpit}>
        <h1>{props.showTitle}</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button
            className={btnClass}
            onClick={props.clicked}>Toggle Persons
        </button>
      </div>
  );
};

export default cockpit;