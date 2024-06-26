'use client'

import React, { useState } from 'react'

const page = () => {
  const [Title,setTitle] = useState("")
  const [desc,setdesc] = useState("")
  const [mainTask,setMainTask] = useState([]) 
const submitHandler = (e) =>{

     e.preventDefault()
     setMainTask([...mainTask, {Title,desc}])
     
     setTitle("")
     setdesc("")
     console.log(mainTask)
} 
const deleteHandler = (i) =>{
  let copyTask = [...mainTask]
  copyTask.splice(i,1)
  setMainTask(copyTask)

}

let renderTask = <h2>No Task Available</h2>
if (mainTask.length>0) {
  renderTask = mainTask.map((t,i)  =>{
    return (
      <li key = {i} className='flex items-center justify-between mb-5'>
       <div className='flex items-center justify-between w-2/3'>
        <h5 className = "text-xl font-semibold">{t.Title}</h5>
        <h6 className = "text-lg font-semibold">{t.desc}</h6>
      </div>
     <button onClick= {()=>{
         deleteHandler(i)

     } }
     className='bg-red-400 text-white px-4 py-2 rounded font-bold '>Delete</button>
      </li>
  
  
  
    )
  })
}


  return (
    
      <>
      <h1 className='bg-black text-white p-5 text-xl font-bold text-center'>Ayush todolist</h1>
      <form onSubmit = {submitHandler}>
      <input type = "text" className='text-2xl border-zinc-800 border-4 m-5 px-4 py2' 
      placeholder='Enter title here'
      value ={Title} 
      onChange = {(e)=>{
        setTitle(e.target.value)
      }}
      
      
      />
      <input type = "text" className='text-2xl border-zinc-800 border-4 m-5 px-4 py2' 
      placeholder='Enter description here'
      value = {desc}
      onChange = {(e)=>{
        setdesc(e.target.value)

      }}
      
      />
      

      <button className='bg-black text-white px-4 py-2 text-2xl font-bold rounded m-5 '>Add task</button>

      </form>
      <hr  />
      <div className='p-8 bg-slate-200'>
        <ul>
         {renderTask}

        </ul>
      </div>
      </>
    
  )
}

export default page

