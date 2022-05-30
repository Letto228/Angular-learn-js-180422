import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, NgForm, ValidationErrors, Validators } from '@angular/forms';
import { debounce, debounceTime, map, Observable, of, startWith, tap } from 'rxjs';
import { isStringAsyncValidator } from 'src/app/shared/validators/is-string-async.validator';
import { isStringValidator } from 'src/app/shared/validators/is-string.validator';
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

	reactiveForm = this.formBuilder.group({
		search: new FormControl('Item', {
			validators: [Validators.required],
			asyncValidators: [this.isStringAsyncValidator.bind(this)],
		}),
		subcategory: ['', [Validators.required], [this.isStringAsyncValidator.bind(this)]],
		value: this.formBuilder.group({
			// min: [{value: 0, disabled: true}],
			min: 0,
			max: 1000,
		}),
	});
	reactiveControl = new FormControl('Item', {
		validators: [Validators.required],
		asyncValidators: [this.isStringAsyncValidator.bind(this)],
	});
	errors$: Observable<Object> = of({});

	images: string[] = [
		'http://wallpapers-images.ru/2560x1600/forest/wallpapers/forest-wallpapers-2560x1600-00022.jpg',
		'https://image.winudf.com/v2/image/bWUud2FsbHBhcGEubmF0dXJlX3NjcmVlbl8xNV8xNTMyMzc4MTc1XzA3OQ/screen-15.jpg?fakeurl=1&type=.jpg',
		'https://picfiles.alphacoders.com/305/305132.jpg',
	];

	constructor(
		private productsService: ProductsService, // @Optional() @Host() @Inject(COMPONENT_NAME_TOKEN) private name: number,
		private cd: ChangeDetectorRef,
		private formBuilder: FormBuilder,
	) {}

	ngOnInit() {
		this.productsService.loadProducts();
		this.listenFormChange();

		// setTimeout(() => {
		// 	this.reactiveForm.patchValue({
		// 		value: {
		// 			min: 100,
		// 		}
		// 	})
		// }, 1000)

		// setTimeout(() => {
		// 	this.reactiveForm.get(['value', 'min'])?.enable();
		// this.reactiveForm.setValue({
		// 	search: '',
		// 	subcategory: 'subcategory',
		// 	value: {
		// 		max: 2000,
		// 		min: 0,
		// 	}
		// })
		// }, 5000)
	}

	trackByName(index: number, product: { name: string }): string {
		return product.name;
	}

	onLog(form: NgForm) {
		console.log(form);
		console.log(form.value);
	}

	private listenFormChange() {
		this.reactiveForm.get('value')?.valueChanges.pipe(debounceTime(300)).subscribe(console.log);
	}

	private isStringAsyncValidator(control: AbstractControl): Observable<ValidationErrors | null> {
		return isStringAsyncValidator(control).pipe(
			tap(() => {
				this.cd.markForCheck();
			}),
		);
	}
}
