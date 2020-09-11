import React, {useState,useEffect} from 'react'
import {connect} from 'react-redux'
import {postSmurf} from '../actions'

const blankForm = {
    name:'',
    age:'',
    height:''
}

function Form(props){
    const [formValues, setFormValues] = useState(blankForm)

    // useEffect(() => {
    //     handleChanges
    // },[formValues])

    function handleChanges(event){
        // debugger
        console.log(event)
        const name = event.target.name
        const value = event.target.value

        setFormValues({
            ...formValues,
            [name]:value
        })
    }

    function handleSubmit(event){
        event.preventDefault()
        props.dispatch(postSmurf(formValues))
        
        setFormValues(blankForm)
    }

    return(
        <form onSubmit={handleSubmit}>
            <h2>Add New Smurf</h2>
            <label>
                Name:
                <input 
                    type='text'
                    placeholder='Punchy'
                    name='name'
                    value={formValues.name}
                    onChange={handleChanges}
                />
            </label>
            <br/>
            <label>
                Age:
                <input 
                    type='text'
                    placeholder='354'
                    name='age'
                    value={formValues.age}
                    onChange={handleChanges}
                    />
            </label>
            <br/>
            <label>
                Height:
                <input 
                    type='text'
                    placeholder='between 2 and 6 cm'
                    name='height'
                    value={formValues.height}
                    onChange={handleChanges}
                    />
            </label>
            <br/>
            <button>Submit</button>
        </form>
    )
}

function mapStateToProps(state){
    return{
        name:state.name,
        age:state.age,
        height:state.height
    }
}

export default connect(mapStateToProps)(Form)