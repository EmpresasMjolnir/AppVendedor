import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Lista Filial',
      url: '/lista-filial',
      icon: 'list'
    },
    {
      title: 'Lista Produto',
      url: '/lista-produto',
      icon: 'list'
    },
    {
      title: 'Cadastro Produto',
      url: '/cadastrodoproduto',
      icon: 'add-circle-outline'
    },
    {
      title: 'Cadastro Filial',
      url: '/cadastroloja',
      icon: 'add-circle-outline'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}