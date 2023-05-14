import { configureStore } from '@reduxjs/toolkit'
import matchingSlice from './matching/slice/matchingSlice'
import matchSlice from './Matches/slice/matchSlice'
import profileSlice from './Profile/slice/profileSlice'
import notificationSlice from './Notification/slice/notificationSlice'



export const store = configureStore({
  reducer: {
    profile:profileSlice,
    matching:matchingSlice,
    match:matchSlice,
    notification:notificationSlice
    
  },
})