import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanActivateGuard } from 'src/app/shared/guards/can-activate.guard';
import { CanLeaveGuard } from 'src/app/shared/guards/can-leave.guard';
import { FeedbackGuard } from 'src/app/shared/guards/feedback.guard';
import { ProductResolver } from '../../shared/resolvers/product.resolver';
import { DescriptionComponent } from './description/description.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ProductComponent } from './product.component';

const routes: Routes = [
	{
		path: ':id',
		component: ProductComponent,
		resolve: {
			product: ProductResolver,
		},
		canActivate: [CanActivateGuard],
		children: [
			{
				path: 'description',
				component: DescriptionComponent,
			},
			{
				path: 'feedback',
				canActivate: [FeedbackGuard],
				canDeactivate: [CanLeaveGuard],
				component: FeedbackComponent,
			},
			{
				path: '**',
				redirectTo: 'description',
			},
		],
	},
	// {
	// 	path: '',
	// 	redirectTo: '../products-list',
	// },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ProductRoutingModule {}
