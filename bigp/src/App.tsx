import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './example/Login'
import Products from './example/Product'
import ContactUs from './example/Contact'
import Home from './example/Home'

export default function App() {
  return (
    <div>

<BrowserRouter>
<Routes>
<Route path ="/" element={<Login />} />
<Route path ="/home" element={<Home />} />
<Route path ="/prd" element={<Products />} />
<Route path ="/cont" element={<ContactUs />} />

</Routes>


</BrowserRouter>






    </div>
  )
}