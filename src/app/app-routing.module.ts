import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomersComponent } from './components/customers/customers.component';
import { ProductsComponent } from './components/products/products.component';
import { SearchComponent } from './components/search/search.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'customers', component: CustomersComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'search', component: SearchComponent },
  { path: '',   redirectTo: '/customers', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
