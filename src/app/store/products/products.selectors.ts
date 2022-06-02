import { Dictionary } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IProduct } from 'src/app/shared/interfaces/product.interface';
import { IProductsState, productsAdapter, PRODUCTS_FATURE } from './products.state';

export const productsFeatureSelector = createFeatureSelector<IProductsState>(PRODUCTS_FATURE); // state[PRODUCTS_FATURE]

// export const productsSelector = createSelector(
//     productsFeatureSelector,
//     (productsState: IProductsState) => productsState.data,
// )
// export const productsSelector = createSelector(
//     productsFeatureSelector,
//     ({entities, ids}: IProductsState) => ids.map(id => entities[id]),
// )

export const { selectAll: productsSelector, selectEntities } = productsAdapter.getSelectors(productsFeatureSelector);

export const productByIdSelector = (id: string) =>
	createSelector(selectEntities, (entities: Dictionary<IProduct>) => entities[id]);
