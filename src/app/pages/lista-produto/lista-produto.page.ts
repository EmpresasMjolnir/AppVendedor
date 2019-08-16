import { Component, OnInit } from '@angular/core';
import { DadosProdutoService } from 'src/app/services/dados-produto.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.page.html',
  styleUrls: ['./lista-produto.page.scss'],
})
export class ListaProdutoPage implements OnInit {

  protected produto$: any;

  constructor(
    private DadosProdutoService: DadosProdutoService, public alertController: AlertController
  ) { }

  ngOnInit() {
    this.produto$ = this.DadosProdutoService.getAll();
  }
  
  remover(key){
    this.DadosProdutoService.remove(key).then(
      res=>{
        this.presentAlert("Aviso!", "Usuario apagado!");
      },
      err=>{
        this.presentAlert("Erro!", "Não foi possivel apagar o usuario!");
      }
    )
  }
  async presentAlert(titulo: string, texto: string) {
    const alert = await this.alertController.create({
      header: titulo,
      //subHeader: 'Subtitle',
      message: texto,
      buttons: ['OK']
    });

    await alert.present();
  }

}