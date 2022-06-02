import { Component, OnInit, ChangeDetectionStrategy, OnChanges, SimpleChanges, AfterViewInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { loadProducts } from 'src/app/store/products/products.actions';
import { productsSelector } from 'src/app/store/products/products.selectors';
import { IState } from 'src/app/store/reducers';

@Component({
	selector: 'app-products-list',
	templateUrl: './products-list.component.html',
	styleUrls: ['./products-list.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent implements OnInit, OnChanges, AfterViewInit {
	readonly products$ = this.store$.pipe(select(productsSelector));

	reactiveForm = this.formBuilder.group({
		search: '',
		subcategory: '',
		value: this.formBuilder.group({
			min: 0,
			max: 1000,
		}),
	});

	readonly images: string[] = [
		'http://wallpapers-images.ru/2560x1600/forest/wallpapers/forest-wallpapers-2560x1600-00022.jpg',
		'https://image.winudf.com/v2/image/bWUud2FsbHBhcGEubmF0dXJlX3NjcmVlbl8xNV8xNTMyMzc4MTc1XzA3OQ/screen-15.jpg?fakeurl=1&type=.jpg',
		'https://picfiles.alphacoders.com/305/305132.jpg',
	];

	constructor(private formBuilder: FormBuilder, private store$: Store<IState>) {}

	ngOnInit() {
		// this.productsService.loadProducts();
		console.log('this.ngOnInit');
		this.store$.dispatch(loadProducts());
	}

	ngOnChanges(changes: SimpleChanges): void {
		console.log('changes');
	}

	ngAfterViewInit(): void {
		console.log('After');
	}

	trackByName(index: number, product: { name: string }): string {
		return product.name;
	}
}
