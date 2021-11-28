import React from 'react'
import { connect } from 'react-redux'
import {compose} from 'redux'
import { createStructuredSelector } from 'reselect'
import { selectIsCollectionsLoaded } from '../redux/shop/shop-selector'
import WithSpinner from '../components/Spinner'
import Collections from './Collections'

const mapStateToProps = createStructuredSelector({
    isLoading:state => !selectIsCollectionsLoaded(state)
})

const CollectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(Collections)

export default CollectionPageContainer