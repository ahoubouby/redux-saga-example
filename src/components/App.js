import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TYPE_USERS } from '../actions/users';
import UserForm from './UserForm';
import UserList from './UserList';
function App() {
  const { users, loading, errors } = useSelector(state => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: TYPE_USERS.GET_USERS_REQUEST });
  }, []);

  return (
    <div style={{margin: '0 auto', padding : '20px', maxWidth: '600px'}}>
      <UserForm />
      <UserList users={users} loading={loading} errors={errors} />
    </div>
  );
}

export default App;
