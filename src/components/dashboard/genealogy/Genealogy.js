import React from 'react'
import './Genealogy.css'
import Logo from "../../assets/logo.png"
import { Link } from 'react-router-dom'

const Genealogy = () => {
  return (
    <div className='genealogy-container'>
        <div className='genealogy-heading'>
            <img src={Logo} alt='logo' />
            <h2>GLOBAL FUNDING CLUB GENEALOGY </h2>
        </div>
        <div className='genealogy-content'>
            <div className='genealogy-contentlist'>
                <div className='genealogy-searchbox'>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="31" viewBox="0 0 30 31" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.75 25.834C19.9632 25.834 25 20.6293 25 14.209C25 7.78867 19.9632 2.58398 13.75 2.58398C7.5368 2.58398 2.5 7.78867 2.5 14.209C2.5 20.6293 7.5368 25.834 13.75 25.834Z" stroke="#5C5C5C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M27.5 28.4167L22.5 23.25" stroke="#5C5C5C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <p>Search</p>
                    </div>
                </div>
                <div className='genealogy-line'></div>
                <div className='genealogy-count'>
                     <p>Members count: 315,000</p>
                </div>
               
                
                <div className='genealogy-details'>
                    <div>
                        <p className='genealogy-name'>Charles Ayo</p>
                        <p className='genealogy-date'>Created: 24/11/2023</p>
                    </div>
                    <Link to="/dashboard/makepayment/userdetails" className='genealogy-checkinfo'>Check info</Link>
                </div>
                 
                <div className='genealogy-details'>
                    <div>
                        <p className='genealogy-name'>Charles Ayo</p>
                        <p className='genealogy-date'>Created: 24/11/2023</p>
                    </div>
                    <Link to="/dashboard/makepayment/userdetails" className='genealogy-checkinfo'>Check info</Link>
                </div>
                 
                <div className='genealogy-details'>
                    <div>
                        <p className='genealogy-name'>Charles Ayo</p>
                        <p className='genealogy-date'>Created: 24/11/2023</p>
                    </div>
                    <Link to="/dashboard/makepayment/userdetails" className='genealogy-checkinfo'>Check info</Link>
                </div>
                 
                <div className='genealogy-details'>
                    <div>
                        <p className='genealogy-name'>Charles Ayo</p>
                        <p className='genealogy-date'>Created: 24/11/2023</p>
                    </div>
                    <Link to="/dashboard/makepayment/userdetails" className='genealogy-checkinfo'>Check info</Link>
                </div>
               
            </div>
        </div>
    </div>
  )
}

export default Genealogy