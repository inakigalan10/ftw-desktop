import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  matchings: [],
  matching: {
    username: "", 
    description: "",
    player_type: "",
    play_schedule: "",
    genres: [],
    languages: [],
    country: "",   
  },
  match:"",
  action:null,
  isLoading: false,
  error: "",
  info: "",
  message:"",
};

export const matchingSlice = createSlice({
  name: "matching",
  initialState,
  reducers: {
    startLoadingMatchings: (state) => {
      state.isLoading = true;
    },

    setMatchings: (state, action) => {
      state.matchings = action.payload;
      state.isLoading = false;
    },

    setMatching: (state, action) => {
      state.matching = action.payload;
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
    
    setMatch: (state, action) => {
      state.match = action.payload;
      state.isLoading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  startLoadingMatchings,
  setMatchings,
  setMatching,
  setInfo,
  setError,
  setMatch,
} = matchingSlice.actions;
export default matchingSlice.reducer;
