import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUsers, addUser, updateUser, deleteUser } from '../slices/userSlice.js';
import { fetchUsers } from '../services/userApi';

export function useUsers() {
  const users = useSelector(state => state.users.list);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const data = await fetchUsers();
      dispatch(setUsers(data));
    })();
  }, [dispatch]);

  return {
    users,
    addUser: (u) => dispatch(addUser(u)),
    updateUser: (u) => dispatch(updateUser(u)),
    deleteUser: (id) => dispatch(deleteUser(id)),
  };
}
