import React from 'react'
import './CollectionOverview.styles.scss'

import {connect} from 'react-redux'
import { createStructuredSelector } from 'reselect'

import PreviewCollection from './PreviewCollection'
import { selectCollectionsforPreview } from '../redux/shop/shop-selector'

const CollectionOverview = ({collections}) =>{
    //console.log(collections);
    return(
        <div className="collections-overview">
            {
            collections.map(({id,...otherCollectionProps})=>(
                <PreviewCollection key={id}
                {...otherCollectionProps} />
            ))
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections:selectCollectionsforPreview
})

export default connect(mapStateToProps)(CollectionOverview)
