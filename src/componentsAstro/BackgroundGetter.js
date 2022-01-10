import React from 'react'
import ReactPlayer from 'react-player'
import { useState, useEffect } from 'react'
import axios from 'axios'

const BackgroundGetter = () => {
    const [backgroundImage, setBackgroundImage] = useState('')

    useEffect(() => {
        const getApodFromNasa = async () => {
            try {
                const response = await axios.get('https://api.nasa.gov/planetary/apod?api_key=8LEJIKt1cOHsejXWrTVhhS8t1K8mezS8gJPCyrVT')
                setBackgroundImage(response.data.url)
                console.log(response.data.url)
            } catch (err) {
                console.log(err)
            }
        }
        getApodFromNasa()
    }, [])

    return ( 
      <div className='nasaPics'>
        <p>NASA image of the day: </p>
        <picture className='picOfTheDay'>   
          <img src={backgroundImage} alt=''/>
        </picture>
        <div className="picOfTheDay">
          <ReactPlayer
            url={backgroundImage}
            controls
            width={640}
            height={360}
          />
        </div>
      </div>
    )
}

export default BackgroundGetter
