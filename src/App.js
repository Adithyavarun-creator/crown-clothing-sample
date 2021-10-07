import React,{Component} from 'react'
import './App.css'
import { Switch,Route,Redirect } from 'react-router-dom';
import Homepage from './pages/Homepage';
import ShopPage from './pages/ShopPage';
import Header from './components/Header';
import SignInAndSignUpPage from './components/sign-in and sign-up';
import {auth, createUserProfileDocument} from './firebase/firebase.utils'

import {connect} from 'react-redux'
import {setcurrentuser} from './redux/user/user-actions'
import { selectCurrentUser } from './redux/user/user-selector'
import { createStructuredSelector } from 'reselect'
import CheckoutPage from './pages/CheckoutPage'

class App extends Component{
  

  unsubscribeFromAuth = null

  componentDidMount(){

    const {setcurrentuser} = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){ //if exists
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapshot=>{
          //console.log(snapshot.data());
          setcurrentuser({
              id:snapshot.id,
              ...snapshot.data()
          })
          //,()=>{
          //   console.log(this.state);
          // }
         // console.log(this.state);
        })
      }
     //console.log(user);
      else{
        setcurrentuser(userAuth)
      }
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }


  render(){
    return(
      <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage}></Route>

        <Route path="/shop" component={ShopPage}></Route>

        <Route exact path="/checkout" component={CheckoutPage}></Route>

        <Route exact path="/signin" 
        render={()=>this.props.currentUser ? 
        <Redirect to="/" />
        : <SignInAndSignUpPage />}>
        </Route>



    </Switch>
    </div>
    )
  }
  
}

// const mapStateToProps = ({user}) =>({
//   currentUser:user.currentUser
// }) 

const mapStateToProps = createStructuredSelector({
  currentUser:selectCurrentUser
})

const mapDispatchToProps = dispatch =>({
  setcurrentuser: user=> dispatch(setcurrentuser(user))
})


export default connect(mapStateToProps,mapDispatchToProps)(App);
