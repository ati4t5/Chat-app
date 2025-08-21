import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import assets from '../assets/assets';

const Profilepg = () => {
  const [selectedimg,setselectedimg]=useState(null)
  const navigate=useNavigate();
  const [name,setname]=useState("Bava")
  const [bio,setbio]=useState("Hi,everyone");
  const handlesubmit=async (e)=>{
    e.preventDefault();
    navigate('/');
  }
  return (
    <div className='min-h-screen bg-cover bg-no-repeat flex items-center justify-center'>
     <div className='w-5/6 max-w-2xl backdrop-blur-2xl text-gray-300 border-2 border-gray-600 flex items-center justify-between max-sm:flex-col-reverse rounded-lg'>
     
     <form onSubmit={handlesubmit} action="" className='flex flex-col gap-5 p-10 flex-1'>
      <h3 className='text-lg '>Profile Detail</h3>
      <label htmlFor="avator" className='flex items-center gap-3 cursor-pointer'>
        <input onChange={(e)=>setselectedimg(e.target.files[0])} type="file" id="avator" accept='.png, .jpg, .jpeg' hidden />
        <img src={selectedimg ? URL.createObjectURL(selectedimg) 
          : assets.chaticon
        } alt="" className={`w-12 h-12 ${selectedimg && "rounded-full"}`} 
         />
         upload profile img
      </label>
      <input onChange={(e)=>setname(e.target.value)   } value={name}
       type="text" required placeholder='Your Name' className='p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-vilot-500'  />
       <textarea onChange={(e)=>setbio(e.target.value)} value={bio}
       placeholder='Write profile bio' required className='p-2 border border-gray-500 rounded-md focus:outline-none  focus:ring-2 focus:ring-vilot-500'  rows={4}></textarea>
      <button type='submit' className='bg-gradient-to-r from-purple-400 to-violet-600 text-white p-2 rounded-full text-lg cursor-pointer'>Save</button>
      </form>
      <img className='max-w-44 aspect-square rounded-full mx-10 max-sm:mt-10' src={assets.chaticon} alt="" /></div>

    </div>
  )
}

export default Profilepg
