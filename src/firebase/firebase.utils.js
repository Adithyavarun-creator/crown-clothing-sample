import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const config={
        apiKey: "AIzaSyA9Hdl2znYilJO7mk9yJO7ig5h3mWTO0fg",
        authDomain: "crown-cloth-final-database.firebaseapp.com",
        projectId: "crown-cloth-final-database",
        storageBucket: "crown-cloth-final-database.appspot.com",
        messagingSenderId: "310294854701",
        appId: "1:310294854701:web:4dfd03a667161cbdf58ca4",
        measurementId: "G-BHBX9RS604"
}


//for databse storing
export const createUserProfileDocument = async(userAuth,additionalData)=>{
    //console.log(userAuth);
    //async bcz api is gonna be passes
    if(!userAuth) //if no user auth
        return

     const userRef = firestore.doc(`users/${userAuth.uid}`)
     const snapShot = await userRef.get()
    //console.log(snapShot);
    if(!snapShot.exists){ //if no snapshot exists
        const {displayName,email} = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch(error){
            console.log('error creating user',error.message);
        }
    }
    return userRef
}


firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider= new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({
    prompt:'select_account'
})

export const signInWithGoogle = () => 
auth.signInWithPopup(provider);

export default firebase