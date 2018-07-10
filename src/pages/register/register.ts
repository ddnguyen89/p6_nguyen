import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../services/auth';
import { NgForm } from '@angular/forms';
import { ThankyouPage } from '../thankyou/thankyou';
import { AlertController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private authService: AuthService, 
    private alertController: AlertController) {
  }

  onRegister(form: NgForm, name) {
    this.authService.signup(form.value.email, form.value.password)
    .then(data => {
      console.log(data)
      name = name || ""
      this.navCtrl.push(ThankyouPage, {data: name})
    })
    .catch(error => {
      console.log(error)
      
      let alert = this.alertController.create({
        title: error,
        buttons: ['OK']
      })

      alert.present()
    });
  }
}
