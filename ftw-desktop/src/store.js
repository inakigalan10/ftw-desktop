import { configureStore } from '@reduxjs/toolkit'
import profileSlice from './Profile/CreateProfile/slice/profileSlice'
import matchingSlice from './matching/slice/matchingSlice'



export const store = configureStore({
  reducer: {
    profile:profileSlice,
    matching:matchingSlice
    
  },
})