// // import { useState,useEffect } from "react"
// // import axios from "axios"
// // import { toast } from "react-toastify"




// // const Apicomponent = () => {
// //     const [email, setEmail] = useState("")
// //     const [password,setPassword]=useState("")
// //     const [users,setUsers]=useState([])
// //     const handleMe = async () => {
// //         const data={
// //             emailAddress: email,
// //             password:password
// //             }
// //         try {
          
// //             const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
// //             console.log(response)
// //             // toast(response.data.message)
// // //             toast.error(response?.data?.message, {
// // // position: "top-right",
// // // autoClose: 5000,
// // // hideProgressBar: false,
// // // closeOnClick: false,
// // // pauseOnHover: true,
// // // draggable: true,
// // // progress: undefined,
// // // theme: "colored",
// // // transition: Bounce,
// // // });

// //             // setUsers(response.data)
         
// //         } catch (error) {
// //             // toast(error.response.data.error.description)
// //                         toast.error("An error occured");
// //             // alert(error.response.data.error.description)
// //             // console.log(error.response.data.error.description)
// //         }
// //     }

    
// //     // useEffect(() => {
// //     //     handleMe()
// //     // }, [])
// //     return (
// //         <>
// //             <Navbar />
// //             <input placeholder="email" className="border" value={email} onChange={(e) => setEmail(e.target.value)} />
// //             <input placeholder="pws" className="border" value={password} onChange={(e)=>setPassword(e.target.value)}/>
// //             <button onClick={handleMe}>Add Ppost</button>
// //            <div className="grid grid-col-2">
            
// //                 {/* {
// //                     users?.map((value, i) =>
// //                         <div className="border p-3 bg-[green] text-white">
// //                             {i + 1}. { value.title}
// //                   </div>
// //                     )
// //            } */}
// //         </div>  
// //        </>
// //     )
// // }

// // export default Apicomponent
// import axios from "axios"
// import { useEffect,useState } from "react"


// const Apicomponent = ()=>{
//     const [post,setPost] = useState([])
//     const handleMe = async()=>{
//         try{ const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
            
//             setPost(response.data)
//             console.log(post)


//         }catch (error){
//             console.log(error)

//         }
//     }
//     useEffect(()=>{
//         handleMe()
//     },[])
//     return(
//         <div>
//             {
//                 post.map((value,index)=>
//                     <div>{index+1} {value.title}
//                     <hr/>
//                     </div>
                    
//                 )
//             }
//         </div>
//     )
// }

// export default Apicomponent

import { BASE_URL } from "./Apiconfig"
import useFetch from "./useFetch"

const Apicomponent = () => {
    const {data} =useFetch(`${BASE_URL}/post`)
    return(
        <div>
            {
                data.map((value, index)=>
                <div>{index+1}.  {value.title}<hr/></div>)
            }
        </div>
    )
}
export default Apicomponent