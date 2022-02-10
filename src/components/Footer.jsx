import React from 'react'
import Github from '../icons/github.svg'
import Phone from '../icons/phone.svg'
import Mail from '../icons/mail.svg'

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <h2>Contact me</h2>
                <ul className="accounts">
                    <li onClick={() => window.open("https://github.com/AdamNagyAN", '_blank').focus()} style={{ "cursor": "pointer" }}><img src={Github} alt="GitHub" />AdamNagyAN</li>
                    <li><img src={Mail} alt="Mail" />raween2000@gmail.com</li>
                    <li><img src={Phone} alt="Phone" />+36 70 200 6916</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer