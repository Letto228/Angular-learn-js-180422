import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { map, Observable, of, startWith, switchMap, timer } from 'rxjs';

@Component({
	selector: 'app-products-list',
	templateUrl: './products-list.component.html',
	styleUrls: ['./products-list.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent implements OnInit {
	products$!: Observable<{ name: string }[]>;
	// groupedProducts$!: Observable<Array<Object[]>>;
	images: string[] = [
		'http://wallpapers-images.ru/2560x1600/forest/wallpapers/forest-wallpapers-2560x1600-00022.jpg',
		'https://image.winudf.com/v2/image/bWUud2FsbHBhcGEubmF0dXJlX3NjcmVlbl8xNV8xNTMyMzc4MTc1XzA3OQ/screen-15.jpg?fakeurl=1&type=.jpg',
		'https://picfiles.alphacoders.com/305/305132.jpg',
	];

	ngOnInit() {
		this.products$ = this.getProducts$();
		// this.groupedProducts$ = this.products$.pipe(
		// 	map(items => items.reduce(
		// 		(groupedItems: Array<Object[]>, item: Object) => {
		// 			const lastGroupIndex = groupedItems.length - 1;

		// 			if (groupedItems[lastGroupIndex].length < 3) {
		// 				groupedItems[lastGroupIndex].push(item);

		// 				return [...groupedItems];
		// 			}

		// 			return [
		// 				...groupedItems,
		// 				[item],
		// 			]
		// 		},
		// 		[[]],
		// 	)),
		// )
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
