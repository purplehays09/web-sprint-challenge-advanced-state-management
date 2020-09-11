import React from 'react'


function Form(props){


    return(
        <form>
            <h2>Add New Smurf</h2>
            <label>
                Name:
                <input 
                    type='text'
                    placeholder='Punchy'
                    name='name'
                    // value=''
                    // onChange=''
                />
            </label>
            <br/>
            <label>
                Age:
                <input 
                    type='text'
                    placeholder='354'
                    name='age'
                    // value=''
                    // onChange=''
                    />
            </label>
            <br/>
            <label>
                Height:
                <input 
                    type='text'
                    placeholder='between 2 and 6 cm'
                    name='height'
                    // value=''
                    // onChange=''
                />
            </label>
        </form>
    )
}

export default Form