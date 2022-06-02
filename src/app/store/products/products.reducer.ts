import { createReducer, on } from '@ngrx/store';
import { addProduct, addProducts } from './products.actions';
import { IProductsState, productsAdapter, productsInitialState } from './products.state';

export const productsReducer = createReducer(
	productsInitialState,
	// on(addProducts, (state: IProductsState, action) => ({
	//     ...state,
	//     data: action.products,
	// } as IProductsState)), // Добавление продукта
	on(addProducts, (state: IProductsState, { products }) => productsAdapter.upsertMany(products, state)), // Добавление продукта
	on(addProduct, (state: IProductsState, { product }) => productsAdapter.upsertOne(product, state)),
);
