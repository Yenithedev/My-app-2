import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTodo, deleteTodo, startEdit, saveEdit } from "./Redux/Todoslice"

const Todo = () => {
  const [todo, setTodo] = useState("")
  const dispatch = useDispatch()

  const { list, isEditing, editingIndex } = useSelector(
    (state) => state.todos
  )

  const handleAdd = () => {
    if (todo !== "") {
      dispatch(addTodo(todo))
      setTodo("")
    } else {
      alert("Todo can't be empty")
    }
  }

  const handleSave = () => {
    if (todo !== "") {
      dispatch(saveEdit(todo))
      setTodo("")
    } else {
      alert("Todo can't be empty")
    }
  }

  const handleEdit = (index) => {
    setTodo(list[index])
    dispatch(startEdit(index))
  }

  return (
    <div className="w-[400px] mx-auto">
      <input
        className="mr-5 mt-5 border py-1 px-4"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />

      {isEditing ? (
        <button
          className="border py-1 px-4 bg-blue-200 hover:bg-green-200"
          onClick={handleSave}
        >
          Save
        </button>
      ) : (
        <button
          className="border py-1 px-4 bg-blue-200 hover:bg-green-200"
          onClick={handleAdd}
        >
          Add Todo
        </button>
      )}

      {list.map((item, index) => (
        <div className="my-5" key={index}>
          <strong>{item}</strong>

          <button
            className="ml-2 mr-2 border py-1 px-4 bg-red-500 hover:bg-red-200"
            onClick={() => dispatch(deleteTodo(index))}
          >
            Delete
          </button>

          <button
            className="border py-1 px-4 bg-green-500 hover:bg-green-200"
            onClick={() => handleEdit(index)}
          >
            Edit
          </button>
        </div>
      ))}
    </div>
  )
}

export default Todo
