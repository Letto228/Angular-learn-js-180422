import { createAction } from '@ngrx/store';
import { IProduct } from 'src/app/shared/interfaces/product.interface';

enum ProductsActionTypes {
	AddProducts = '[Products] Add products',
	AddProduct = '[Products] Add product',
	LoadProducts = '[Products] Load products',
	LoadProductById = '[Products] Load product by id',
}

export const addProducts = createAction(ProductsActionTypes.AddProducts, (products: IProduct[]) => ({ products }));

export const addProduct = createAction(ProductsActionTypes.AddProduct, (product: IProduct) => ({ product }));

export const loadProducts = createAction(ProductsActionTypes.LoadProducts);

export const loadProductById = createAction(ProductsActionTypes.LoadProductById, (id: string) => ({ id }));
