import  {createSelector } from 'reselect';
import memoize from 'lodash.memoize';

const selectShop = state=> state.shop;

export const selectCollectionsItems = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollectionsItems],
  collections => collections ? Object.keys(collections).map(key => collections[key]) : []
)

export const selectCollection = memoize((collectionUrlParam) =>
  createSelector(
    [selectCollectionsItems],
    (collections) => collections ? collections[collectionUrlParam] : null
  )
);

