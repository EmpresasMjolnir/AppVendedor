import { Component, OnInit } from '@angular/core';
import { Dados2FilialService } from 'src/app/services/dados2-filial.service';

@Component({
  selector: 'app-lista-filial',
  templateUrl: './lista-filial.page.html',
  styleUrls: ['./lista-filial.page.scss'],
})
export class ListaFilialPage implements OnInit {

  filial:any = [];

  constructor(private prov: Dados2FilialService) { }

  ngOnInit() {
    this.listaFilial();
  }

  listaFilial(){
    this.prov.getFilial().subscribe(

      data=>{
        let resposta = (data as any)._body;
        resposta = JSON.parse(resposta);
        this.filial =  resposta;
      },
      error=>{
        console.log(error);
      }
    ).add();
  }
}