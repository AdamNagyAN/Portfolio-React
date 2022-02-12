import React, { useState } from 'react'

const Header = () => {
	const [navActive, setNavActive] = useState(true)

	return (
		<header>
			<div className="header-div">
				<span className='logo'>AN</span>
				<div onClick={() => setNavActive(!navActive)} className={`menu-toggle ${navActive ? "open" : ""}`}>
					<div className="line1"></div>
					<div className="line2"></div>
					<div className="line3"></div>
				</div>

				<ul className={`nav-links ${navActive ? "active" : ""}`}>
					<li className='nav-link'><a href="#home">Home</a></li>
					<li className='nav-link'><a href="#about">About Me</a></li>
					<li className='nav-link'><a href="#portfolio">Portfolio</a></li>
					<li className='nav-link rounded-pill'><a href="#contact">Contact Me</a></li>
				</ul>
			</div>
		</header>
	)
}

export default Header