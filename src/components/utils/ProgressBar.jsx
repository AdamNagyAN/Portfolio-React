import React from 'react'

const ProgressBar = ({ title, process }) => {
    return (
        <div className="skill">
            <div>
                <h2>{title}</h2>
                <div className="progressbar">
                    <div className="progress" style={{ "width": `${process}` }}></div>
                </div>
            </div>
        </div>
    )
}

export default ProgressBar