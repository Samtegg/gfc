import React from 'react'
import "./Forgotpassword.css"
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'

const Forgotpassword = () => {
  return (
    <div className='forgotpassword-container'>
    <div className='forgotpassword-heading'>
      <Link to='/' className='logo'>
        <img src={Logo} alt='logo' />
      </Link>
      <div className='forgotpassword-headingtext'>
        <h3>Fogot Password</h3>
      </div>
    </div>
    <div className='forgotpassword-content'>
      <div className='forgotpassword-box'>
        <div className='forgotpassword-codebox'>
          <input type='password' id='password' name='password' placeholder='Recovery code' aria-labelledby='password' required />
        </div>
        <div className='forgotpassword-text'>
          <p>Please input your recovery code to enable you get a new password</p>
        </div>
      </div>
    </div>
    <div className='forgotpassword-button'>
        <button>Continue</button>
    </div>
</div>
  )
}

export default Forgotpassword