import React from "react";
import './Collections.styles.scss'

import CollectionItem from "../components/CollectionItem";
import { connect } from "react-redux";

import { selectCollections } from "../redux/shop/shop-selector";

const CollectionsPage = ({collection}) =>{
    //console.log(collection);
    const {items,title} = collection
    return(
        <div className="collection-page">
            <h2 className="title">{title}</h2>
            <div className="items">
            {items.map(item=>(
                <CollectionItem key={item.id}
                item={item}/>
            ))
            }
            </div>
        </div>
    )
}

const mapStateToProps = (state,ownProps) => 
//console.log(ownProps);
({
    collection:selectCollections(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionsPage)