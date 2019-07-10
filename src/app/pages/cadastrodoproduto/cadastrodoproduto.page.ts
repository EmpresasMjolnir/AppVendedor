import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/model/produto';
import { DadosProdutoService } from 'src/app/services/dados-produto.service';

@Component({
  selector: 'app-cadastrodoproduto',
  templateUrl: './cadastrodoproduto.page.html',
  styleUrls: ['./cadastrodoproduto.page.scss'],
})
export class CadastrodoprodutoPage implements OnInit {
  
  private produto:Produto = new Produto;

  constructor(private DadosProduto: DadosProdutoService) { }

  ngOnInit() {
  }
  async registraProduto(){
    await this.DadosProduto.addDados(this.produto).subscribe(
      result=>{
          console.log('gravado com sucesso');
      },
        error => {
          console.error();
      }
    )
  }

}
