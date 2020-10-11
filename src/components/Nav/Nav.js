import React from "react";
import {Link} from 'react-router-dom';
import Logo from '../images/logo_transparent.png'

const Nav=()=> {
    const useStyle={
        navBar:{
            position: 'fixed'
        },
        white:{
            color:'#eeeeee',
            fontSize: '18px'
        },
        mint:{
            backgroundColor: '#00adb5',
        },
        gray:{
            color: '#393e46',
        },
        img:{
            width: '20px',
            height: '10px'
        }
        
    };
    return (
        <nav className="navbar navbar-expand-lg navbar-light static-top header-a fixed-top" style={useStyle.mint}>
            <div className="container nav-container">
                <div className="navbar-brand brand">
                    <Link to='/' style={useStyle.white}>dock.me</Link>
                </div>
                {/* <img src={Logo} style={useStyle.img}/> */}

                <div className="collapse navbar-collapse alink" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                            <Link to='/' style={useStyle.white}>Home</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to='/about-us' style={useStyle.white}>About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/faq' style={useStyle.white}>FAQ</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to='/contact-us' style={useStyle.white}>Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;