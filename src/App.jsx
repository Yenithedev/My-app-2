import { Route,Routes } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Nopage from "./Nopage"
import Todo from "./Todo"
import Navbar from "./Navbar"
import Blog from "./Blog"
import Viewblog from "./Viewblog"
import Signup from "./Signup"
import { ToastContainer } from "react-toastify"
import Apicomponent from "./Apicomponent"
import Counter from "./Counter"
import Todos from "./Todos"



const App = ()=>{
  return(
    <>
    <Navbar/>
    <ToastContainer/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/todos" element={<Todos/>}/>
      <Route path="*" element={<Nopage/>}/>
      <Route path="/counter" element={<Counter/>}/>
      <Route path="/todo" element={<Todo/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path= "/blog/:id" element={<Viewblog/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/apicomponent" element={<Apicomponent/>}/>
      
      
    </Routes>
    </>
  )
}
export default App