import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { Storage } from '@ionic/storage';
import { UserProvider } from "../../providers/user/user";

@IonicPage()

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})

export class ProfilePage {
   public user: any;
   public uid: any;

   public firstname: any;
   public lastname: any;
   public sex: any;
   public phone: any;
   public email: any;
   public role: any;

   constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      private storage: Storage,
      public _user: UserProvider) {

   }

   ionViewDidLoad() {
         this.storage.get('uid').then((val) => {
            if(val != null){
               this.storage.get('uid').then((value) => {
                  this.uid = value;
                  this.find(this.uid);
               })
            }

         });
      }

      find(id){
         this._user.users.filter((item) => {
            if(item.id == id){
               this.user = item;
            }
         })
      }

}
