import React from 'react'

import './sign-in and sign-up.styles.scss'

import SignIn from './Signin'
import SignUp from './SignUp'

const SignInAndSignUpPage=()=>{
    return(
        <div className="sign-in-and-sign-up">
           <SignIn />
           <SignUp />
        </div>
    )
}

export default SignInAndSignUpPage