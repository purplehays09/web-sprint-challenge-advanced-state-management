import React, {useState,useEffect} from 'react'
import {connect} from 'react-redux'
import {postSmurf} from '../actions'

const blankForm = {
    name:'',
    age:'',
    height:''
}

function Form (props){
    const [formValues, setFormValues] = useState(blankForm)

    const handleChanges = (e) => {
        const name = e.target.name
        const value = e.target.value

        setFormValues({
            ...formValues,
            [name]:value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.dispatch(postSmurf(formValues))
        
        setFormValues(blankForm)
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add another Smurf</h2>

            <label>
                Name:
                <input
                    type='text'
                    placeholder='Slappy'
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
                    placeholder='<500'
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
                    placeholder='<10cm'
                    name='height'
                    value={formValues.height}
                    onChange={handleChanges}
                />
            </label>

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