import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers(state, action) {
      state.list = action.payload;
    },
    addUser(state, action) {
      state.list.unshift(action.payload); // prepend
    },
    updateUser(state, action) {
      const idx = state.list.findIndex(u => u.id === action.payload.id);
      if (idx !== -1) {
        state.list[idx] = action.payload;
      }
    },
    deleteUser(state, action) {
      state.list = state.list.filter(u => u.id !== action.payload);
    },
  },
});

export const { setUsers, addUser, updateUser, deleteUser } = usersSlice.actions;
export default usersSlice.reducer;
