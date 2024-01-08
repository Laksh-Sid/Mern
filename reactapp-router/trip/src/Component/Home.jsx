import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import './Home.css'; 
const Home= () =>{
    return(
        <div className="Home">
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
            <div className="container1">
                <div className="mainflex">
                    <div className="fl1">Audio Guide</div>
                    <div className="fl2">Program</div>
                    <div className="fl3">Select Guide</div>
                    
                </div>
            </div>
        </div>
        
    );
}
export default Home;