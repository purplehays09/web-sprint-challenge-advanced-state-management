import {FETCH_SMURF,POST_SMURF} from '../actions'
import axios from 'axios'

const initialState = {
    smurfsArray:[]
}

export function reducer(state=initialState,action){
    switch(action.type){
        case FETCH_SMURF:
            return{
                ...state,
                smurfsArray:action.payload
            }
        
        case POST_SMURF:
            axios.post('http://localhost:3333/smurfs',action.payload)
            .then(res => {
                console.log("THIS IS THE AXIOS POST SUCCESS ===> ", res)
                
            })
            .catch(err => {
                console.log("THIS IS THE AXIOS POST FAILURE ===> ",err)
            })

        default:
            return state

    }
}