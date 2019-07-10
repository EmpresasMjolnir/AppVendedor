import { Component, OnInit } from '@angular/core';
import { Vendedor } from 'src/app/model/vendedor';
import { DadosService } from 'src/app/services/dados.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  
  public vendedor: Vendedor;

  constructor(private dados:DadosService, private alertController: AlertController,
    public afAuth: AngularFireAuth,
    public router: Router) {}

  ngOnInit() {
    this.vendedor = new Vendedor;
  }
  
  onSubmit(form) {
    this.afAuth.auth.createUserWithEmailAndPassword(this.vendedor.email, this.vendedor.senha)
      .then(
        res => {
          this.vendedor.email = null;
          this.vendedor.senha = null;
          this.dados.save(this.vendedor, res.user.uid);
          console.log("Cadastrado");
          this.presentAlert("Aviso!", "Usuário cadastrado.");
          this.router.navigate(['/']);
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
