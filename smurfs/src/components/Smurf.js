import React from 'react'


function Smurf({name,age,height}){

    return(
        <div>
            <h3>Smurf Level</h3>

            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Height: {height}</p>


        </div>
    )
}

export default Smurf