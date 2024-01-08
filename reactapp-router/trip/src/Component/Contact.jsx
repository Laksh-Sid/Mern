import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import './Contact.css'; 
const Contact= () =>{
    return(
        <div className="Container3">
            <div className="Contact">
            <nav className="navbar">
                <div class="logo">
                    <div style={{ color: 'Black', fontSize: 27.11, fontFamily: 'Jost', fontWeight: '400', wordWrap: 'break-word', textdecoration: 'none' }}>Elite<b style={{ color: '#FB471F', fontSize: 40.67, fontFamily: 'Kanit', fontWeight: '600', wordWrap: 'break-word', textdecoration: 'none' }}>Trips</b></div>
                </div>
                <ul className="navlink">
                    {/* <li className="nav1"><Link className="navlink" to='/Home'>Home</Link></li> */}
                    <li className="nav1"><Link className="navlink" to='/About'>About</Link></li>
                    <li className="nav1"><Link className="navlink" to='/Contact'>Contact</Link></li>
                </ul>
            </nav>
            <div className="flex3">
                <h1>hi</h1>
            </div>
            </div>
        </div>
    )
}