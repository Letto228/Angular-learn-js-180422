import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CanActivateGuard } from './shared/guards/can-activate.guard';
import { CanLoadGuard } from './shared/guards/can-load.guard';
import { ProductResolver } from './shared/resolvers/product.resolver';

const routes: Routes = [
	{
		path: 'products-list',
		loadChildren: () => import('./pages/products-list/products-list.module').then((m) => m.ProductsListModule),
	},
	{
		path: 'product',
		// canActivate: [CanActivateGuard],
		// canLoad: [CanLoadGuard],
		loadChildren: () => import('./pages/product/product.module').then((m) => m.ProductModule),
	},
	{
		path: '',
		redirectTo: '/products-list',
		pathMatch: 'full',
	},
	{
		path: '**',
		component: NotFoundComponent,
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
