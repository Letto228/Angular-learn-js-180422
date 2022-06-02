import { productsReducer } from './products/products.reducer';
import { IProductsState, PRODUCTS_FATURE } from './products/products.state';

export interface IState {
	[PRODUCTS_FATURE]: IProductsState;
}

export const reducers = {
	[PRODUCTS_FATURE]: productsReducer,
};
