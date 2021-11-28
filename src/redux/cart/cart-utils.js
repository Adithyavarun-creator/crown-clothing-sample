export const AddItemToCart =(cartItems,cartItemtoAdd)=>{
    const existingcartitem = cartItems.find(cartItem =>
        cartItem.id === cartItemtoAdd.id)

        if(existingcartitem){
            return cartItems.map(cartItem=>
            cartItem.id === cartItemtoAdd.id
             ? {
                ...cartItem,
                quantity:cartItem.quantity+1 
            } 
                : cartItem  )
        }

        return[
            ...cartItems,
            {
            ...cartItemtoAdd,
            quantity:1
        }
        ]
}

export const removeitemfromcart = (cartitems,cartitemtoremove)=>{
    const existingcartitem = cartitems.find(cartItem =>
        cartItem.id === cartitemtoremove.id) 

        if(existingcartitem.quantity === 1){
            return cartitems.filter(item=>
                item.id !== cartitemtoremove.id)
        }
        return cartitems.map(
            cartitem => cartitem.id === cartitemtoremove.id

            ? {
                ...cartitem,
                quantity:cartitem.quantity - 1
            } : cartitem
        )
}