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

firebase.initializeApp(config)


//for database storing
export const createUserProfileDocument = async(userAuth,additionalData)=>{
    //console.log(userAuth);
    //async bcz api is gonna be passes
    if(!userAuth) //if no user auth
        return

     const userRef = firestore.doc(`users/${userAuth.uid}`)
     const snapShot = await userRef.get()
    //console.log(snapShot.data());
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

//adding products to firestore database
export const addCollectionAndItem = async(collectionKey,objectsToAdd) =>{
    const collectionRef = firestore.collection(collectionKey);
    //console.log(collectionRef);
    //batch groups all the calls to a single request
    const batch = firestore.batch();
    objectsToAdd.forEach(obj => { //maps the list of items
        const newDocRef = collectionRef.doc() //prepares a unique id
        console.log(newDocRef);
        batch.set(newDocRef,obj) //loop through and batch these calls
    })
    return await batch.commit()  //to fire off our batch request once and returns a promise
    //this function is used in App.js bcz it can mount only once and not each and every time
}

export const convertCollectionSnapshotToMap = (collections) =>{
    const transformedCollection = collections.docs.map(doc=>{
        //docs is list of query snapshot arrays
        const {title,items} = doc.data()

        return{
            routeName:encodeURI(title.toLowerCase()),
            id:doc.id,
            title,
            items
        }
    })
    //console.log(transformedCollection);
    return transformedCollection.reduce((accumulator,collection)=>{
         accumulator[collection.title.toLowerCase()] = collection
         //mpas with hats,jackets,sneakers,men and women
         return accumulator
    },{})
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();



//for redux-sagas
 export const googleProvider= new firebase.auth.GoogleAuthProvider()
 googleProvider.setCustomParameters({
     prompt:'select_account'
 })

 export const signInWithGoogle = () => 
 auth.signInWithPopup(googleProvider);

//  const provider= new firebase.auth.GoogleAuthProvider()
//  provider.setCustomParameters({
//      prompt:'select_account'
//  })

// export const signInWithGoogle = () => 
// auth.signInWithPopup(provider);

//for getting current user
export const getCurrentUser =()=>{
    return new Promise((resolve,reject)=>{
        const unsubscribe = auth.onAuthStateChanged(userAuth=>{
            unsubscribe()
            resolve(userAuth)
        },reject)
    })
}

export default firebase