import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ProductsApiService } from './products-api.service';
import { productsMock } from 'src/app/mocks/products.mock';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

const httpMock = {
	get(_url: string) {},
} as HttpClient;

describe('ProductsApiService', () => {
	let service: ProductsApiService;
	// let httpMock: HttpTestingController;

	beforeEach(() => {
		TestBed.configureTestingModule({
			// imports: [HttpClientTestingModule],
			providers: [
				ProductsApiService,
				{
					provide: HttpClient,
					useValue: httpMock,
				},
			],
		});
		service = TestBed.inject(ProductsApiService);
		// httpMock = TestBed.inject(HttpTestingController);

		spyOn(httpMock, 'get').and.returnValue(of({ items: productsMock }));
	});

	it('should be created', () => {
		service.getProducts$().subscribe((products) => {
			expect(products).toEqual(productsMock);
		});

		// httpMock.expectOne('/products/suggestion').flush({ items: productsMock })
	});
});
