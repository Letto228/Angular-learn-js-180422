import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SidenavModule } from './components/sidenav/sidenav.module';
import { NgClassModule } from './shared/directives/ng-class/ng-class.module';
import { ClickShadowModule } from './shared/directives/click-shadow/click-shadow.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BaseUrlInterceptor } from './shared/interceptors/base-url.interceptor';
import { MapResponceInterceptor } from './shared/interceptors/map-responce.interceptor';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
	declarations: [AppComponent, HeaderComponent, NotFoundComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatToolbarModule,
		MatIconModule,
		MatButtonModule,
		SidenavModule,
		NgClassModule,
		ClickShadowModule,
		HttpClientModule,
	],
	providers: [
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

// ^								// ^
// |								// |

// ProductsListModuleInjector | ProductModuleInjector

// ^							// ^
// |							// |

// AppElementInjector			ProductElementInjector
// ^
// |
// ProductsListElementInjector
// ^
// |
// ProductCardElementInjector
