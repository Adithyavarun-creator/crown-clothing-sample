//for user signin and authentication purpose

import {UserActionTypes} from './user-types'

const INITIALSTATE={
    currentUser:null
}

const userReducer = (state=INITIALSTATE,action)=>{
    if(action.type === UserActionTypes.SET_CURRENT_USER){
        return{
            ...state,
            currentUser:action.payload
        }
    }


    
    return state
}


export default userReducer