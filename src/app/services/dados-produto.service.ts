import { Injectable } from '@angular/core';
import { Produto } from '../model/produto';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DadosProdutoService {

  constructor(private bd: AngularFireDatabase) { }

  save(Produto: Produto) {
    return this.bd.list("produto").push(Produto);
  };
  
  getAll() {
    return this.bd.list<Produto>("produto").snapshotChanges()
      .pipe(
        map(changes =>
          changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
        )
      )
  }
  
  remove(key: string) {
    return this.bd.object("produto/" + key).remove()
  }
}
