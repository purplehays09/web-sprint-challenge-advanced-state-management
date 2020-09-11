import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchSmurfs} from "../actions"
import axios from 'axios'
import Smurf from './Smurf'


function SmurfList(props){

    useEffect(() => {
        axios.get('http://localhost:3333/smurfs')
        .then(res => {
            console.log("THIS IS THE AXIOS SUCCESS ===> ",res.data)
            props.dispatch(fetchSmurfs(res.data))

        })
        .catch(err => console.log("THIS IS THE AXIOS ERROR ===> ",err))
    },[])
    return(
        <div>
            <h2>SmurfList Level</h2>

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

export default connect(mapStateToProps)(SmurfList);