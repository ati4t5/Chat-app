import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepg from './Pages/Homepg'
import Loginpg from './Pages/Loginpg'
import Profilepg from './Pages/Profilepg'

const App = () => {
  return (
    <div className='bg-[url("./src/assets/bg.jpg")] '>
      <Routes>
        <Route path='/' element= {<Homepg/>}/>
        <Route path='/login' element= {<Loginpg/>}/>
        <Route path='/profile' element= {<Profilepg/>}/>
      </Routes>
    </div>
  )
}

export default App
