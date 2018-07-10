import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OrderPage } from '../order/order';
import { AuthService } from '../../services/auth';
import { NgForm } from '@angular/forms';
import { AlertController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private authService: AuthService, 
    private alertController: AlertController) {
  }

  onOrder(form: NgForm, username) {
    this.authService.signin(form.value.email, form.value.password)
      .then(data => {
        console.log(data)
        username = username || ""
        this.navCtrl.push(OrderPage, {data: username})
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
