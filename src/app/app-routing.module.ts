import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

//import { PreloadService } from './core/services/preload.service';

//import { QuicklinkStrategy } from 'ngx-quicklink';
import {AdminGuard} from "./guards/admin.guard";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./website/website.module').then(m => m.WebsiteModule)
  },
  {
    path: 'admin',
    canActivate: [AdminGuard],
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '**',
    loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
  },
];

@NgModule({
  //imports: [RouterModule.forRoot(routes, {
    //preloadingStrategy: PreloadAllModules // Precarca todos los modulos
    //preloadingStrategy: PreloadService // Implementa nuestra propia estrategía de precarga
    //preloadingStrategy: QuicklinkStrategy // Implementa nuestra estrategía de Quick Link
  //})],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
