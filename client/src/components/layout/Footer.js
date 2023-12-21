import React from "react";
import {Link} from 'react-router-dom';

const Footer = ()=>{
    return(
        <>
            <div className="footer">
                <div className="bg-dark p-3 text-center text-white">
                    <h4>All Right Reserved &copy; ATS GLobal</h4>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/policy">Privacy policy</Link>
                </div>
            </div>
        </>
    )
}

export default Footer;
