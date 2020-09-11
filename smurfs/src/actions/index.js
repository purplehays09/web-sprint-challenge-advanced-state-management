export const FETCH_SMURF = 'FETCH_SMURF'
export const POST_SMURF = 'POST_SMURF'

export function fetchSmurf(smurfs){
    return{
        type:FETCH_SMURF,
        payload:smurfs
    }
}