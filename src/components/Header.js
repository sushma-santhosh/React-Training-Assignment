import React from 'react'
import { MY_STORE_NAME, NAV_HOME, NAV_STORE, NAV_CONTACT_US, STORE_LOGO } from '../utils/constants'
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
                    <li>{NAV_HOME}</li>
                    <li>{NAV_STORE}</li>
                    <li>{NAV_CONTACT_US}</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header