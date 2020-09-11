export const FETCH_SMURFS = 'FETCH_SMURF'
export const POST_SMURF = 'POST_SMURF'

export function fetchSmurfs(smurfsArray){
    return{
        type:FETCH_SMURFS,
        payload:smurfsArray
    }
}

export function postSmurf(newSmurf){
    return{
        type:POST_SMURF,
        payload:newSmurf
    }
}