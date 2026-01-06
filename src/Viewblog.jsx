import { useParams,useNavigate } from "react-router-dom"
import { blogData } from "./Blogdata"


 


 const Viewblog = () =>{

    const navigate = useNavigate()
    const {id} = useParams()
    console.log(id)
    const filterBlog = blogData.filter((item,i)=> item.id===id)
    console.log(filterBlog)
    const handleBtn = () =>{
        navigate("/about")

    }
    
    return(
        <>
        <div>
            title={filterBlog[0].title}<br/>
            Description={filterBlog[0].desc}<br/>
            <img src={filterBlog[0].img}/>
            <button onClick={()=>handleBtn()}>Go To</button>

        </div>
        </>
    )
 }
 export default Viewblog