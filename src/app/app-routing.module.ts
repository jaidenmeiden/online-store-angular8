import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LayoutComponent} from "./components/layout/layout.component";
import {ProductsComponent} from './components/products/products.component';
import {ProductDetailComponent} from "./components/product-detail/product-detail.component";
import {ContactComponent} from './components/contact/contact.component';
import {DemoComponent} from "./components/demo/demo.component";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'products',
        component: ProductsComponent
      },
      {
        path: 'products/:id',
        component: ProductDetailComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      }
    ]
  },
  {
    path: 'demo',
    component: DemoComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
