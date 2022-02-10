import React from 'react'
import { motion } from 'framer-motion'
import { useScroll } from './Animation'

const ProgressBar = ({ title, process }) => {
    const [element, controls] = useScroll();
    return (
        <div className="skill" ref={element}>
            <div>
                <h2>{title}</h2>
                <div className="progressbar">
                    <motion.div className="progress" style={{ "width": `${process}` }} variants={{ hidden: { width: 0 }, show: { width: process } }} animate={controls} transition={{ delay: 0.2, type: "tween" }}></motion.div>
                </div>
            </div>
        </div>
    )
}

export default ProgressBar