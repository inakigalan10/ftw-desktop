import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chats: [],
  chat: {
    chat_id: 0, 
    created_at: "",
    participant_id: 0,
    participant_name: "",
  },
  isLoading: false,
  error: "",
  info: "",
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    startLoadingChats: (state) => {
      state.isLoading = true;
    },

    setChats: (state, action) => {
      state.chats = action.payload;
      state.isLoading = false;
    },

    setChat: (state, action) => {
      state.chat = action.payload;
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
  startLoadingChats,
  setChats,
  setChat,
  setInfo,
  setError,
} = chatSlice.actions;
export default chatSlice.reducer;
