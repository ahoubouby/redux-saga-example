import React from 'react';
import { useDispatch } from 'react-redux';
import { TYPE_USERS } from '../actions/users';

function App() {
  const dispatch = useDispatch();
  dispatch({ type: TYPE_USERS.GET_USERS_REQUEST });
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
