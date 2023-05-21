import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reportes: [],
  reporte: {
    id: 0, 
    reporter:0,
    reported_user:0 ,
    subject:"",
    description:"",
    created_at:"",  
  },
  isLoading: false,
  error: "",
  info: "",
};

export const reportesSlice = createSlice({
  name: "reporte",
  initialState,
  reducers: {
    startLoadingReportes: (state) => {
      state.isLoading = true;
    },

    setReportes: (state, action) => {
      state.reportes = action.payload;
      state.isLoading = false;
    },

    setReporte: (state, action) => {
      state.reporte = action.payload;
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
  startLoadingReportes,
  setReportes,
  setReporte,
  setInfo,
  setError,
} = reportesSlice.actions;
export default reportesSlice.reducer;
