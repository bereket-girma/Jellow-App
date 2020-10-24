import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const boardSlice = createSlice({
  name: "projects",
  initialState: {
    // projects: [],
    columns: [],
    cards: [],
    board: [],
  },
  reducers: {
    // displayProjects: (state, action) => {
    //   state.todos = action.payload
    // },
    displayColumns: (state, action) => {
      state.columns = action.payload
    },
    displayCards: (state, action) => {
      state.cards = action.payload
    },
     displayBoard: (state, action) => {
      state.board = action.payload
    },
  },
})

export const { displayProjects, displayColumns, displayCards, displayBoard } = boardSlice.actions

// export const getProjects = () => (dispatch) => {
//   axios.get("/api/t").then((r) => dispatch(display(r.data)))
// }

// GET REQUESTS
export const getColumns = () => (dispatch) => {
  axios.get("/api/columns").then((r) => dispatch(displayColumns(r.data)))
}
export const getCards = () => (dispatch) => {
  axios.get("/api/cards").then((r) => dispatch(displayCards(r.data)))
}
export const getBoard = () => (dispatch) => {
  axios.get("/api/projects").then((r) => dispatch(displayBoard(r.data)))
}

// POST REQUESTS
export const addColumn = (obj) => (dispatch) => {
  axios.post("/api/columns", { title: obj }).then((r) => {
    dispatch(getBoard())
  })
}

export const addCard = (description, column_id) => (dispatch) => {
  axios.post("/api/cards", { description: description, column_id: column_id }).then((r) => {
    dispatch(getBoard())
  })
}

// DELETE REQUESTS

export const removeColumn = (id) => (dispatch) => {
  axios.delete("/api/columns/" + id).then((r) => {
    dispatch(getBoard())
  })
}

export const removeCard = (id) => (dispatch) => {
  axios.delete("/api/cards/" + id).then((r) => {
    dispatch(getBoard())
  })
}

// UPDATE REQUESTS

export const updateColumns = (obj) => (dispatch) => {
  axios.patch('/api/columns/' + obj.id, {title: obj.title}).then((r) => {
    dispatch(getBoard())
  })
}

export const updateCard = (obj) => (dispatch) => {
  axios.patch('/api/cards/' + obj.id, {title: obj.title, description: obj.description, column_id: obj.column_id}).then((r) => {
    dispatch(getBoard())
  })
}

export const selectBoard = (state) => state.board.board
export const selectColumns = (state) => state.board.columns
export const selectCards = (state) => state.board.cards
// export const selectProjects = (state) => state.board.projects

export default boardSlice.reducer
