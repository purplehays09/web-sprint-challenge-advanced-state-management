import {FETCH_SMURF,POST_SMURF} from '../actions'

const initialState = {
    smurfsArray:[]
}

export function reducer(state = initialState,action){
    switch(action.type){

        case FETCH_SMURF:
            return{
                ...state,
                smurfsArray:action.payload
            }

        default:
            return state
    }
}