import React from 'react'
import './Signup.css'
import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
        <div className='signup-container'>
          <div className='signup-heading'>
            <Link to='/signup' className='logo'>
              <img src={Logo} alt='logo' />
            </Link>
            <div className='signup-create'>
              <h3>Create an account & Sign up</h3>
            </div>
          </div>
          <div className='signup-content'>
            <div className='signup-account'>
              <h2>Already have an account?<Link to='/signin' className='signin'>login</Link></h2>
            </div>
            <form className='signup-form'>
              <div className='signup-toplabel'>
                <div className='signup-label'>
                  <label htmlFor='first-name'>First Name</label>
                  <input type='text' id='first-name' name='first-name' placeholder='First Name' aria-labelledby='first-name' required/>
                </div>
                <div className='signup-label'>
                  <label htmlFor='last-name'>Last Name</label>
                  <input type='text' id='last-name' name='last-name' placeholder='Last Name' aria-labelledby='last-name' required/>
                </div>
              </div>
              <div className='signup-toplabel'>
                <div className='signup-label'>
                  <label htmlFor='username'>Username</label>
                  <input type='text' id='username' name='username' placeholder='Username' aria-labelledby='username'required/>
                </div>
                <div className='signup-label'>
                  <label htmlFor='phone-number'>Phone Number</label>
                  <input type='tel' id='phone-number' name='phone-number' placeholder='Enter your phone-number' aria-labelledby='phone-number' required/>
                </div>
              </div>
              <div className='signup-toplabel'>
                <div className='signup-label'>
                  <label htmlFor='password'>Password</label>
                  <input type='password' id='password' name='password' placeholder='Enter your Password' aria-labelledby='password' required/>
                </div>
                <div className='signup-label'>
                  <label htmlFor='confirm-password'>Confirm Password</label>
                  <input type='password' id='password' name='confirm-password' placeholder='Confirm Password' aria-labelledby='confirm-password' required/>
                </div>
              </div>
              <div className='signup-button'>
                <button>Create Account</button>
              </div>
            </form>
            <div className='signup-agreement'>
              <p>By clicking “Create Account” , I agree with the <Link to='/signin' className='signin'>terms & conditions</Link> of Global Funding Club and its services </p>
            </div>
          </div>
        </div>
  )
}

export default Signup