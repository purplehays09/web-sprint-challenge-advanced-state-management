export const FETCH_SMURF = 'FETCH_SMURF'
export const POST_SMURF = 'POST_SMURF'

export function fetchSmurf(smurfsArray){
    return{
        type:FETCH_SMURF,
        payload:smurfsArray
    }
}

export function postSmurf(newSmurf){
    return{
        type:POST_SMURF,
        payload:newSmurf
    }
}