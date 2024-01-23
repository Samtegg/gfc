import React from 'react'
import './Footers.css'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'

const Footers = () => {
  return (
    <div className='footer-container'>
        <div className='footer-content'>
            <div className='footer-logo'>
                <img src={Logo} alt='' />
            </div>
            <div className='footer-writeup'>
                <div className='footer-legal'>
                    <h4>Legal</h4>
                    <Link to='/'>Terms & Conditions</Link>
                </div>
                <div className='footer-product'>
                    <h4>Product</h4>
                    <ul className='nav-menu'>
                        <li className='nav-item'>
                            <a href='/'>How it works</a>
                        </li>
                        <li className='nav-item'>
                            <a href='/'>Activities</a>
                        </li>
                        <li className='nav-item'>
                            <a href='/'>About</a>
                        </li>
                        <li className='nav-item'>
                            <a href='/'>FAQ</a>
                        </li>
                    </ul>
                </div>
                <div className='footer-contact'>
                    <h4>Contact</h4>
                    <Link to='/'>Support Ticket</Link>
                </div>

            </div>
        </div>
        <div className='footer-text'>
            <p>© 2024 borderless. All rights reserved.</p>
        </div>
    </div>

  )
}

export default Footers