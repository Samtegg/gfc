import React from 'react'
import './Signin.css'
import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

const Signin = () => {
  return (
    <div className='signin-container'>
          <div className='signin-heading'>
            <Link to='/signin' className='logo'>
              <img src={Logo} alt='logo' />
            </Link>
            <div className='signin-create'>
              <h3>Login & Sign in</h3>
            </div>
          </div>
          <div className='signin-content'>
            <div className='signin-account'>
              <h2>Already have an account?<Link to='/signin' className='signin'>login</Link></h2>
            </div>
            <form className='signin-form'>
              <div className='signin-toplabel'>
                <div className='signin-label'>
                  <label htmlFor='username'>Username</label>
                  <input type='text' id='username' name='username' placeholder='Username' aria-labelledby='username'required/>
                </div>
              </div>
              <div className='signin-toplabel'>
                <div className='signin-label'>
                  <label htmlFor='password'>Password</label>
                  <input type='password' id='password' name='password' placeholder='Enter your password' aria-labelledby='password' required/>
                </div>
              </div>
              <div className='signin-button'>
                <button>Login</button>
              </div>
            </form>
            <div className='signin-agreement'>
              <p>Forgot password?</p>
            </div>
          </div>
        </div>
  )
}

export default Signin