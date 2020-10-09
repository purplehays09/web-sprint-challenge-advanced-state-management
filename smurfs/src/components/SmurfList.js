import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchSmurf} from "../actions"
import axios from 'axios'
import Smurf from './Smurf'

function SmurfList(props){
    const [smurfs, setSmurfs] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3333/smurfs')
        .then(res => {
            setSmurfs(res.data)
            console.log("THIS IS THE AXIOS SUCCESS ===> ",res.data)
            props.dispatch(fetchSmurf(res.data))

        })
        .catch(err => console.log("THIS IS THE AXIOS ERROR ===> ",err))
    },[smurfs])

    return(
        <div>
            <h2>List of Smurfs</h2>

            {
                props.smurfsArray.map(smurf => {
                    return(
                        <Smurf
                            key={smurf.id}
                            name={smurf.name}
                            age={smurf.age}
                            height={smurf.height}
                        />
                    )
                })
            }
        </div>
    )
}

function mapStateToProps(state){
    return{
        smurfsArray:state.smurfsArray
    }
}

export default connect(mapStateToProps)(SmurfList)