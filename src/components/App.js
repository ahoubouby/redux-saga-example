import React, { useEffect } from 'react';
import axios from '../utils/axios';

function App() {
  useEffect(() => {
    axios.get('users')
      .then(({data}) => console.log(data));
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Learn React
        </p>
      </header>
    </div>
  );
}

export default App;
