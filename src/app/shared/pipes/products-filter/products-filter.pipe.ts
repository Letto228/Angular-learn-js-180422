import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../../interfaces/product.interface';

@Pipe({
	name: 'productsFilter',
})
export class ProductsFilterPipe<T extends IProduct> implements PipeTransform {
	transform(products: T[], searchName: string): T[] {
		return products.filter(({ name }) => name.includes(searchName));
	}
}
