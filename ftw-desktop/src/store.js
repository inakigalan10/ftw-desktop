import { configureStore } from '@reduxjs/toolkit'
import matchingSlice from './matching/slice/matchingSlice'
import matchSlice from './Matches/slice/matchSlice'
import profileSlice from './Profile/slice/profileSlice'
import userSlice from './Profile/slice/user/userSlice'
import reportesSlice from './admin/ReportList/slice/reportesSlice'
import  fotoSlice  from './foto/fotoSlice'





export const store = configureStore({
  reducer: {
    profile:profileSlice,
    matching:matchingSlice,
    match:matchSlice,
    user:userSlice,
    reporte:reportesSlice,
    foto:fotoSlice

    
  },
})