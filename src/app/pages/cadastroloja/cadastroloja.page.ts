import { Component, OnInit } from '@angular/core';
import { Filial } from 'src/app/model/filial';
import { DadosFilialService } from 'src/app/services/dados-filial.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-cadastroloja',
  templateUrl: './cadastroloja.page.html',
  styleUrls: ['./cadastroloja.page.scss'],
})
export class CadastrolojaPage implements OnInit {
  private filial:Filial = new Filial;

  constructor(private DadosFilial: DadosFilialService, private alertController: AlertController,
    public afAuth: AngularFireAuth,
    public router: Router ) { }

  ngOnInit() {
    this.filial = new Filial
  }
  onSubmit(form) {
    this.DadosFilial.save(this.filial)
      .then(
        res => {
          console.log("Cadastrado");
          this.presentAlert("Aviso!", "Produto cadastrado.");
          this.filial = new Filial
        }
        ,
        err => {
          console.log("Epá! Não foi cadastrado!" + err);
          this.presentAlert("Erro!", "Epá! Não foi cadastrado!");
        }
      ).catch(
        erros => {
          console.log("Erro ao conectar no sistema! " + erros);
          this.presentAlert("Erro!", "Erro ao conectar no sistema!");
        }
      )
  }
   //Alerts -------------------------------
   async presentAlert(titulo: string, texto: string) {
    const alert = await this.alertController.create({
      header: titulo,
      // subHeader: 'Subtitle',
      message: texto,
      buttons: ['OK']
    });
    await alert.present();
  }
}
