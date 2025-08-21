import React, { useEffect, useRef } from 'react'
import assets, { imagedumydata, messagedummydata } from '../assets/assets'
import { formateMssageTime } from '../Libraries/utils';
const Chatcontainer = ({ selecteduser, setselecteduser }) => {
const scrollEnd=useRef()
useEffect(()=>{
  if(scrollEnd.current){
    scrollEnd.current.scrollIntoView({behavior:'smooth'})
  }
},[])
  return selecteduser ? (
    <div className=' h-full overflow-scroll scrollbar-hide   relative backdrop-blur-lg'>
      <div className='flex items-center  gap-3 py-3 mx-4 border-b border-stone-500 '>
        <img src={selecteduser ?.profilepic } alt="" className='w-[35px] aspect-[1/1] rounded-full ' />
        <p className='flex-1 text-lg text-white flex items-center gap-2'>{selecteduser.fullname}
          <span className='w-2 h-2 rounded-full bg-green-500'></span> </p>
        <img onClick={() => { setselecteduser(null) }} src={assets.chaticon} alt="" className='md:hidden  max-w-7' />
        <img src={assets.chaticon} alt="" className='max-md-hidden max-w-5' />
      </div>
      {/* chat area */}
      <div className='flex flex-col  h-[calc(100%-120px)] overflow-y-scroll scrollbar-hide p-3 pb-6'>
        {messagedummydata.map((msg, index) => (
          <div key={index} className={`flex items-end gap-2 justify-end ${msg.senderid !== '1' && 'flex-row-reverse'}`}>
            {msg.image ? (
              <img src={msg.image} alt="" className='max-w-[230px]  border border-gray-700  rounded-lg overflow-hidden mb-8' />
            ) :
              (
                <p className={`p-2 max-w-[200px] md:text-sm font-light rounded-lg mb-8 break-all bg-violet-500 text-white ${msg.senderid === '1' ? 'rounded-br-none' : 'rounded-bl-none'}`}>{msg.text}</p>
              )}
            <div className='text-center text-xs' >
              <img src={msg.senderid === '1' ? selecteduser.profilepic : assets.chaticon} alt="" className='w-7 aspect-square
  rounded-full' />
              <p className='text-gray-800'>{formateMssageTime(msg.createdat)}</p>
            </div>

          </div>
        ))}
        <div ref={scrollEnd}  ></div>
      </div>
      {/* bottomarea */}
      <div className='absolute bottom-0 left-0 right-0 flex items-center gap-3 p-3'>
        <div className='flex-1 flex items-center bg-gray-100/12 px-3 rounded-full '>
          <input type="text" placeholder='Send a message' className='flex-1 text-sm p-3 border-none rounded-lg outline-none text-white placeholder-gray-400'  />
          <input type="file" id='image' accept='image/png ,image/jpeg' hidden />
          <label htmlFor="image">
          <img src={assets.chaticon} alt="" className='w-5 mr-2 cursor-pointer' />

          </label>
        </div>
        <img src={assets.chaticon} className='w-7 cursor-pointer' alt="" />
      </div>
    </div>
  ) : (
    <div className='flex flex-col items-center justify-center gap-2 text-gray-500 bg-white max-md:hidden '>
      <img src={assets.chaticon} alt="" className='max-w-16' />
      <p className='text-lg text-black font-medium'>Chat Any Time-Any Where</p>
    </div>
  )
}

export default Chatcontainer
