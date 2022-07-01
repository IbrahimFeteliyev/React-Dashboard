import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Auth from '../pages/Auth'
import Dashboard from '../pages/Dashboard'
import Home from '../pages/Home'

const MyRouter = () => {
  return (
    <div>
        <Routes>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/auth' element={<Auth/>}/>
            <Route path="/" element={<Home/>}/>
        </Routes>
    </div>
  )
}

export default MyRouter