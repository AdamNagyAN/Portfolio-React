import React from 'react'
import Blessed from '../img/Blessed1.png'
const Portfolio = () => {
    return (
        <section id="portfolio">
            <div className="portfolio-container">
                <h1 className="section-title">Portfolio</h1>
                <div className="portfolio-items">
                    <div className="portfolio-item">
                        <img src={Blessed} alt="" />
                    </div>
                    <div className="portfolio-item">
                        <img src={Blessed} alt="" />
                    </div>
                    <div className="portfolio-item">
                        <img src={Blessed} alt="" />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Portfolio