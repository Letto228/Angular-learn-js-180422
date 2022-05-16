import { Component, OnInit, ChangeDetectionStrategy, Input, ChangeDetectorRef } from '@angular/core';
import { json } from './utils';

@Component({
	selector: 'app-product-card',
	templateUrl: './product-card.component.html',
	styleUrls: ['./product-card.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent implements OnInit {
	@Input() product!: { name: string };

	constructor(private changeDetectorRef: ChangeDetectorRef) {}

	ngOnInit() {
		setInterval(() => {
			this.changeDetectorRef.detectChanges();
		}, 500);
	}

	json(product: Object) {
		console.log('called');
		return json(product);
	}
}
