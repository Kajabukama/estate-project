import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Storage } from '@ionic/storage';

import { ModalController } from 'ionic-angular';
import { AddlistingPage } from "../addlisting/addlisting";

import { ListingProvider } from "../../providers/listing/listing";

@IonicPage()

@Component({
  selector: 'page-property',
  templateUrl: 'property.html',
})

export class PropertyPage {

    public userid: any;
    public mylisting: any;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public modalCtrl: ModalController,
        private storage: Storage,
        public listing: ListingProvider) {
         this.listing.getlisting();
        this.storage.get('uid').then((value) => {
            this.userid = value;
        })


    }

    ionViewDidLoad() {
      this.listing.getlisting();
    }

    presentModal() {
        let modal = this.modalCtrl.create(AddlistingPage, {uid: this.userid});
        modal.present();
    }

    add(){
        this.presentModal();
    }

     find(id){
       this.listing.listings.filter((item) => {
          if(item.owner_id == id){
            this.mylisting = item;
          }
       })
    }

}
