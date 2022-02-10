import React from 'react'

const Header = () => {
	return (
		<header>
			<div className="header-div">
				<span className='logo'>AN</span>
				<div className="menu-toggle">
					<div className="line"></div>
					<div className="line"></div>
					<div className="line"></div>
				</div>

				<ul className="nav-links">
					<li className='nav-link'><a href="#home">Home</a></li>
					<li className='nav-link'><a href="#home">About Me</a></li>
					<li className='nav-link'><a href="#home">Portfolio</a></li>
					<li className='nav-link rounded-pill'><a href="#home">Contact Me</a></li>
				</ul>
			</div>
		</header>
	)
}

export default Header