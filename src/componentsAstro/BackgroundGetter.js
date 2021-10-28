import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const BackgroundGetter = () => {
    const [backgroundImage, setBackgroundImage] = useState('')

    useEffect(() => {
        const getApodFromNasa = async () => {
            try {
                const response = await axios.get('https://api.nasa.gov/planetary/apod?api_key=8LEJIKt1cOHsejXWrTVhhS8t1K8mezS8gJPCyrVT')
                console.log('hello')
                setBackgroundImage(response.data.hdurl)
            } catch (err) {
                console.log(err)
            }
        }
        getApodFromNasa()
    }, [])

    return ( 
        <div className='nasaPics'>
            <p>NASA image of the day: </p>
         <picture>   
        <img src={backgroundImage} className='picOfTheDay'/>
       </picture>
        </div>
    )
}

export default BackgroundGetter
