import React from "react";
import ReactDOM from "react-dom";

// Importing App.js
import App from "./App";

// Index.js is the entry point for JS

// constants can store markup
const jsElement = <p>This is Javascript!</p>;

// Grabs the root element in Index.html
const rootElement = document.getElementById("root");

// Output to index.html
// Our custom element is output using a self-closing tag
ReactDOM.render(<App />, rootElement);
