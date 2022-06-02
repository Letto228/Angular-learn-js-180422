import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { filter, map, Observable, switchMap, takeUntil, tap } from 'rxjs';
import { loadProductById } from 'src/app/store/products/products.actions';
import { productByIdSelector } from 'src/app/store/products/products.selectors';
import { IState } from 'src/app/store/reducers';
import { IProduct } from '../../shared/interfaces/product.interface';
import { UnsubscribeService } from '../../shared/services/unsubscribe.service';
import { MatDialog } from '@angular/material/dialog';
import { ProductDialogComponent } from './product-dialog/product-dialog.component';

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [UnsubscribeService],
})
export class ProductComponent implements OnInit {
	product$!: Observable<IProduct | undefined>;

	constructor(
		private router: Router,
		private activatedRoute: ActivatedRoute,
		private unsubscribeService: UnsubscribeService,
		private store$: Store<IState>,
		private dialog: MatDialog,
	) {}

	ngOnInit(): void {
		this.initProductsStream();
		this.listenOpenDialogByQueryParams();
	}

	private initProductsStream() {
		this.product$ = this.activatedRoute.paramMap.pipe(
			map((paramMap) => paramMap.get('id') as string),
			tap((id: string) => {
				// this.productsService.loadProduct(id);
				this.store$.dispatch(loadProductById(id));
			}),
			switchMap((id) => this.store$.pipe(select(productByIdSelector(id)))),
		);
	}

	private listenOpenDialogByQueryParams() {
		this.activatedRoute.queryParamMap
			.pipe(
				map((queryParamMap) => queryParamMap.get('isDialogOpened') === 'true'),
				filter(Boolean),
				takeUntil(this.unsubscribeService.unsuscribe$),
			)
			.subscribe(() => {
				this.onOpenDialog();
			});
	}

	onOpenDialog() {
		const dialogRef = this.dialog.open(ProductDialogComponent, {
			width: '250px',
			data: {
				name: 'Egor',
			},
		});

		dialogRef.afterClosed().subscribe((result) => {
			console.log('The dialog was closed', result);
			this.router.navigate(['./'], { relativeTo: this.activatedRoute });
		});
	}
}
