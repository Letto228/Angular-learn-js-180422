import { productsMock } from 'src/app/mocks/products.mock';
import { ProductsFilterPipe } from './products-filter.pipe';

describe('ProductsFilterPipe', () => {
	const pipe = new ProductsFilterPipe();

	it('create an instance', () => {
		expect(pipe).toBeTruthy();
	});

	it('Фильтрация по строке', () => {
		const filterdData = pipe.transform(productsMock, productsMock[0].name);

		expect(filterdData).toEqual([productsMock[0]]);
	});
});
