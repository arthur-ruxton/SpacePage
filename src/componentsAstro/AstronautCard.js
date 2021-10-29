import React from 'react'

const wikiUrl = 'https://en.wikipedia.org/wiki/'
const googUrl = 'http://images.google.com/images?q='

const AstronautCard = ({name, craft}) => {
    return (
        <div className="card">
          
            <p>{name}</p>
            <p className="middleP">Craft: {craft}</p>  
            <div className="astrolinks">
            <a href={wikiUrl + name} >
            <p>Info</p>
            </a>
            <a href={googUrl+ name} >
            <p>Images</p>
           </a>
           </div>

        </div>
    )
}

export default AstronautCard


