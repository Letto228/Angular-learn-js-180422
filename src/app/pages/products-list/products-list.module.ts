import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list.component';
import { MatInputModule } from '@angular/material/input';
import { ProductCardComponent } from './product-card/product-card.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { GalleryModule } from '../../shared/directives/gallery/gallery.module';
import { JsonModule } from '../../shared/pipes/json/json.module';
import { ProductsFilterModule } from '../../shared/pipes/products-filter/products-filter.module';
import { LetModule } from '../../shared/directives/let/let.module';
import { ProductsListRoutingModule } from './products-list-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IsStringModule } from '../../shared/validators/directives/is-string/is-string.module';
import { IsStringAsyncModule } from 'src/app/shared/validators/directives/is-string-async/is-string-async.module';
import { CounterInputModule } from 'src/app/shared/inputs/counter-input/counter-input.module';

@NgModule({
	declarations: [ProductsListComponent, ProductCardComponent],
	imports: [
		CommonModule,
		MatInputModule,
		MatProgressSpinnerModule,
		MatIconModule,
		MatButtonModule,
		GalleryModule,
		JsonModule,
		ProductsFilterModule,
		LetModule,
		ProductsListRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		IsStringModule,
		IsStringAsyncModule,
		CounterInputModule,
	],
	exports: [ProductsListComponent],
})
export class ProductsListModule {}
