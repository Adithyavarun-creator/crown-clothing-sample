import React,{Component} from 'react'
//import SHOP_DATA from '../Shopdata'
//import PreviewCollection from '../components/PreviewCollection'
import CollectionOverview from '../components/CollectionOverview'
// import { connect } from 'react-redux'
// import { selectCollection } from '../redux/shop/shop-selector'
// import { createStructuredSelector } from 'reselect'
import { Route } from 'react-router-dom'
import CollectionsPage from './Collections'
//import {firestore , convertCollectionSnapshotToMap} from '../firebase/firebase.utils'
import {connect} from 'react-redux'
//import { updateCollections } from '../redux/shop/shop-actions'
import WithSpinner from '../components/Spinner'
import { createStructuredSelector } from 'reselect'
import { fetchcollectionstart } from '../redux/shop/shop-actions'
import { selectIsCollectionFetching,selectIsCollectionsLoaded} from '../redux/shop/shop-selector'
import { fetchCollectionsStart } from '../redux/shop/shop-sagas'
import CollectionOverviewContainer from '../components/CollectionsOverviewContainer'
import CollectionPageContainer from './CollectionContainer'
// class ShopPage extends Component{
//     constructor(){
//         super()

//         this.state={
//             collections:SHOP_DATA
//         }
//     }

// render(){
//     const {collections} = this.state

const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionsPage)

class ShopPage extends Component {
    UNSAFE_componentWillMount(){

    }
//    state={
//        loading:true
//    }
//     unsubscribeFromSnapshot = null;

    componentDidMount(){
        // const {updateCollections} = this.props
        // const collectionRef = firestore.collection('collections')
        // //to get the data is use
        // this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot =>{
        //     //console.log(snapshot);
        //    const collectionsMap =  convertCollectionSnapshotToMap(snapshot)
        //    //console.log(collectionsMap);
        //    updateCollections(collectionsMap)
        //    this.setState({
        //        loading:false
        //    })
        // })
        const {fetchCollectionsStart} = this.props
        fetchCollectionsStart()
    }

   render(){
       const {isCollectionLoaded,match} = this.props
       //const {loading} = this.state

    return(
        <div className="shop-page">
        <Route exact path={`${match.path}`}
        //component={CollectionOverview}
        // render={(props)=><CollectionsOverviewWithSpinner 
        // isLoading={isCollectionFetching} {...props}/>}
        component = {CollectionOverviewContainer}/>

        <Route path={`${match.path}/:collectionId`}
        //component={CollectionsPage} 
        // render ={(props)=><CollectionPageWithSpinner 
        // isLoading={!isCollectionLoaded} {...props}/>}
        component={CollectionPageContainer}/>
        </div>
    ) 


   }
    
}


// const mapStateToProps = createStructuredSelector({
//     collections:selectCollection
// })

// export default connect(mapStateToProps)(ShopPage)

// const mapStateToProps = createStructuredSelector({
//      //isCollectionFetching:selectIsCollectionFetching,
//      isCollectionLoaded : selectIsCollectionsLoaded
//  })
    
    // export default connect(mapStateToProps)(ShopPage)

const mapDispatchToProps = dispatch =>({
    // updateCollections : collectionsMap=>dispatch(updateCollections(collectionsMap))
    fetchCollectionsStart : () => dispatch(fetchcollectionstart())
})

export default connect(null,mapDispatchToProps)(ShopPage)