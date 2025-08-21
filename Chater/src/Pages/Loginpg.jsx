import React, { useState } from 'react'
import assets from '../assets/assets'

const Loginpg = () => {
  const [currstate,setcurrstate]=useState("signup")
  const [fullname,setfullname]=useState("")
  const [email,setemail]=useState("")
  const [password,setpassword]=useState("")
  const [bio,setbio]=useState("")
const[isdatasubmited,setdatasubmited]=useState(false);
  const onsubmithandler=(event)=>{
event.preventDefault();
if(currstate === "signup" && !isdatasubmited){
setdatasubmited(true);
return;
}
  }

  return (
  
    <div className='min-h-screen bg-cover bg-center flex items-center justify-center gap-8 sm:justify-evenly
     max-sm:flex-col backdrop:blur-2xl'>
{/* left */}

<img src={assets.chaticon} alt="" className='w-[min(30vw,250px)]' />
{/* right */}
<form onSubmit={onsubmithandler} action="" className="border-2 bg-white/8 text-black border-gray-500 p-6 flex flex-col gap-6 rounded-lg shadow-lg">
<h2 className='font-medium text-2xl flex justify-between items-center'
>{currstate}
{isdatasubmited &&( 
<img onClick={()=>setdatasubmited(false)}
 src={assets.chaticon} alt="" className='w-5 cursor-pointer' />

)}
</h2>
{currstate === "signup" && !isdatasubmited && (<input onChange={(e)=>{setfullname(e.target.value)  } } value={fullname}
 type="text " className='p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500' placeholder='Full Name'
required />)}
{
  !isdatasubmited &&(
    <>
    <input onChange={(e)=>{setemail(e.target.value)  } } value={email}
     type="email " className='p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500' placeholder='Email Address'
required />
    <input onChange={(e)=>{setpassword(e.target.value)  } } value={password}
     type="password" className='p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'  placeholder='Password'
required />
    </>
  )
}
{
  currstate === "signup" && isdatasubmited && (
    <>
    <textarea onChange={(e)=>{setbio(e.target.value)  } } value={bio} 
    rows={4}
      className='p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'  placeholder='Provide Bio'
required > </textarea>
    </>
  )
}
<button type="submit" className='py-3 bg-gradient-to-r from-purple-400 to-violet-500 text-white rounded-md cursor-pointer'>
  {
    currstate === "signup" ? "Create Account" : "Login Now"
  }
</button>
<div className='flex items-center gap-2 text-sm text-gray-700'>
  <input type="checkbox" />
  <p>Agree to the term of use & Privacy Policy.</p>
</div>
<div className='flex flex-col gap-2'>
{
  currstate ==="signup" ? (<p className='text-sm text-gray-800'>
    Already have an Account?<span onClick={()=>{setcurrstate("login"); setdatasubmited(false)}} className='font-medium text-violet-500 cursor-pointer'>Login Here</span>
  </p>) 
  :(<p className='text-sm text-gray-800'>Don't have an Account <span onClick={()=>{setcurrstate("signup"); }} className='font-medium text-violet-500 cursor-pointer'>Sign up</span></p>)
}
</div>
</form>
    </div>
    
  )
}

export default Loginpg
