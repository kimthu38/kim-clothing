import { createSelector } from "reselect";

const selectCollection = state => state.shop;

export const collectionSelector = createSelector(
    selectCollection,
    collections => collections.collections
)