import React from 'react';
import logo from './logo.svg';
import './App.css';
import Ripple from './components/ripple/Ripple.js'

function App() {
  return (
    <div className="App">
      <Ripple>
        <button>testing</button>
      </Ripple>

      <Ripple>
        <div>testing2222</div>
      </Ripple>
    </div>
  );
}

export default App;
