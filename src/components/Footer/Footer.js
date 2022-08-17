import React from 'react'
import './footer.css'
import {FaLinkedinIn, FaTwitter, FaWhatsapp}from "react-icons/fa"
import {FaInstagram}from "react-icons/fa"

const Footer = () => {
  return (
   <footer>
   <div>
<div className="footer-icon"><FaLinkedinIn /> </div>
<div className="footer-icon2"><FaInstagram /> </div>
<div className="footer-icon3"><FaWhatsapp /> </div>
<div className="footer-icon4"><FaTwitter /> </div>

    </div>
    </footer>
  )
}

export default Footer