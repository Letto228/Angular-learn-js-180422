import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { SidenavModule } from './components/sidenav/sidenav.module';
import { NgClassModule } from './shared/directives/ng-class/ng-class.module';
import { ClickShadowModule } from './shared/directives/click-shadow/click-shadow.module';
import { ProductsListModule } from './pages/products-list/products-list.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BaseUrlInterceptor } from './shared/interceptors/base-url.interceptor';
import { MapResponceInterceptor } from './shared/interceptors/map-responce.interceptor';

@NgModule({
	declarations: [AppComponent, HeaderComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatToolbarModule,
		MatIconModule,
		MatButtonModule,
		SidenavModule,
		MatListModule,
		NgClassModule,
		ClickShadowModule,
		ProductsListModule,
		HttpClientModule,
		// ...
	],
	providers: [
		// ProductsService,
		// {
		// provide: ProductsService,
		// useClass: ProductsService,
		// useValue: {loadProducts() {}, products$: of()},
		// useFactory: (productsApiService: ProductsApiService) => new ProductsService(productsApiService),
		// deps: [ProductsApiService],
		// },
		// {
		// 	provide: BASE_URL,
		// 	useValue: 'https://course-angular.javascript.ru/api',
		// }
		{
			provide: HTTP_INTERCEPTORS,
			useClass: BaseUrlInterceptor,
			multi: true,
		},
		{
			provide: HTTP_INTERCEPTORS,
			useClass: MapResponceInterceptor,
			multi: true,
		},
	],
	bootstrap: [AppComponent],
})
export class AppModule {}

// NullInjector
// ^
// |
// PlatformInjector
// ^
// |
// RootInjector(=== AppModuleInjector)
