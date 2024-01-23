import React from 'react'
import Logo from '../../../assets/logo.png'
import '../Profileupdate.css'

const Changepassword = () => {
  return (
    <div className='profileupdate-container'>
        <div className='profileupdate-navbar'>
            <img src={Logo} alt=''/>
            <h2>Change Password</h2>
        </div>
        <div className='profileupdate-content'>
            <div className='profileupdate-info'>
                <div className='profileupdate-input' >
                    <div className='profileupdate-detail' style={{ marginBottom:'1rem'}}>
                        <label htmlFor='username'>New Password</label>
                    </div>
                    <input type='text' id='username' name='username' placeholder='' aria-labelledby='username'required/>
                    <div className='profileupdate-detail' style={{marginTop:'2rem', marginBottom:'1rem'}}>
                        <label htmlFor='username'>Confirm Password</label>
                    </div>
                    <input type='text' id='username' name='username' placeholder='' aria-labelledby='username'required/>
                </div>
                


                
                
                
            </div>
            <div className='profileupdate-button'>
            <button>
                <p>Save</p>
            </button>
        </div>

        </div>
    </div>
  )
}

export default Changepassword