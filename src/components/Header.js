import React from 'react'
import './Header.styles.scss'
import { Link } from 'react-router-dom'
import {ReactComponent as Logo} from '../assets/crown.svg'
import { auth } from '../firebase/firebase.utils'
import { createStructuredSelector } from 'reselect'

import { connect } from 'react-redux'
import CartIcon from './CartIcon'
import CartDropdown from './CartDropdown'
import { selectCartHidden } from '../redux/cart/cart-selector'
import { selectCurrentUser } from '../redux/user/user-selector'
import { signOutStart } from '../redux/user/user-actions'

const Header =({currentUser,hidden,signOutStart}) =>{
    return(
        <div className="header">
            <Link to="/">
            <Logo 
            className="logo-container"></Logo>
            </Link>
            <div className="options">
                <Link to="/shop" 
                className="option">
                    SHOP
                </Link>
            
                <Link to="/contact" 
                className="option">
                    CONTACT
                </Link>
                {
                    currentUser ? 
                    <div className="option" 
                    // onClick={()=>auth.signOut()}>
                    //     SIGN OUT
                    onClick={signOutStart}>
                        SIGN OUT
                    </div>
                    :
                    <Link className="option" to="/signin">
                        SIGN IN
                    </Link>
                }
                <CartIcon />
            </div>
                {
                    hidden ? null : <CartDropdown />
                }
        </div>
    )
}

//state is root reducer
// const mapStateToProps = ({user:{currentUser},cart:{hidden}}) =>({
//     currentUser,
//     hidden
// })

const mapStateToProps = (state) =>({
    currentUser:selectCurrentUser(state),
    hidden:selectCartHidden(state)
})

const mapDispatchToProps = dispatch=>({
    signOutStart: ()=>dispatch(signOutStart())
})

//with createstructuredselectors
// const mapStateToProps = createStructuredSelector({
//     currentUser:selectCurrentUser,
//     hidden:selectCartHidden
// })

export default connect(mapStateToProps,mapDispatchToProps)(Header)