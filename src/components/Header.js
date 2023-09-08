import React from 'react'
import { MY_STORE_NAME, NAV_HOME, NAV_STORE, NAV_ABOUT_US,NAV_FEEDBACK, STORE_LOGO } from '../utils/constants'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header-container'>
        <div className='header-logo'>
            <img className='logo' src={STORE_LOGO}></img>
            <div className='store-log' style={{ color: "#b7008d", padding: "5px", marginLeft: "5px" }}>{MY_STORE_NAME}</div>
        </div>
        <div className='nav-container'>
            <div className='nav-list'>
                <ul>
                    <li><Link to="/">{NAV_HOME}</Link></li>
                    <li><Link to="StarEssentials">{NAV_STORE}</Link></li>
                    <li><Link to="AboutUs">{NAV_ABOUT_US}</Link></li>
                    <li><Link to="Feedback">{NAV_FEEDBACK}</Link></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header