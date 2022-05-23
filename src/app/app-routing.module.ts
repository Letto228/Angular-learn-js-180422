import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { ProductsListModule } from './pages/products-list/products-list.module';

const routes: Routes = [
	{
		path: 'products-list',
		// component: ProductsListComponent,
		loadChildren: () => import('./pages/products-list/products-list.module').then((m) => m.ProductsListModule),
	},
	{
		path: 'product',
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
