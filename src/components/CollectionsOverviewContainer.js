import React from 'react'
import {connect} from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectIsCollectionFetching } from '../redux/shop/shop-selector'

import WithSpinner from './Spinner'
import CollectionOverview from './CollectionOverview'
import {compose} from 'redux'

const mapStateToProps = createStructuredSelector({
    isLoading:selectIsCollectionFetching
})

//const CollectionOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionOverview))
    //up or below
//with compose for multiple hoc
 const CollectionOverviewContainer = compose ( 
     connect(mapStateToProps),
     WithSpinner
 )(CollectionOverview);

export default CollectionOverviewContainer