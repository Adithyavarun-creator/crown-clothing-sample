import {takeEvery,call,put,all,takeLatest} from 'redux-saga/effects'

import UserActionTypes from '../user/user-types'
import {clearCart} from './cart-actions'

export function* clearCartonSignOut(){
    yield put(clearCart())
}

export function* onSignOutSuccess(){
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS,clearCartonSignOut)
}

export function* cartSagas(){
    yield(all([
        call(onSignOutSuccess)
    ]))
}