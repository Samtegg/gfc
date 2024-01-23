import React from 'react'
import Logo from '../../assets/logo.png'
import './Userdetails.css'

const Userdetails = () => {
  return (
    <div className='userdetails-container'>
        
        <div className='userdetails-cover'>
            <div className='userdetails-logo'>
                <img src={Logo} alt='' />
            </div>
            <div className='userdetails-content'>
                <h3>Charles Ayo</h3>
                <div className='userdetails-line'></div>
                <div className='userdetails-info'>
                    <p>Account name</p>
                    <p>Stephen Ben</p>
                </div>
                <div className='userdetails-info'>
                    <p>Account number</p>
                    <p>070000365478</p>
                </div>
                <div className='userdetails-info'>
                    <p>Bank</p>
                    <p>First Bank</p>
                </div>
                <div className='userdetails-info'>
                    <p>Email</p>
                    <p>yiifor@gmail.com</p>
                </div>
                <div className='userdetails-info'>
                    <p>Phone Number</p>
                    <p>0816573652442</p>
                </div>
            </div>
        </div>
        <div className='userdetails-instruction'>
            <p>ALERT THE RECEIVER</p>
            <p className='instruction-call'>Please call the user before you make payment</p> 
        </div>
        <button className='userdetails-button'>I HAVE MADE PAYMENT</button>
    </div>
  )
}

export default Userdetails