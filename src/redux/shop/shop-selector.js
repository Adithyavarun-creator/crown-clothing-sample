import { createSelector } from "reselect";

// const COLLECTION_ID_MAP ={
//     hats:1,
//     sneakers:2,
//     jackets:3,
//     womens:4,
//     mens:5
// }

const selectShop = state => state.shop

export const selectCollection = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollections = collectionUrlParam => createSelector(
    [selectCollection],
    // collections=> collections.find(collection=>
    //     collection.id === COLLECTION_ID_MAP[collectionUrlParam])
    collections => collections[collectionUrlParam]
)

export const selectCollectionsforPreview =  createSelector(
    [selectCollection],
    //object.keys converts objects to arrays
    collections =>
    Object.keys(collections).map(key=>collections[key])
)
