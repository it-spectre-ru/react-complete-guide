import React from 'react';

const person = (props) => {
  return (
      <div>
        <p onClick={props.click}>A person! and i am {props.name} and {props.age} years old</p>
        <p>{props.children}</p>
      </div>
  );
};

export default person;