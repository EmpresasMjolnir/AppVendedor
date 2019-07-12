import { Injectable } from '@angular/core';
import { Produto } from '../model/produto';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class DadosProdutoService {

  constructor(private bd: AngularFireDatabase) { }

  save(Produto: Produto) {
    return this.bd.list("produto").push(Produto);
  }

}
