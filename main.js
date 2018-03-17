function Person(props) {
  return (
      <div className="person">
        <h1>{props.name}</h1>
        <p>Your age: {props.age}</p>
      </div>
  );
}

var app = (
    <div>
      <Person name="St" age="33"/>
      <Person name="Aw" age="28"/>
    </div>
);

ReactDOM.render(app, document.querySelector('#app'));
