import ShopActionTypes from './shop-types'

import { firestore,convertCollectionSnapshotToMap } from '../../firebase/firebase.utils'
// export const updateCollections = (collectionsMap)=>({
//     type:ShopActionTypes.UPDATE_COLLECTIONS,
//     payload:collectionsMap
// })

//these are thunk actions
export const fetchcollectionstart = ()=>({
    type:ShopActionTypes.FETCH_COLLECTIONS_START,
})

export const fetchcollectionsuccess = collectionsMap=>({
    type:ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload:collectionsMap
})

export const fetchcollectionfailure = errorMessage =>({
    type:ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload:errorMessage
})

export const fetchcollectionstartasync = ()=>{
    return dispatch =>{
        const collectionRef = firestore.collection('collections')
        dispatch(fetchcollectionstart())
        //to get the data is use
        //this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot =>{
            //console.log(snapshot);
            collectionRef.get().then(snapshot=>{
                const collectionsMap = convertCollectionSnapshotToMap(snapshot)
                dispatch(fetchcollectionsuccess(collectionsMap))
            }).catch(error=>
            dispatch(fetchcollectionfailure(error.message)))
        }
    }
           //console.log(collectionsMap);
           //updateCollections(collectionsMap)
        //    this.setState({
        //        loading:false
        //    })
  
