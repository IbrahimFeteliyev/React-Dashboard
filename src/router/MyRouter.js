import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CreateProduct from '../components/Product/CreateProduct'
import Product from '../components/Product/Product'
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
            <Route path="/product" element={<Product/>}/>
            <Route path="/product/create" element={<CreateProduct/>}/>
        </Routes>
    </div>
  )
}

export default MyRouter