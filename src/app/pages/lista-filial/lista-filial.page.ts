import { Component, OnInit } from '@angular/core';
import { DadosFilialService } from 'src/app/services/dados-filial.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-lista-filial',
  templateUrl: './lista-filial.page.html',
  styleUrls: ['./lista-filial.page.scss'],
})
export class ListaFilialPage implements OnInit {

  protected filial$: any;


  constructor(private DadosFilialService: DadosFilialService, public alertController: AlertController) { }

  ngOnInit() {
    this.filial$ = this.DadosFilialService.getAll();
  }

  remover(key){
    this.DadosFilialService.remove(key).then(
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