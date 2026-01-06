import { Link,useLocation } from "react-router-dom"




const Navbar = () =>{
    const {pathname} = useLocation()
        
    return(
        <>
        <ul className="bg-red-400 flex gap-30">
            <li><Link  className={`${pathname=="/"? "bg-green-400 text-white": "text-black"}`} to={"/"}>Home</Link></li>
            <li><Link className={`${pathname=="/about"? "bg-green-400 text-white": "text-black"}`} to={"/about"}>About</Link></li>
            <li><Link className={`${pathname=="/contact"? "bg-green-400 text-white": "text-black"}`} to={"/contact"}>Contact</Link></li>
            <li><Link className={`${pathname=="/todo"? "bg-green-400 text-white": "text-black"}`} to={"/todo"}>Todo</Link></li>
             <li><Link className={`${pathname=="/blog"? "bg-green-400 text-white": "text-black"}`} to={"/blog"}>Blog</Link></li>
             <li><Link className={`${pathname=="/signup"? "bg-green-400 text-white": "text-black"}`} to={"/signup"}>SIgnup</Link></li>
             <li><Link className={`${pathname=="/apicomponent"? "bg-green-400 text-white": "text-black"}`} to={"/apicomponent"}>Api Component</Link></li>
        </ul>
        </>
    )
}

export default Navbar