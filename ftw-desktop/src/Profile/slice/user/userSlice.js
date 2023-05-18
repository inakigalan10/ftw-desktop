import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 users: [],
  user: {
    id: 0, 
    username: "",
    email: "",
    is_staff: false,
    profile: "",   
  },
  isLoading: false,
  error: "",
  info: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    startLoadingUsers: (state) => {
      state.isLoading = true;
    },

    setUsers: (state, action) => {
      state.users = action.payload;
      state.isLoading = false;
    },

    setUser: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
    },
    
    setInfo: (state, action) => {
      state.info = action.payload;
      state.error = "";
      state.isLoading = false;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.info = "";
      state.isLoading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  startLoadingUsers,
  setUsers,
  setUser,
  setInfo,
  setError,
} = userSlice.actions;
export default userSlice.reducer;
