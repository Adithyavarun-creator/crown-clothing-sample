import { UserActionTypes } from './user-types'

export const setcurrentuser = user =>({
    type:UserActionTypes.SET_CURRENT_USER,
    payload:user
})

