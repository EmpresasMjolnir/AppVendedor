import { Injectable } from '@angular/core';
import { Vendedor } from '../model/vendedor';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  constructor(private bd: AngularFireDatabase) { }

  save(vendedor: Vendedor, id:string) {
    return this.bd.object("vendedor/" + id).set(vendedor);
  }

 // getAll() {
 //   return this.bd.list<Vendedor>("vendedor").snapshotChanges()
  //    .pipe(
  //      map(changes =>
 //         changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
 //       )
 //     )
 // }

  //get(id:string){
 //   return this.bd.object<Vendedor>("vendedor/"+id).snapshotChanges()
 // }
}