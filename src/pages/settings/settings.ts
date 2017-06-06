import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { LoginPage } from "../login/login";

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})

export class SettingsPage {

  constructor(public navCtrl: NavController, private storage: Storage) {
  }

  ionViewDidLoad() {

  }

  clear(){
   this.storage.clear().then(() =>{
      this.navCtrl.setRoot(LoginPage);
   });
  }

}
