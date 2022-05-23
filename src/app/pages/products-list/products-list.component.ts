import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ProductsService } from '../../shared/services/products.service';

@Component({
	selector: 'app-products-list',
	templateUrl: './products-list.component.html',
	styleUrls: ['./products-list.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [
		// {
		// 	provide: COMPONENT_NAME_TOKEN,
		// 	useValue: 'ProductsListComponent',
		// }
	],
})
export class ProductsListComponent implements OnInit {
	readonly products$ = this.productsService.products$;

	images: string[] = [
		'http://wallpapers-images.ru/2560x1600/forest/wallpapers/forest-wallpapers-2560x1600-00022.jpg',
		'https://image.winudf.com/v2/image/bWUud2FsbHBhcGEubmF0dXJlX3NjcmVlbl8xNV8xNTMyMzc4MTc1XzA3OQ/screen-15.jpg?fakeurl=1&type=.jpg',
		'https://picfiles.alphacoders.com/305/305132.jpg',
	];

	constructor(
		private productsService: ProductsService, // @Optional() @Host() @Inject(COMPONENT_NAME_TOKEN) private name: number,
	) {
		// console.log(this.name);
	}

	ngOnInit() {
		this.productsService.loadProducts();
	}

	trackByName(index: number, product: { name: string }): string {
		return product.name;
	}
}
