import { configureStore } from "@reduxjs/toolkit"
import boardReducer from "../features/board/boardSlice"
import authStateReducer from "../features/authentication/auth"

export default configureStore({
  reducer: {
    authState: authStateReducer,
    board: boardReducer
  },
})
