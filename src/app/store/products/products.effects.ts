import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { combineLatest, map, merge, switchMap } from 'rxjs';
import { ProductsApiService } from 'src/app/shared/services/products-api.service';
import { addProduct, addProducts, loadProductById, loadProducts } from './products.actions';

@Injectable()
export class ProductsEffects {
	constructor(
		private actions$: Actions,
		private productsApiService: ProductsApiService, // private store$: Store<IState>,
	) {}

	loadProducts$ = createEffect(() =>
		this.actions$.pipe(
			// filter(({type}) => )
			ofType(loadProducts),
			// tap(() => {
			// this.store$.dispatch(setProductsLoadinStatus(true))
			// }),
			switchMap(() =>
				this.productsApiService.getProducts$().pipe(
					map((products) => addProducts(products)),
					// tap(() => {
					//     this.store$.dispatch(setProductsLoadinStatus(false))
					// }),
					// switchMap(products => [
					//     addProducts(products),
					//     setProductsLoadinStatus(false),
					// ])
				),
			),
		),
	);

	loadProductById$ = createEffect(() =>
		this.actions$.pipe(
			ofType(loadProductById),
			switchMap(({ id }) => this.productsApiService.getProduct$(id).pipe(map((product) => addProduct(product)))),
		),
	);
}
