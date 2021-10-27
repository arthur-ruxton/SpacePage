import React from 'react'

const NumberOfPeople = (props) => {
    const numOfPeople = props.people.length

    return (
        <div>
            <h2 className="ppl-in-space-title">People in Space right now: {numOfPeople}</h2>
        </div>
    )
}

export default NumberOfPeople
