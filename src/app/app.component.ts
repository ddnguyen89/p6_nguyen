import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';

import { DisplayPage } from '../pages/display/display';
import { AuthService } from '../services/auth';
import { SignInPage } from '../pages/sign-in/sign-in';
import { RegisterPage } from '../pages/register/register';
import { OrderPage } from '../pages/order/order';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = OrderPage;
  signinPage = SignInPage;
  registerPage = RegisterPage
  isAuthenticated = false;
  @ViewChild('nav') nav: NavController;

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen, 
    private authService: AuthService,
    private menuCtrl: MenuController) {
    firebase.initializeApp({
      apiKey: "AIzaSyAKqeEYU_WlI9HQuXNiLXZpIMwEi7ftTAw",
      authDomain: "p5dnguyen.firebaseapp.com",
    })

    firebase.auth().onAuthStateChanged(user => {
      if(user) {
        this.isAuthenticated = true;
      } else {
        this.isAuthenticated = false;
        this.rootPage = SignInPage;
      }
    });
    
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  onLoad(page: any) {
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }

  onLogout() {
    this.authService.logout();
    this.menuCtrl.close();
    this.nav.setRoot(SignInPage);
  }
}

