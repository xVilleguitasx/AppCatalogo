import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'editar',
    loadChildren: () => import('./pages/editar/editar.module').then( m => m.EditarPageModule)
  },
  {
    path: 'carrito',
    loadChildren: () => import('./pages/carrito/carrito.module').then( m => m.CarritoPageModule)
  },
  {
    path: 'finalizar',
    loadChildren: () => import('./pages/finalizar/finalizar.module').then( m => m.FinalizarPageModule)
  },
  {
    path: 'modal-producto',
    loadChildren: () => import('./pages/modal-producto/modal-producto.module').then( m => m.ModalProductoPageModule)
  },
  {
    path: 'productos-categoria/:categoria',
    loadChildren: () => import('./pages/productos-categoria/productos-categoria.module').then( m => m.ProductosCategoriaPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./pages/admin/admin.module').then( m => m.AdminPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
