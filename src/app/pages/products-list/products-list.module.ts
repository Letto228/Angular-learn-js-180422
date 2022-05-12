import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list.component';
import { MatInputModule } from '@angular/material/input';
import { ProductCardComponent } from './product-card/product-card.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
	declarations: [ProductsListComponent, ProductCardComponent],
	imports: [CommonModule, MatInputModule, MatProgressSpinnerModule],
	exports: [ProductsListComponent],
})
export class ProductsListModule {}
