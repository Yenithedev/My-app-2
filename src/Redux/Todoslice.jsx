import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  list: [],
  isEditing: false,
  editingIndex: null,
}

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => { 
      state.list = [...state.list,action.payload]
    },
    deleteTodo: (state, action) => {
    state.list = state.list.filter(
    (_, index )=> index !== action.payload
  )
}
,
    startEdit: (state, action) => {
      state.isEditing = true
      state.editingIndex = action.payload
    }, 
    saveEdit: (state, action) => {
      state.list[state.editingIndex] = action.payload
      state.isEditing = false
      state.editingIndex = null
    },
  },
})

export const { addTodo, deleteTodo, startEdit, saveEdit } = todosSlice.actions
export default todosSlice.reducer
