import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IProduct } from '../interfaces/product.interface';
import { ProductsApiService } from './products-api.service';

@Injectable({
	providedIn: 'root',
})
export class ProductsService {
	private _products$ = new BehaviorSubject<IProduct[]>([]);

	get products$(): Observable<IProduct[] | null> {
		return this._products$.asObservable();
	}

	constructor(private productsApiService: ProductsApiService) {}

	loadProducts() {
		this.productsApiService.getProducts$().subscribe((products) => {
			this._products$.next(products);
		});
	}

	loadProduct(id: string) {
		this.productsApiService.getProduct$(id).subscribe((product) => {
			this._products$.next([...this._products$.value.filter(({ _id }) => _id !== id), product]);
		});
	}
}
