import React from 'react'

const baseUrl = 'https://en.wikipedia.org/wiki/'

const AstronautCard = ({name, craft}) => {
    return (
        <div className="card">
            <a href={baseUrl + name} >
            <p>{name}</p>
            <p>Craft: {craft}</p>
           </a>
        </div>
    )
}

export default AstronautCard