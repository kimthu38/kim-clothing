import { createSelector } from "reselect";

const COLLECTION_ID_MAP = {
    hats: 1,
    sneakers: 2,
    jackets: 3,
    womens: 4,
    mens: 5
}

const selectCollections = state => state.shop;

export const collectionsSelector = createSelector(
    selectCollections,
    collections => collections.collections
)

export const collectionByIdSelector = collectionParam => createSelector(
    [collectionsSelector],
    collections => collections.find(x => x.id === COLLECTION_ID_MAP[collectionParam])
)