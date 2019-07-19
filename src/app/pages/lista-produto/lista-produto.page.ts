import { Component, OnInit } from '@angular/core';
import { Dados2ProdutosService } from 'src/app/services/dados2-produtos.service';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.page.html',
  styleUrls: ['./lista-produto.page.scss'],
})
export class ListaProdutoPage implements OnInit {

  produtos:any = [];

  constructor(private prov: Dados2ProdutosService) { }

  ngOnInit() {
    //this.listaProduto();
  }

 // listaProduto(){
  //  this.prov.getProdutos().subscribe(

//      data=>{
      //  let resposta = (data as any)._body;
        //resposta = JSON.parse(resposta);
        //this.produtos =  resposta;
      //},
      //error=>{
       // console.log(error);
      //}
    //).add();
  //}
}