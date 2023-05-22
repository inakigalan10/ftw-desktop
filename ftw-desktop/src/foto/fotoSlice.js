import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 
  foto: {
    profile: 0, 
    image: "",
    
  },
  isLoading: false,
  error: "",
  info: "",
};

export const fotoSlice = createSlice({
  name: "foto",
  initialState,
  reducers: {
    startLoadingFoto: (state) => {
      state.isLoading = true;
    },

    setFoto: (state, action) => {
      state.foto = action.payload;
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
  startLoadingFoto,
  setFoto,
  setInfo,
  setError,
} = fotoSlice.actions;
export default fotoSlice.reducer;
