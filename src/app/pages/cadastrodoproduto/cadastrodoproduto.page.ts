import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/model/produto';
import { DadosProdutoService } from 'src/app/services/dados-produto.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { DadosFilialService } from 'src/app/services/dados-filial.service';

@Component({
  selector: 'app-cadastrodoproduto',
  templateUrl: './cadastrodoproduto.page.html',
  styleUrls: ['./cadastrodoproduto.page.scss'],
})
export class CadastrodoprodutoPage implements OnInit {
  
  private produto:Produto = new Produto;
  protected filial$: any;

  constructor(private DadosProduto: DadosProdutoService, private alertController: AlertController,
    public afAuth: AngularFireAuth,
    public router: Router) {}

  ngOnInit() {
      this.produto = new Produto
  }
  onSubmit(form) {
    this.DadosProduto.save(this.produto)
      .then(
        res => {
          console.log("Cadastrado");
          this.presentAlert("Aviso!", "Produto cadastrado.");
          this.produto = new Produto
        },
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