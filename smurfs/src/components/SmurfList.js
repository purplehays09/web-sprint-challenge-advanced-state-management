import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchSmurfs} from "../actions"
import axios from 'axios'
import Smurf from './Smurf'

function SmurfList(props){
    const [smurfs, setSmurfs] = useState([])

    useEffect(() => {
        xios.get('http://localhost:3333/smurfs')
        .then(res => {
            setSmurfs(res.data)
            console.log("THIS IS THE AXIOS SUCCESS ===> ",res.data)
            props.dispatch(fetchSmurfs(res.data))

        })
        .catch(err => console.log("THIS IS THE AXIOS ERROR ===> ",err))
    },[smurfs])

    return(
        <div>
            <h2>List of Smurfs</h2>

            {
                props.smurfArray
            }
        </div>
    )
}