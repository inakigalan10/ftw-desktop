import { configureStore } from '@reduxjs/toolkit'
import matchingSlice from './matching/slice/matchingSlice'
import matchSlice from './Matches/slice/matchSlice'
import profileSlice from './Profile/slice/profileSlice'
import notificationSlice from './Notification/slice/notificationSlice'
import messageSlice from './chat/Message/slice/messageSlice'
import chatSlice from './chat/slice/chatSlice'



export const store = configureStore({
  reducer: {
    profile:profileSlice,
    matching:matchingSlice,
    match:matchSlice,
    notification:notificationSlice,
    message:messageSlice,
    chat:chatSlice
    
  },
})