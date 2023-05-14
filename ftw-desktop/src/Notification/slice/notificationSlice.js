import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notifications: [],
  notification: {
    notification_id: 0, 
    user_id: 0,
    message: "",
    read: false,
    created_at: "",
    chat_id: null,
    match_id: null,   
  },
  isLoading: false,
  error: "",
  info: "",
};

export const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    startLoadingNotifications: (state) => {
      state.isLoading = true;
    },

    setNotifications: (state, action) => {
      state.profiles = action.payload;
      state.isLoading = false;
    },

    setNotification: (state, action) => {
      state.profile = action.payload;
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
  startLoadingNotifications,
  setNotifications,
  setNotification,
  setInfo,
  setError,
} = notificationSlice.actions;
export default notificationSlice.reducer;
