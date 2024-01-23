import React from 'react'
import Logo from '../../assets/logo.png'
import './Profileupdate.css'


const Profileupdate = () => {
  return (
    <div className='profileupdate-container'>
        <div className='profileupdate-navbar'>
            <img src={Logo} alt=''/>
            <h2>Profile Update</h2>
        </div>
        <div className='profileupdate-content'>
            <h3>Your Profile Information</h3>
            <div className='profileupdate-info'>
                <h4>Personal Information</h4>
                <div className='profileupdate-input' >
                    <div className='profileupdate-detail'>
                        <label htmlFor='username'>Username</label>
                        <div className='detail-content'>
                            <p>Charlse Ayo</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 28 28" fill="none">
                                <path d="M5.5 7H4C3.20435 7 2.44129 7.31607 1.87868 7.87868C1.31607 8.44129 1 9.20435 1 10V23.5C1 24.2956 1.31607 25.0587 1.87868 25.6213C2.44129 26.1839 3.20435 26.5 4 26.5H17.5C18.2956 26.5 19.0587 26.1839 19.6213 25.6213C20.1839 25.0587 20.5 24.2956 20.5 23.5V22" stroke="#5C5C5C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M19 4.00016L23.5 8.50016M25.5775 6.37766C26.1683 5.78689 26.5002 4.98564 26.5002 4.15016C26.5002 3.31469 26.1683 2.51343 25.5775 1.92266C24.9867 1.33189 24.1855 1 23.35 1C22.5145 1 21.7133 1.33189 21.1225 1.92266L8.5 14.5002V19.0002H13L25.5775 6.37766Z" stroke="#5C5C5C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                    <input type='text' id='username' name='username' placeholder='Username' aria-labelledby='username'required/>
                </div>
                <div className='profileupdate-input' >
                    <div className='profileupdate-detail'>
                        <label htmlFor='username'>Phone number</label>
                        <div className='detail-content'>
                            <p>08032384934</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 28 28" fill="none">
                                <path d="M5.5 7H4C3.20435 7 2.44129 7.31607 1.87868 7.87868C1.31607 8.44129 1 9.20435 1 10V23.5C1 24.2956 1.31607 25.0587 1.87868 25.6213C2.44129 26.1839 3.20435 26.5 4 26.5H17.5C18.2956 26.5 19.0587 26.1839 19.6213 25.6213C20.1839 25.0587 20.5 24.2956 20.5 23.5V22" stroke="#5C5C5C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M19 4.00016L23.5 8.50016M25.5775 6.37766C26.1683 5.78689 26.5002 4.98564 26.5002 4.15016C26.5002 3.31469 26.1683 2.51343 25.5775 1.92266C24.9867 1.33189 24.1855 1 23.35 1C22.5145 1 21.7133 1.33189 21.1225 1.92266L8.5 14.5002V19.0002H13L25.5775 6.37766Z" stroke="#5C5C5C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                    <input type='text' id='username' name='username' placeholder='Phone number' aria-labelledby='username'required/>
                </div>
                <div className='profileupdate-input' >
                    <div className='profileupdate-detail'>
                        <label htmlFor='username'>Email</label>
                        <div className='detail-content'>
                            <p>gfc@gmail.com</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 28 28" fill="none">
                                <path d="M5.5 7H4C3.20435 7 2.44129 7.31607 1.87868 7.87868C1.31607 8.44129 1 9.20435 1 10V23.5C1 24.2956 1.31607 25.0587 1.87868 25.6213C2.44129 26.1839 3.20435 26.5 4 26.5H17.5C18.2956 26.5 19.0587 26.1839 19.6213 25.6213C20.1839 25.0587 20.5 24.2956 20.5 23.5V22" stroke="#5C5C5C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M19 4.00016L23.5 8.50016M25.5775 6.37766C26.1683 5.78689 26.5002 4.98564 26.5002 4.15016C26.5002 3.31469 26.1683 2.51343 25.5775 1.92266C24.9867 1.33189 24.1855 1 23.35 1C22.5145 1 21.7133 1.33189 21.1225 1.92266L8.5 14.5002V19.0002H13L25.5775 6.37766Z" stroke="#5C5C5C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                    <input type='text' id='username' name='username' placeholder='Email' aria-labelledby='username'required/>
                </div>
                
                
                
            </div>
            <div className='profileupdate-info'>
                <h4>Security</h4>
                <div className='profileupdate-input' >
                    <div className='profileupdate-detail'>
                        <p>Change Password</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 16 28" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.23535 28L0 25.7264L11.5293 14L0 2.27357L2.23535 0L16 14L2.23535 28Z" fill="#5C5C5C"/>
                        </svg>
                    </div>
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

export default Profileupdate