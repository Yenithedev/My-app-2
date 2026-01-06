
import { Link } from "react-router-dom"
import { blogData } from "./Blogdata"


const Blog = () =>{
    return(
        <div className="flex gap-10" style={{display:"grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            margin: "40px",
            
        }}>
        {
            blogData.map((item,index)=>(
                <Link to={`/blog/${item.id}`} >
                    <div style={{backgroundColor:"lightgray",padding:"20px",}
                    }>
                        
                        <img style={{width:"100%",
                            height:"200px"
                        }} src={item.img} alt="" />
                        <h1>{item.title}</h1>
                        <p>{item.desc}</p>
                    </div>
                </Link>
            ))
        }
        </div>
    )
}
export default Blog