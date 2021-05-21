import React, { useEffect, useState } from 'react'
import './NavBar.scss'

const NavBar = () => {
    const [show, handleShow] = useState(false)

    const transitionNavBar = () => {
        if (
            window.scrollY > 100
        ) {
            handleShow(true)
        } else {
            handleShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', transitionNavBar)
        return () => window.addEventListener('scroll', transitionNavBar)
    }, [])



    return (
        <div className={`nav container ${show && `nav-black`}`}>
            <div className="nav-content-wrapper">
                <div className='nav-logo'>
                    <img src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="" />
                </div>
                <div className='nav-profileicon'>
                    <img src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="" />
                </div>
            </div>
            





        </div>
    )
}

export default NavBar
