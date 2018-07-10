import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../services/auth';
import { DisplayPage } from '../display/display';

@IonicPage()
@Component({
  selector: 'page-order',
  templateUrl: 'order.html'
})
export class OrderPage {

  username: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthService) {
    this.username = navParams.get("data");
  }
}
