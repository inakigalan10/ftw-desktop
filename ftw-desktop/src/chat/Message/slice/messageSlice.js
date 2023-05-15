import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  messages: [],
  message: {
    message_id:0,
    chat_id:0,
    sender_id:0,
    sender:"",
    content:"",
    created_at:""
  },
  isLoading: false,
  error: "",
  info: "",
  add: true,
};

export const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    startLoadingMessages: (state) => {
      state.isLoading = true;
    },

    setMessages: (state, action) => {
      state.messages = action.payload;
      state.isLoading = false;
    },

    setMessage: (state, action) => {
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
    addMessage: (state, action) => {
      state.messages.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  startLoadingMessages,
  setMessages,
  setMessage,
  setInfo,
  setError,
  addMessage
} = messageSlice.actions;
export default messageSlice.reducer;
