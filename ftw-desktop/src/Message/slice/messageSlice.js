import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  messages: [],
  message: {
    match_id: 0, 
    created_at: "",
    chat_id: 0,
    user1_data: {
        user_id:0,
        username:"",
      },
    user2_data: {
      user_id: 0,
      username: ""
    },     
  },
  isLoading: false,
  error: "",
  info: "",
};

export const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    startLoadingMatchs: (state) => {
      state.isLoading = true;
    },

    setMatchs: (state, action) => {
      state.messages = action.payload;
      state.isLoading = false;
    },

    setMatch: (state, action) => {
      state.message = action.payload;
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
  startLoadingMatchs,
  setMatchs,
  setMatch,
  setInfo,
  setError,
} = messageSlice.actions;
export default messageSlice.reducer;
