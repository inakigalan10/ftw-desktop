import { configureStore } from '@reduxjs/toolkit'
import matchingSlice from './matching/slice/matchingSlice'
import matchSlice from './Matches/slice/matchSlice'
import profileSlice from './Profile/slice/profileSlice'
import userSlice from './Profile/slice/user/userSlice'





export const store = configureStore({
  reducer: {
    profile:profileSlice,
    matching:matchingSlice,
    match:matchSlice,
    user:userSlice

    
  },
})