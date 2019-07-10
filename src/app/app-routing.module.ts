import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  { path: 'cadastro', loadChildren: './pages/cadastro/cadastro.module#CadastroPageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'perfil', loadChildren: './pages/perfil/perfil.module#PerfilPageModule' },
  { path: 'cadastrodoproduto', loadChildren: './pages/cadastrodoproduto/cadastrodoproduto.module#CadastrodoprodutoPageModule' },
  { path: 'cadastroloja', loadChildren: './pages/cadastroloja/cadastroloja.module#CadastrolojaPageModule' },
  { path: 'lista-filial', loadChildren: './pages/lista-filial/lista-filial.module#ListaFilialPageModule' },
  { path: 'lista-produto', loadChildren: './pages/lista-produto/lista-produto.module#ListaProdutoPageModule' },
  { path: 'produto-details', loadChildren: './pages/produto-details/produto-details.module#ProdutoDetailsPageModule' },
  { path: 'filial-details', loadChildren: './pages/filial-details/filial-details.module#FilialDetailsPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
