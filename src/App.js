import React, { useState } from "react";
import "./styles.css";
import "mvp.css";

// React allows for creating custom elements (components)
//Components are defined as functions, which return JSX (Javascript)
function Hello({ greeting = "Hi", name = "World" }) {
  return (
    <h2>
      {greeting} {name}
    </h2>
  );
}

export default function App() {
  // Increases the count of clicks
  function handleClick(event) {
    // event.preventDefault();
    // alert("You cannot access " + event.target);
    setCount(count + 1);
  }

  // Changes the value in the paragraph with the value in the input box
  function inputChanged(event) {
    setText(event.target.value);
  }

  const [text, setText] = useState("A phrase");
  const [count, setCount] = useState(0);
  const names = ["Walter", "Reginald", "Timothy"];

  // Looping in react is done through mapping
  const helloComponents = names.map((name, i) => <Hello name={name} />);

  return (
    <div className="App">
      <Hello />
      <Hello name="Jason" />
      <Hello greeting="Bonjour" name="Travis" />
      {helloComponents}
      <button onClick={handleClick}>Click {count}</button>

      <input onChange={inputChanged} value={text} />
      <button>Clear Input</button>
      <p>{text}</p>
    </div>
  );
}
