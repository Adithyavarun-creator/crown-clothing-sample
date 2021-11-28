//import Shopdata from '../.././Shopdata'
import ShopActionTypes from './shop-types'

const initialstate = {
    collections: null,
    isFetching:false,
    errorMessage:undefined
}


const shopReducer = (state=initialstate,action)=>{
    if(action.type === ShopActionTypes.UPDATE_COLLECTIONS){
        return{
            ...state,
            collections:action.payload
        }
    }

    if(action.type === ShopActionTypes.FETCH_COLLECTIONS_START){
        return{
            ...state,
            isFetching:true
        }
    }

    if(action.type === ShopActionTypes.FETCH_COLLECTIONS_SUCCESS){
        return{
            ...state,
            collections:action.payload,
            isFetching:false
                }
    }

    if(action.type === ShopActionTypes.FETCH_COLLECTIONS_FAILURE){
        return{
            ...state,
            isFetching:state.isFetching,
            errorMessage:action.payload
        }
    }
    return state
}

export default shopReducer