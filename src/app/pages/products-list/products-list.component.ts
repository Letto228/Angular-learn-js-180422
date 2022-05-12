import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { map, Observable, of, startWith, switchMap, timer } from 'rxjs';

@Component({
	selector: 'app-products-list',
	templateUrl: './products-list.component.html',
	styleUrls: ['./products-list.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent implements OnInit {
	products!: { name: string }[];

	constructor(private changeDetectorRef: ChangeDetectorRef) {}

	ngOnInit() {
		this.getProducts$().subscribe((products) => {
			this.products = products;

			this.changeDetectorRef.markForCheck();
		});
	}

	trackByName(index: number, product: { name: string }): string {
		return product.name;
	}

	private getProducts$(): Observable<{ name: string }[]> {
		return timer(3000).pipe(
			switchMap(() => {
				return timer(3000).pipe(
					map(() => [
						{ name: 'product 0' },
						{ name: 'product 1' },
						{ name: 'product 2' },
						{ name: 'product 3' },
						{ name: 'product 4' },
						{ name: 'product 5' },
						{ name: 'product 6' },
						{ name: 'product 7' },
						{ name: 'product 8' },
						{ name: 'product 9' },
						{ name: 'product 10' },
						{ name: 'product 11' },
					]),
					startWith([
						{ name: 'product 0' },
						{ name: 'product 1' },
						{ name: 'product 2' },
						{ name: 'product 3' },
						{ name: 'product 4' },
						{ name: 'product 5' },
						{ name: 'product 6' },
						{ name: 'product 7' },
					]),
				);
			}),
		);
	}
}
