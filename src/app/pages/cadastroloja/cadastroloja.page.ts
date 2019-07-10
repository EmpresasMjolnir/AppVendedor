import { Component, OnInit } from '@angular/core';
import { Filial } from 'src/app/model/filial';
import { DadosFilialService } from 'src/app/services/dados-filial.service';

@Component({
  selector: 'app-cadastroloja',
  templateUrl: './cadastroloja.page.html',
  styleUrls: ['./cadastroloja.page.scss'],
})
export class CadastrolojaPage implements OnInit {
  private filial:Filial = new Filial;

  constructor(private DadosFilial: DadosFilialService ) { }

  ngOnInit() {
  }
  async registraFilial(){
    await this.DadosFilial.addDados(this.filial).subscribe(
      result=>{
          console.log('gravado com sucesso');
      },
        error => {
          console.error();
      }
    )
  }
}
