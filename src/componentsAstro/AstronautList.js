import React from 'react'
import axios from 'axios'
import AstronautCard from './AstronautCard'
import NumOfPeople from './NumOfPeople'

import { useState, useEffect } from 'react' 

const AstronautList = () => {
    const [people, setPeople] = useState([])

    useEffect(() => {
        const getPeopleFromApi = async () => {
            try {
                const response = await axios.get(process.env.ASTRONAUTS_KEY)
                console.log(response)
                setPeople(response.data.people)
            } catch (err) { 
                console.log(err)
            }
        }
        getPeopleFromApi()
    }, [])

    return (
        <div className='total-astro-div'>
            <NumOfPeople people={people}/>
            <div className='astronaut-list-div'>
            {people.map((person) => (
                <AstronautCard {...person}/>
            ))}
            </div>
        </div>
    )
    
}

export default AstronautList
