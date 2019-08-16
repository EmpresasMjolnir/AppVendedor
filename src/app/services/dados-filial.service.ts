import { Injectable } from '@angular/core';
import { Filial } from '../model/filial';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DadosFilialService {

  constructor(private bd: AngularFireDatabase) { }

  save(Filial: Filial) {
    return this.bd.list("filial").push(Filial);
  }
  getAll() {
    return this.bd.list<Filial>("filial").snapshotChanges()
      .pipe(
        map(changes =>
          changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
        )
      )
  }
  remove(key: string) {
    return this.bd.object("filial/" + key).remove()
  }
}