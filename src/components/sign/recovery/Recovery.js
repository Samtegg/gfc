import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import './Recovery.css'

const Recovery = () => {
  return (
<div className='recovery-container'>
          <div className='recovery-heading'>
            <Link to='/' className='logo'>
              <img src={Logo} alt='logo' />
            </Link>
            <div className='recovery-headingtext'>
              <h3>Recovery Code</h3>
            </div>
          </div>
          <div className='recovery-content'>
            <div className='recovery-box'>
              <div className='recovery-codebox'>
                <p>684038</p>
              </div>
              <div className='recovery-text'>
                <p>This is your recovery code for when you forget your password and for other important activities. do well to write it out so you won’t forget it </p>
              </div>
            </div>
          </div>
          <div className='recovery-button'>
              <button>Continue</button>
          </div>
  </div>
  )
}

export default Recovery