import React from 'react'

function Smurf({name,age,height}){

    return(
        <div>
            <h3>{name}</h3>
            <p>Age: {age}</p>
            <p>Height: {height}</p>
        </div>
    )
}

export default Smurf