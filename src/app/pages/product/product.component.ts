import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable, switchMap, tap } from 'rxjs';
import { IProduct } from '../../shared/interfaces/product.interface';
import { ProductsService } from '../../shared/services/products.service';
import { UnsubscribeService } from '../../shared/services/unsubscribe.service';

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [UnsubscribeService],
})
export class ProductComponent implements OnInit {
	product$!: Observable<IProduct>;

	constructor(
		private router: Router,
		private activatedRoute: ActivatedRoute,
		private unsubscribeService: UnsubscribeService,
		private productsService: ProductsService,
	) {}

	ngOnInit(): void {
		// this.product$ = this.activatedRoute.paramMap.pipe(
		// 	map((paramMap) => paramMap.get('id') as string),
		// 	tap((id: string) => {
		// 		this.productsService.loadProduct(id);
		// 	}),
		// 	switchMap((id) =>
		// 		this.productsService.products$.pipe(
		// 			tap(console.log),
		// 			map((products) => products?.find(({ _id }: IProduct) => _id === id)),
		// 		),
		// 	),
		// );
		this.product$ = this.activatedRoute.data.pipe(map(({ product }) => product));
		console.log(this.activatedRoute.snapshot.data);
	}

	onBack() {
		this.router.navigate(['products-list']);
	}
}
