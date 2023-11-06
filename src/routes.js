import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Users from './pages/users'

function MyRoutes() {
    
    return(
        <Router> 
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/usuarios" element={<Users />} />
                <Route 
                    path="/"
                    />
            </Routes>
        </Router>
    )
}

export default MyRoutes