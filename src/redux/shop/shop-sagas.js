import {takeEvery,call,put,all,takeLatest} from 'redux-saga/effects'

import ShopActionTypes from './shop-types'
import { firestore,convertCollectionSnapshotToMap } from '../../firebase/firebase.utils';
import { fetchcollectionsuccess,
    fetchcollectionfailure, 
    fetchcollectionstart} from './shop-actions';

export function* fetchCollectionsAsync(){

    yield console.log('Iam fired here');
try{
    const collectionRef = firestore.collection('collections')
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(convertCollectionSnapshotToMap,snapshot)
    yield put(fetchcollectionsuccess(collectionsMap))
    //put dispatches out
}catch(error){
    yield put(fetchcollectionfailure(error.message))
}

        // dispatch(fetchcollectionstart())
        //     collectionRef.get()
        //.then(snapshot=>{
        //         const collectionsMap = convertCollectionSnapshotToMap(snapshot)
        //         dispatch(fetchcollectionsuccess(collectionsMap))
        //     }).catch(error=>
        //     dispatch(fetchcollectionfailure(error.message)))
        
}



export function* fetchCollectionsStart(){
    yield takeLatest(
        ShopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionsAsync
        )
}


export function* shopSagas(){
    yield all([
        call(fetchCollectionsStart)
    ])
}