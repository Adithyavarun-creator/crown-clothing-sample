import React from 'react'

import './CheckoutItem.styles.scss'
import {connect} from 'react-redux'

import { clearitemfromcart,addItem,removeitem } from '../redux/cart/cart-actions'


const CheckoutItem = ({cartItem,clearitem,addItem,removeitem}) =>{

    const {name,price,imageUrl,quantity} = cartItem

    return(
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item"/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow"
                onClick={()=>removeitem(cartItem)}>&#10094;</div>
               <span className="value">{quantity}</span>
                <div className="arrow"
                onClick={()=>addItem(cartItem)}>&#10095;</div>
            </span>
            <span className="price">{price}</span>
            <div className="remove-button" 
            onClick={()=>clearitem(cartItem)}>&#10005;</div>

        </div>
    )
}

const mapDispacthToProps = dispatch =>({
    clearitem:item=>dispatch(clearitemfromcart(item)),
    addItem:item=>dispatch(addItem(item)),
    removeitem:item=>dispatch(removeitem(item))
})

export default connect(null,mapDispacthToProps)(CheckoutItem)