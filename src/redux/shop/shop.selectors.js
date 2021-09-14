import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

const selectShop = state => state.shop;

/** 
 * Selector to get hash map `state.shop.collections`.
 * @return `state.shop.collections` - hash map of collections.
 * @createdOn 11-Aug-2021
 */
export const selectShopCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

/** 
 * Selector to get array of collections from hash map `state.shop.collections`.
 * @return array of collections.
 * @createdOn 11-Aug-2021
 */
export const selectCollectionsForPreview = createSelector(
  [selectShopCollections],
  collections => collections ? Object.keys(collections).map(key => collections[key]) : []
);

/** 
 * Selector to get particular collection from `state.shop.collections` passing `collectionUrlParam` as hash key.
 * @param collectionUrlParam key passed in URL path
 * @note selector is memoized using lodash.memoize 
 * @return collection having key `collectionUrlParam`, else null.
 * @createdOn 12-Aug-2021
 */
export const selectShopCollection = memoize((collectionUrlParam) =>
  createSelector(
    [selectShopCollections],
    collections => collections ? collections[collectionUrlParam] : null
  )
);

/** 
 * Selector to get true if `state.shop.isFetching`.
 * @return `state.shop.isFetching`.
 * @createdOn 5-Sep-2021
 */
export const selectIsCollectionFetching = createSelector(
  [selectShop],
  shop => shop.isFetching
);

/** 
 * Selector to determine if `state.shop.collections` has data.
 * @return true if `state.shop.collections` has data.
 * @createdOn 6-Sep-2021
 */
export const selectIsCollectionsLoaded = createSelector(
  [selectShop],
  shop => !!shop.collections
);