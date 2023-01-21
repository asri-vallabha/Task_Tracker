import React,{ useState } from 'react'
import axios from 'axios'
import TaskForm from './TaskForm';


const AddTask=(props)=>{
    const[isSaved,setIsSaved]=useState(false)
    const{addItem}= props

    const formSubmit= (task) =>{
        axios.post('http://localhost:3033/api/tasks',task)
        .then((response)=>{
            addItem(response.data)
            setIsSaved(true)
        }) //success
        .catch((err)=>{
            alert(err.message)
        }) // error
        
        console.log('form submit',task)
       
        }
    const toggleIsSaved = () =>{
        setIsSaved(false)
    }
    return(
        <div>
            <h2>AddTask</h2>
            <TaskForm formSubmit={formSubmit}
            isSaved = {isSaved}
            toggleIsSaved = {toggleIsSaved}
            />
        </div>
    )
}

export default AddTask;