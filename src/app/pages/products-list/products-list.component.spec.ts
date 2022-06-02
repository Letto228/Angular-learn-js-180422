// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { RouterTestingModule } from '@angular/router/testing';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MockStore, provideMockStore } from '@ngrx/store/testing';

// import { ProductsListComponent } from './products-list.component';
// import { ProductsListModule } from './products-list.module';
// import { productsSelector } from 'src/app/store/products/products.selectors';
// import { productsMock } from 'src/app/mocks/products.mock';
// import { MemoizedSelector } from '@ngrx/store';
// import { IProduct } from 'src/app/shared/interfaces/product.interface';
// import { IState } from 'src/app/store/reducers';
// import { loadProducts } from 'src/app/store/products/products.actions';
// import { take } from 'rxjs';
// import { By } from '@angular/platform-browser';

// xdescribe('ProductsListComponent', () => {
// 	let component: ProductsListComponent;
// 	let fixture: ComponentFixture<ProductsListComponent>;
//     let mockStore: MockStore;
//     // let productsSelectorMock: MemoizedSelector<IState, IProduct[]>;
//     let dispatchSpy: jasmine.Spy;

// 	beforeEach(async () => {
// 		await TestBed.configureTestingModule({
// 			imports: [
//                 ProductsListModule,
//                 BrowserAnimationsModule,
//                 RouterTestingModule,
//             ],
//             providers: [
//                 provideMockStore(),
//             ]
// 		}).compileComponents();
// 	});

// 	beforeEach(() => {
//         mockStore = TestBed.inject(MockStore);

//         // productsSelectorMock = mockStore.overrideSelector(
//         mockStore.overrideSelector(
//             productsSelector as MemoizedSelector<IState, IProduct[]>,
//             productsMock,
//         );

//         dispatchSpy = spyOn(mockStore, 'dispatch');

// 		fixture = TestBed.createComponent(ProductsListComponent);
// 		component = fixture.componentInstance;

// 		fixture.detectChanges();
// 	});

// 	it('should create', () => {
// 		expect(component).toBeTruthy();
// 	});

// 	it('Load products', () => {
// 		expect(dispatchSpy).toHaveBeenCalledWith(loadProducts());
// 	});

// 	it('Load products', () => {
// 		component.products$.pipe(take(1)).subscribe(value => {
//             expect(value[0].name).toEqual(productsMock[0].name);
//         })
// 	});

// 	it('Load products integration', () => {
// 		const debugElement = fixture.debugElement;

//         const firstCard: HTMLElement = debugElement
//             .queryAll(By.css('[automation-id="product-card"]'))[0]
//             .nativeElement;

//         expect(firstCard.innerText).toEqual(productsMock[0].name)
// 	});
// });
