import React from 'react'
import {NavLink} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse , faUser , faEnvelope, faKitchenSet} from "@fortawesome/free-solid-svg-icons";
const SideBar = ({children}) => {
  return (
    <div className='container'>
        <div className='sidebar'>
            <NavLink to='/' className='link' activeclassName='active'>
                <div className='icon'><FontAwesomeIcon icon={faHouse}/></div>
                <div className='title'>Home</div>
            </NavLink>
            <NavLink to='/about' className='link' activeclassName='active'>
                <div className='icon'><FontAwesomeIcon icon={faUser}/></div>
                <div className='title'>About</div>
            </NavLink>
            <NavLink to='/skills' className='link' activeclassName='active'>
                <div className='icon'><FontAwesomeIcon icon={faKitchenSet}/></div>
                <div className='title'>Skills</div>
            </NavLink>
            <NavLink to='/contact' className='link' activeclassName='active'>
                <div className='icon'><FontAwesomeIcon icon={faEnvelope}/></div>
                <div className='title'>Contact</div>
            </NavLink>
        </div>
        <main>{children}</main>
    </div>
  )
}

export default SideBar