import React,{useState,useEffect, forwardRef} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useRef } from 'react';
function Navbar({Home,AboutMe,Skills,Personal,Contact}){
    return (
        <div className='nav-container'>
        <nav className='navbar'>
                    <div className='nav-item'>
                        <Link className='link' onClick={()=>AboutMe.current.scrollIntoView({behavior:"smooth"})} >
                        Konstantinos Varnalidis.
                        </Link>
                    </div>
                    <div className='nav-item'>
                        <Link className='link' onClick={()=>AboutMe.current.scrollIntoView({behavior:"smooth"})} >
                        About Me.
                        </Link>
                    </div>
                    <div className='nav-item'>
                        <Link className='link' onClick={()=>AboutMe.current.scrollIntoView({behavior:"smooth"})} >
                        Projects.
                        </Link>
                    </div>
                    <div className='nav-item'>
                        <Link className='link' onClick={()=>Contact.current.scrollIntoView({behavior:"smooth"})} >
                        Contact Me.
                        </Link>
                    </div>
        </nav>
        </div>
)
}

export default Navbar