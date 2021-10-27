import React from 'react'

const AstronautCard = ({name, craft}) => {
    return (
        <div className="card">
            <p>{name}</p>
            <p>Craft: {craft}</p>
        </div>
    )
}

export default AstronautCard