import React from 'react'

import Man from '../img/Man_simple.svg'
import Book from '../icons/book.svg'
import BookOpen from '../icons/book_open.svg'
import Grid from '../icons/grid.svg'
import Play from '../icons/play.svg'
const About = () => {
    return (
        <section id="about">
            <div className="about-container">
                <h1 className='section-title'>About Me</h1>
                <div className="row">
                    <div className="image-container">
                        <img src={Man} alt="Man in suit" />
                    </div>
                    <ul>
                        <li><img src={Play} alt="Play" /> Born in Ukraine in 2003</li>
                        <li><img src={Book} alt="Play" /> Finished the elementary school 2021</li>
                        <li><img src={BookOpen} alt="Play" /> Studying Computer Science from 2021</li>
                        <li><img src={Grid} alt="Play" /> Hobbies: programming, working out</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default About