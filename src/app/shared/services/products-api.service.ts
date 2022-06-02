import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, pluck, tap } from 'rxjs';
import { IProduct } from '../interfaces/product.interface';

@Injectable({
	providedIn: 'root',
})
export class ProductsApiService {
	constructor(private http: HttpClient) {}

	getProducts$(): Observable<IProduct[]> {
		return this.http.get<{ items: IProduct[] }>('/products/suggestion').pipe(pluck('items'));
	}

	getProduct$(id: string): Observable<IProduct> {
		return this.http.get<IProduct>(`/products/${id}`).pipe(tap(console.log));
	}
}
