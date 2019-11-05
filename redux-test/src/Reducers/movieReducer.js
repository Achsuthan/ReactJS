export default function(state= {}, action){
    switch(action.type){
        case  'MOVIES_LIST':
            return {...state, movies: action.paylod}
        default:
            return state
    }
}