import React from 'react';
// import Stylesheet and css from aphrodite library 
import { StyleSheet, css } from 'aphrodite';

// create a variable styles and create a stylesheet for the following classes and apply the properties:
// - list: display: flex; list-style-type: none; (tip: don't forget to camelCase the property!)
// - title: color: #39424e;

function App() {
  return (
    // add the correct className value to your ul and h1 tags 
    <div>
      <nav>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
        </ul>
      </nav>
      <h1>Aphrodite!</h1>
      <p>This is an example of Aphrodite</p>
    </div>
  );
}

export default App;