import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profiles: [],
  profile: {
    username: "", 
    description: "",
    player_type: "",
    play_schedule: "",
    genres: [],
    languages: [],
    country: "",   
  },
  isLoading: false,
  error: "",
  info: "",
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    startLoadingProfiles: (state) => {
      state.isLoading = true;
    },

    setProfiles: (state, action) => {
      state.profiles = action.payload;
      state.isLoading = false;
    },

    setProfile: (state, action) => {
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
  startLoadingProfiles,
  setProfiles,
  setProfile,
  setInfo,
  setError,
} = profileSlice.actions;
export default profileSlice.reducer;
