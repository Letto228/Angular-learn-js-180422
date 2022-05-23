import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
	selector: 'app-product-card',
	templateUrl: './product-card.component.html',
	styleUrls: ['./product-card.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [
		// {
		// 	provide: COMPONENT_NAME_TOKEN,
		// 	useValue: 'ProductCardComponent',
		// }
	],
})
export class ProductCardComponent {
	@Input() product!: { name: string };

	// constructor(
	// 	@Optional() @Self() @Inject(COMPONENT_NAME_TOKEN) private name: string,
	// 	@Optional() @SkipSelf() @Inject(COMPONENT_NAME_TOKEN) private parentName: string,
	// ) {
	// 	console.log(this.name);
	// 	console.log(this.parentName);
	// }
}
