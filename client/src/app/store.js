import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "../features/counter/counterSlice"
import authStateReducer from "../features/authentication/auth"

export default configureStore({
  reducer: {
    counter: counterReducer,
    authState: authStateReducer,
  },
})
