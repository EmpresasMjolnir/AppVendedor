import { Injectable } from '@angular/core';
import { Filial } from '../model/filial';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class DadosFilialService {

  constructor(private bd: AngularFireDatabase) { }

  save(Filial: Filial) {
    return this.bd.list("produto").push(Filial);
  }
}