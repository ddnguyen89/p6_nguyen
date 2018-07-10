import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignInPage } from '../sign-in/sign-in';
import { RegisterPage } from '../register/register';


@IonicPage()
@Component({
  selector: 'page-display',
  templateUrl: 'display.html',
})
export class DisplayPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DisplayPage');
  }

  onSignIn() {
    this.navCtrl.push(SignInPage);
  }

  onRegister() {
    this.navCtrl.push(RegisterPage);
  }

}
