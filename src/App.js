import React from 'react'
import {Routes, Route} from 'react-router-dom'

import Home from './pages/home/Home'
import Login from './auth/Login'
import ProductDetail from './pages/home/ProductDetail'

function App() {
    return(
        <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />}/>
            <Route path="ProductDetail" element={<ProductDetail />}/>
        </Routes>
        </>
    )
}

export default App