import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
    return (
        <div className="container">
            <nav className="navbar">
                <div class="logo">
                    <div style={{ color: 'Black', fontSize: 27.11, fontFamily: 'Jost', fontWeight: '400', wordWrap: 'break-word', textdecoration: 'none' }}>Elite<b style={{ color: '#FB471F', fontSize: 40.67, fontFamily: 'Kanit', fontWeight: '600', wordWrap: 'break-word', textdecoration: 'none' }}>Trips</b></div>
                </div>
                <ul className="navlink">
                    <li className="nav1"><Link className="navlink" to='/Home'>Home</Link></li>
                    <li className="nav1"><Link className="navlink" to='/About'>About</Link></li>
                    <li className="nav1"><Link className="navlink" to='/Contact'>Contact</Link></li>
                </ul>
            </nav>
            <div className="center1">
                <p>Vienna Awaits: Unleash Your Wanderlust</p>
                <p> in Austria's Vibrant Capital!</p>
                <p className="center2">Indulge in Vienna's Allure: Explore Magnificent Architecture, Delightful Cafés, and Captivating History. Your Unforgettable Journey Starts Here!<br></br><br></br>
                    <button type="button" className="button1"><b>Check the Trip</b></button><br></br><br></br>
                    <br></br>
                

                </p>

            </div>
        </div>
    );
}
export default Navbar;