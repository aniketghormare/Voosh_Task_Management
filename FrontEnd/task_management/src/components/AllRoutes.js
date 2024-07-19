import React from 'react'
import { Routes, Route } from "react-router-dom"
import Login from '../pages/Login'
import Signup from '../pages/Signup'

import Dashboard from '../pages/Dashboard'
const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
        </Routes>
    )
}

export default AllRoutes
