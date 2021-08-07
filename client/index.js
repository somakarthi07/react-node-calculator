
import React from 'react'; // import React package
import ReactDOM from 'react-dom'; // import ReactDOM package
import App from "./App"
import "./index.css";



// using the render method, we will mount this node into our DOM (html file)
// on the element with id of 'app'
ReactDOM.render(
<App />, // mount our frame component
document.getElementById('app')
);