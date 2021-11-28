//for user signin and authentication purpose

import UserActionTypes from "./user-types"

const INITIALSTATE={
    currentUser:null,
    error:null
}

const userReducer = (state=INITIALSTATE,action)=>{
    if(action.type === UserActionTypes.SIGN_IN_SUCCESS){
        return{
            ...state,
            currentUser:action.payload,
            error:null
        }
    }

    if(action.type === UserActionTypes.SIGN_OUT_SUCCESS){
        return{
            ...state,
            currentUser:null,
            error:null
        }
    }

    // if(action.type === UserActionTypes.EMAIL_SIGN_IN_SUCCESS){
    //     return{
    //         ...state,
    //         currentUser:action.payload,
    //         error:null
    //     }
    // }

    if(action.type === UserActionTypes.SIGN_IN_FAILURE){
        return{
            ...state,
            error:action.payload
        }
    }

    if(action.type === UserActionTypes.SIGN_OUT_FAILURE){
        return{
            ...state,
            error:action.payload
        }
    }


    
    return state
}


export default userReducer