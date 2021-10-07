import React from 'react'
import './CartDropdown.styles.scss'
import {connect} from 'react-redux'
import Button from './Button'
import CartItem from './CartItem'
import { selectCartItems } from '../redux/cart/cart-selector'
//import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'
import togglecarthidden from '../redux/cart/cart-actions'

const CartDropdown = ({cartItems,history,dispatch}) =>{
    return(
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.length ? 
                    (cartItems.map(cartitem=>(
                        <CartItem key={cartitem.id}
                        item={cartitem}/>
                    )) )
                    :
                    (<span className="empty-message">
                        Your cart is empty
                    </span> )
                }
            </div>
            <Button
             onClick={()=>{
                history.push('/checkout')
                dispatch(togglecarthidden())
                }}>
                 Go to Checkout
                 </Button>
        </div>
    )
}

// const mapStateToProps = ({cart:{cartItems}}) =>({
//     cartItems
// })

const mapStateToProps = (state) =>({
    cartItems:selectCartItems(state)
})

// const mapStateToProps = createStructuredSelector({
//     cartItems:selectCartItems
//   })




export default withRouter(connect(mapStateToProps)(CartDropdown))
//withrouter takes component that return from connect as its component arguments
//passes the  match hisotry and location objects into the components wrapped