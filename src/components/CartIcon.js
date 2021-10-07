import React from 'react'
import './CartIcon.styles.scss'
import { ReactComponent as ShoppingIcon } from '../assets/shopping-bag.svg'

import { connect } from 'react-redux'
import togglecarthidden from '../redux/cart/cart-actions'
import { selectCartItemsCount } from '../redux/cart/cart-selector'
import { createStructuredSelector } from 'reselect'

const CartIcon = ({togglecarthidden,itemCount}) =>{
    return(
        <div className="cart-icon" onClick={togglecarthidden}>
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">{itemCount}</span>
        </div>
    )
}

const mapDispatchToProps = dispatch =>({
    togglecarthidden:()=>dispatch(togglecarthidden())
})

//const mapStateToProps = ({cart:{cartItems}}) =>({
    // itemCount: cartItems.reduce(
    //     (accumulatedquantity,cartItem)=>{
    //         return accumulatedquantity + cartItem.quantity
    // },0
    // )
//})

const mapStateToProps = (state) =>({
    itemCount:selectCartItemsCount(state)
})

// const mapStateToProps = createStructuredSelector({
//     itemCount:selectCartItemsCount
//   })

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon)