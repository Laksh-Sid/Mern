import React from "react";
import { Link } from 'react-router-dom';
import "./Navbar.css";
const Navbar = ()=>{
return (
		<div className="container" >
			<div className="navbar">
				<div className="head">
					<div class="head1">
						<a href="#id1"><div style={{ color: 'white', fontSize: 27.11, fontFamily: 'Jost', fontWeight: '400', wordWrap: 'break-word' }}>Elite<b style={{ color: '#FB471F', fontSize: 40.67, fontFamily: 'Kanit', fontWeight: '600', wordWrap: 'break-word' }}>Trips</b></div></a>	

					</div>
				</div>
				<div className="link">
					<div className="link1">
						<a href="#" id="id1" >Home</a>
						<a href="#" id="id2">Search</a>
						<a href="#" id="id3">Blog</a>
						<div className="link3"> <button type="button">Contact Us</button></div>
	
					</div>
				</div>
			</div>
			<div className="center1">
				<p>Vienna Awaits: Unleash Your Wanderlust</p>
				<p> in Austria's Vibrant Capital!</p>
				<p  className="center2">Indulge in Vienna's Allure: Explore Magnificent Architecture, Delightful Cafés, and Captivating History. Your Unforgettable Journey Starts Here!<br></br><br></br>
				<button type="button" className="button1"><b>Check the Trip</b></button><br></br><br></br>
				
				<br></br><div className="flex1">
					<div className="innerfex">
						Audio Guide
					</div>
				</div></p>
				
			</div>
			
		</div>
	)
}
export default Navbar;
