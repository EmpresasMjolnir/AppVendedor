import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CadastrodoprodutoPage } from './cadastrodoproduto.page';

const routes: Routes = [
  {
    path: '',
    component: CadastrodoprodutoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CadastrodoprodutoPage]
})
export class CadastrodoprodutoPageModule {}
