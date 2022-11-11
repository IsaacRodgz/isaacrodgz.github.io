import React, { useState, useEffect } from 'react'
import { Link, useLocation } from "react-router-dom"
import "../styles/Navbar.css"
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {
    const [expandNavbar, setExpandNavbar] = useState(false)
    const location = useLocation()

    useEffect(() => {
        setExpandNavbar(false)
    }, [location])
    

    return (
        <div className='navbar' id={expandNavbar ? "open": "close"}>
            <div className='toggleButton'>
                <button onClick={() => {
                    setExpandNavbar((prev) => !prev) 
                }}>
                    <ReorderIcon />
                </button>
            </div>

            <div className='links'>
                <Link className='link' to="/"> Home </Link>
                <Link className='link' to="/experience"> Experience </Link>
                <Link className='link' to="/projects "> Projects </Link>
            </div>
        </div>
    )
}

export default Navbar