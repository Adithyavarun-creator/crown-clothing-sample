import UserActionTypes from "../user/user-types";
import CartActionTypes  from "./cart-types";

  const togglecarthidden = () =>({
    type:CartActionTypes.TOGGLE_CART_HIDDEN
})
export default togglecarthidden

export const addItem = (item) =>({
    type:CartActionTypes.ADD_ITEM,
    payload:item
})


export const clearitemfromcart = item =>({
  type:CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload:item
})


export const removeitem = item =>({
  type:CartActionTypes.REMOVE_ITEM,
  payload:item
})

export const clearCart=()=>({
  type:CartActionTypes.CLEAR_CART
})