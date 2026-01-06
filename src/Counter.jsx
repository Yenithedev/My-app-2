import { useSelector,useDispatch } from "react-redux"
import { decrement,increment } from "./Redux/Counterslice"



const Counter = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  
  return (
    <div className="p-5 text-center">
      <h1 className="text-4xl font-bold mb-4">{count}</h1>
      <button 
        onClick={() => dispatch(increment())}
        className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
      >
        Increase
      </button>
      <button 
        onClick={() => dispatch(decrement())}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Decrease
      </button>
    </div>
  )
}

export default Counter