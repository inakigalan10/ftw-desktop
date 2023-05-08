import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  page: 0,
  isLoading: false,
  error: "",

  
};

export const adminUserSlice = createSlice({
  name: "userAdmin",
  initialState,
  reducers: {
    startLoadingUsers: (state) => {
      state.isLoading = true;
    },
    setUsers: (state, action) => {
      state.users = action.payload;
      state.isLoading = false;
    },
    
  },
});

// Action creators are generated for each case reducer function
export const {
  startLoadingUsers,
  setUsers,
  
} = adminUserSlice.actions;
export default adminUserSlice.reducer;
