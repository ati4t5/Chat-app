import React from 'react'
import assets, { userdummydata } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Sidebar = ({ selecteduser, setselecteduser }) => {
  const Navigate = useNavigate();
  return (
    <div className={`bg-[#8185b2]/10 h-full p-5 rounded-r-xl overflow-y-scroll scrollbar-hide text-white ${selecteduser ? 'max-md:hidden' : ''} `}>
      <div className='pb-5'>
        <div className='flex  justify-between items-center'>
          <img src={assets.chaticon} alt="logo" className='max-w-10' />
          <div className='relative py-2 group'>
            <img src={assets.dots} alt="Menu" className='max-h-5 cursor-pointer' />
            <div className='absolute top-full right-0 z-20 w-32 p-5 rounded-md bg-[#282142] border border-gray-500 text-gray-100 hidden group-hover:block'>
              <p onClick={() => { Navigate('/profilepg') }} className='cursor-pointer text-sm'>Edit Profile</p>
              <hr className='my-2 border-t border-gray-500' />
              <p className='cursor-pointer text-sm'>Logout</p>
            </div>
          </div>
        </div>
        <div className='bg-[#9080ca] rounded-full flex items-center gap-3 py-3 px-4 mt-5' >
          <img src={assets.search} alt="search" className='w-4' />
          <input type="text" className='bg-transparent border-none outline-none text-white text-xs placeholder:-[#c8c8c8] flex-1
       ' placeholder='Search User' />
        </div>
      </div >
<div className='flex flex-col'>
  {userdummydata.map((user,index)=>(
<div onClick={()=>{setselecteduser(user)}}
  key={index} className={`relative flex items-center gap-2 p-2 pl-4 rounded cursor-pointer max-sm:text-sm ${selecteduser?._id === user._id && 'bg-amber-50'}`}>
    <img src={user?.profilepic} alt="" className='w-[35px] aspect-[1/1] rounded-full' />
    <div className=' flex flex-col leading-5'>
      <p>{user.fullname}</p>
      {
        index < 3
        ? <span className='text-green-400 text-xs'>Online</span>
        : <span className='text-neutral-400 text-xs'>Offline</span>
       
      }
    </div>
    {
      index > 2 && <p className='absolute top-4 right-4 text-xs h-5 w-5
       flex justify-center items-center rounded-full bg-violet-500/50' >{index}</p>
    }

  </div>
  ))}
</div>
    </div>
  )
}

export default Sidebar
