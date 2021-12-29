import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createUserRequest, deleteUserRequest, TYPE_USERS } from '../actions/users';
import UserForm from './UserForm';
import UserList from './UserList';

function App() {
  const { users, loading, errors } = useSelector(state => state.users);
  const dispatch = useDispatch();
  const onSubmit = user => dispatch(createUserRequest(user));
  const onDeleteUser = ({ id }) => dispatch(deleteUserRequest(id));
  useEffect(() => {
    dispatch({ type: TYPE_USERS.GET_USERS_REQUEST });
  }, []);

  return (
    <div style={{ margin: '0 auto', padding: '20px', maxWidth: '600px' }}>
      <UserForm onSubmit={onSubmit} />
      <UserList users={users} loading={loading} errors={errors} onDeleteUser={onDeleteUser} />
    </div>
  );
}

export default App;
