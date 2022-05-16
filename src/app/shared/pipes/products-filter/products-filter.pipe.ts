import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'productsFilter',
})
export class ProductsFilterPipe<T extends { name: string }> implements PipeTransform {
	transform(products: T[], searchName: string): T[] {
		return products.filter(({ name }) => name.includes(searchName));
	}
}
