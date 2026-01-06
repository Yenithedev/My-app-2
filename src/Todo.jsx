import { useState } from "react";



const Todo = () =>{
    const [todo,setTodo] = useState("")
    const [storedtodo,setStoredTodo] = useState([])
    const [isEditing,setIsEditing] = useState(false)
    const [editingIndex,setEditingIndex] = useState("")
    const handleTodo = () =>{
        setStoredTodo([...storedtodo,todo])
        setTodo("")
    }
    const handleEdit = (index) =>{
        setIsEditing(true)
        setTodo(storedtodo[index])
        setEditingIndex(index)
    }
    const handleSave = () =>{
        storedtodo[editingIndex] = todo
        setStoredTodo([...storedtodo])
        setIsEditing(false)
        setTodo("")
        setEditingIndex("")

    }
    return(
        <div className="w-[400px] mx-auto">
        <input className="mr-5 mt-5 border py-1 px-4 "  value={todo} onChange={(e)=>setTodo(e.target.value)}/>

        {
            isEditing ? <button className="border py-1 px-4 text-black bg-blue-200 hover:bg-green-200" onClick={handleSave}>Save</button> :
            <button className="border py-1 px-4 text-black bg-blue-200 hover:bg-green-200" onClick={handleTodo}>Add Todo</button>
        }
        {
            storedtodo.map((item,index) =>(
                <div className="my-5" key={index}><strong className="bg-yellow">{item}</strong>
                <button onClick={()=>{
                    setStoredTodo(storedtodo.filter(todoItem => todoItem !== item))
                }} className="mr-2 ml-2 border py-1 px-4 text-black bg-red-500 hover:bg-red-200" >Delete</button>
                <button className="border py-1 px-4 text-black bg-green-500 hover:bg-green-200"  onClick={()=>handleEdit(index)}>Edit</button>
                </div>
            ))
        }
        
        
        </div>

    )
}
export default Todo