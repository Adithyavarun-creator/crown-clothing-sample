import React,{Component} from "react";

import './Signin.styles.scss'

import FormInput from "./FormInput";
import Button from "./Button";

//import { auth,signInWithGoogle } from "../firebase/firebase.utils";
import { googleSignInStart } from "../redux/user/user-actions";
import { connect } from "react-redux";
import { emailSignInStart } from "../redux/user/user-actions";

class SignIn extends Component{
    constructor(props){
        super(props)

        this.state ={
            email:'',
            password:''
        }

    }


     handlesubmit = async event=>{
        event.preventDefault()
        const {email,password} = this.state
        const {emailSignInStart} = this.props

        // try{
        //     await auth.signInWithEmailAndPassword(email,password)
        //     this.setState({
        //         email:'',
        //         password:''
        //     })
        // }catch(error){
        //     console.log(error);
        // }
        emailSignInStart(email,password)
        }

         handlechange = (e)=>{
            const {value,name} = e.target
            this.setState({
                [name]:value
            })
            }

    render(){
        const{googleSignInStart} = this.props;

        return(
            <div className="sign-in">
                <h2>I already have an account </h2>
                <span>Sign in with your email and password</span>
            
            <form onSubmit={this.handlesubmit}>
            
            <FormInput 
            name="email"
            type="email"
            value={this.state.email}
            label="email"
            handlechange={this.handlechange} 
            required />

            <FormInput name="password" 
            type="password"
            label="password"
            value={this.state.password} 
            handlechange={this.handlechange} 
            required />
            

            <div className="buttons">
            <Button type="submit">
                Sign In
            </Button>

            <Button type="button" 
            onClick={googleSignInStart} 
            isGoogleSignIn>
                Sign In With Google
            </Button>
            </div>
            </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch=>({
    googleSignInStart:()=>dispatch(googleSignInStart()),
    emailSignInStart:(email,password)=>dispatch(emailSignInStart({email,password}))
})


export default connect(null,mapDispatchToProps)(SignIn)