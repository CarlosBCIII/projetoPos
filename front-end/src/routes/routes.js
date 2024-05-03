import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from '../pages/home/home'
import Login from '../pages/login/login'
function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Login/>} />
                <Route path="/home" element={<Home/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas