import React from 'react';
import Modal from 'react-modal';
import { useState,useEffect } from 'react';


const Contact = () =>{
    const [open, setOpen] = useState(false)
    const handleModal = ()=>{
        setOpen(true)
        

    }
    const customStyles ={
        content:{
            width: "50%",
            // backgroundColor: "red",
            margin: "auto"
            
        }
    }
    const handleMe = ()=>{
        // alert("yes")
    }
    useEffect(()=>{
        // handleModal()
        handleMe()
        console.log("Hello")
    },[])

    return(
        <div>
            <button onClick={handleModal}>Open Modal</button>
            <Modal 
            isOpen={open}
            style={customStyles}>
                <div className='bg-blue-300'>Hello</div>
            </Modal>

        </div>
    )
}

export default Contact