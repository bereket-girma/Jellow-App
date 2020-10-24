import { configureStore } from "@reduxjs/toolkit"

import authStateReducer from "../features/authentication/auth"

export default configureStore({
  reducer: {
    authState: authStateReducer,
  },
})
