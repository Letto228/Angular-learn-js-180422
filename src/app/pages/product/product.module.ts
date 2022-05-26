import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { DescriptionComponent } from './description/description.component';
import { FeedbackComponent } from './feedback/feedback.component';

@NgModule({
	declarations: [ProductComponent, DescriptionComponent, FeedbackComponent],
	imports: [CommonModule, ProductRoutingModule, MatButtonModule, MatIconModule, MatTabsModule],
})
export class ProductModule {}
