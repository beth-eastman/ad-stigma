import {createSelector} from 'reselect'
import {alphaSort} from '../../_helper';
import {getUser} from '../../selectors'
export const getProductSearchText = (state) => state.filters.products.filterText;
export const getProductsMap = (state) => state.products;
//export const getProducts = (state) => state.productIds.map(hid => state.products[hid]);
export const getFavoriteProductIds = (state) => state.favoriteProductIds;
export const getProductIds = (state) => state.productIds;

export const getProductSortFilter = (state) => state.filters.products;

export const getProductPage = (state) => getProductSortFilter(state).currentPage;
export const getProductsResultMax = (state) => getProductSortFilter(state).resultsMax;

export const getProducts = createSelector( //just searching titles for now
  [getProductsMap,getProductIds,getFavoriteProductIds],
  (productsMap,productIds,favoriteIds) => {
    return productIds.map((pid) => {
       const isFavorite = favoriteIds.indexOf(pid) > -1;
       return {...productsMap[pid],isFavorite: isFavorite};
    });
  }
);

export const searchProducts = createSelector( //just searching titles for now
  [getProducts,getProductSearchText],
  (products,searchText) => {
    return products.filter((product) => {
        return product.title.toLowerCase().indexOf(searchText.toLowerCase()) > -1
    });
  }
);

export const getProductsAdvanced = createSelector( //just searching titles for now
  [searchProducts,getUser,getProductSortFilter],
  (products,user,sortFilter) => {
    let sortCb = alphaSort('title',sortFilter.sortDir);

    return products.map(product => {
        product.distance = -1;
        return product;
    }).sort(sortCb);
  }
);

export const getProductsAdvancedPaged = createSelector( //just searching titles for now
  [getProductsAdvanced,getProductSortFilter],
  (products,sortFilter) => {
    const startIndx = sortFilter.currentPage * sortFilter.resultsMax;
    const resultsLength = startIndx + sortFilter.resultsMax;
    return products.slice(startIndx,resultsLength)
  }
);

export const getProductsLength = createSelector(
    [getProductsAdvanced],
    (products) => {
      return products.length;
    }
  );
export const getProductsPageMax = createSelector(
    [getProductsLength,getProductsResultMax],
    (productsLength,max_results) => {
      const safe_max_results = max_results == 0 ? 1 : max_results;
      return Math.ceil(productsLength/safe_max_results);
    }
  );
