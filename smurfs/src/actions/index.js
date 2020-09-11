export const FETCH_SMURFS = 'FETCH_SMURF'
export const POST_SMURF = 'POST_SMURF'

export function fetchSmurfs(smurfsArray){
    return{
        type:FETCH_SMURFS,
        payload:smurfsArray
    }
}