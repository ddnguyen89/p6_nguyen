import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OrderPage } from '../order/order';


@IonicPage()
@Component({
  selector: 'page-thankyou',
  templateUrl: 'thankyou.html',
})
export class ThankyouPage {

  name: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.name = navParams.get("data");
  }

  onOrder() {
    this.navCtrl.push(OrderPage);
  }
}
