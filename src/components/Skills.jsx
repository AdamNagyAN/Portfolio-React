import React from 'react'
import ProgressBar from './utils/ProgressBar'
import { skillList } from '../data/skills'

const Skills = () => {
    return (
        <section>
            <div className="skills-container">
                <h1 className='section-title'>Skills</h1>
                <div className="skillset">
                    {skillList.map(skill => <ProgressBar key={skill.title} {...skill} />)}
                </div>
            </div>
        </section>
    )
}

export default Skills