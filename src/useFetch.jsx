import React, {useEffect,useState} from "react";
import axios from "axios";



const useFetch = (url) =>{
    const [data,setdata] = useState([])
    const [error,setError] = useState("")
    const fetchApi = async () =>{
        try{ 
            const response = await axios.get(url)
            setdata(response.data)

        }catch(error){
            setError("There is an error")

        }
    }
    useEffect(()=>{
        fetchApi()
    },[])
    return{data, error,}
}


export default useFetch