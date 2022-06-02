import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { IProduct } from 'src/app/shared/interfaces/product.interface';

export interface IProductsState extends EntityState<IProduct> {}
// export interface IProductsState {
//     entities: Record<string, IProduct>,
//     ids: string[],
// }

export const PRODUCTS_FATURE = 'products';

export const productsAdapter = createEntityAdapter({
	selectId: ({ _id }: IProduct) => _id,
});
export const productsInitialState: IProductsState = productsAdapter.getInitialState();
