import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of, switchMap, timer } from 'rxjs';
import { productsMock } from 'src/app/mocks/products.mock';
import { IProduct } from '../interfaces/product.interface';

@Injectable({
	providedIn: 'root',
})
export class ProductResolver implements Resolve<IProduct> {
	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IProduct> {
		return timer(3000).pipe(switchMap(() => of(productsMock[0])));
	}
}
