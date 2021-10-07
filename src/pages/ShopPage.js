import React from 'react'
//import SHOP_DATA from '../Shopdata'
//import PreviewCollection from '../components/PreviewCollection'
import CollectionOverview from '../components/CollectionOverview'
// import { connect } from 'react-redux'
// import { selectCollection } from '../redux/shop/shop-selector'
// import { createStructuredSelector } from 'reselect'
import { Route } from 'react-router-dom'
import CollectionsPage from './Collections'
// class ShopPage extends Component{
//     constructor(){
//         super()

//         this.state={
//             collections:SHOP_DATA
//         }
//     }

// render(){
//     const {collections} = this.state

const ShopPage =({match}) =>{
//console.log(match);
    return(
        <div className="shop-page">
        <Route exact path={`${match.path}`}
        component={CollectionOverview}/>

        <Route path={`${match.path}/:collectionId`}
        component={CollectionsPage} />
        </div>
    )
}


// const mapStateToProps = createStructuredSelector({
//     collections:selectCollection
// })

// export default connect(mapStateToProps)(ShopPage)

export default ShopPage