import React from 'react'
import WrapperImg from '../img/wrapper_img.svg'
const Wrapper = () => {
	return (
		<section id="home">
			<div className="wrapper">
				<div className="welcome"><h1>I am <span>Adam Nagy</span>.</h1><span>Front-end web developer</span></div>
				<div className="image">
					<img src={WrapperImg} alt="Wrapper" />
				</div>
			</div>
		</section>
	)
}

export default Wrapper