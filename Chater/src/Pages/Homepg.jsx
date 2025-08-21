import React, { useState } from 'react'
import Sidebar from '../Components/Sidebar'
import Chatcontainer from '../Components/Chatcontainer'
import Rightbar from '../Components/Rightbar'

const Homepg = () => {
    const [selecteduser,setselecteduser]=useState(false);
  return (
    <div className='border w-full h-screen sm:px-[15%] sm:py-[5%]'>
        <div className={`backdrop-blur-xl border-2 border-gray-500 rounded-2xl overflow-hidden h-[100%] grid grid-cols-1 relative
            ${selecteduser ?'md:grid-cols-[1fr_1.5fr_1fr] xl:grid_cols-[1fr-2fr_1fr] ':'md:grid-cols-2'}`}>
            <Sidebar selecteduser={selecteduser} setselecteduser={setselecteduser} />
            <Chatcontainer selecteduser={selecteduser} setselecteduser={setselecteduser}/>
            <Rightbar selecteduser={selecteduser} setselecteduser={setselecteduser}/>
        </div>
      
    </div>
  )
}

export default Homepg
