import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Storage } from '@ionic/storage';

import { ToastController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

import { ListingProvider } from "../../providers/listing/listing";

@IonicPage()

@Component({
  selector: 'page-listdetail',
  templateUrl: 'listdetail.html',
})

export class ListdetailPage {

    public listid: any;
    public selected: any;
    public client: any;
    public loader: any;

    public id: any;
    public owner: any;
    public category: any;
    public price: any;
    public location: any;
    public description: any;

    constructor(public navCtrl: NavController, public navParams: NavParams, public listing: ListingProvider, public storage: Storage, public toastCtrl: ToastController,
      public loadingCtrl: LoadingController) {

       this.storage.get('uid').then((value) => {
          this.client = value;
         })
    }

    ionViewWillEnter(){
        this.listid = this.navParams.get('lid');
        console.log(this.listid);
        this.find(this.listid);
        console.log(this.selected);

        this.category = this.selected.category;
        this.description = this.selected.description;
        this.location  = this.selected.location;
        this.price = this.selected.price;
        this.id = this.selected.id;
        this.owner = this.selected.owner_id
    }

    find(id){
       this.listing.listings.filter((item) => {
          if(item.id == id){
            this.selected = item;
          }
       })
    }

    book(){
       this.presentLoading();
       var booking = {
          "owner": this.owner,
          "client": this.client,
          "prop": this.id
       }
       this.listing.booking(booking).then((response) => {
          this.loader.dismiss();
          this.presentToast("Request sent successfully");
          this.navCtrl.pop();
          console.log(response);
       })

    }

    presentToast(sms) {
		let toast = this.toastCtrl.create({
			message: sms,
			duration: 3000,
			position: 'middle'
		});
		toast.present();
	}

	presentLoading() {
		this.loader = this.loadingCtrl.create({
			content: "Please wait ...",
			duration: 5000
		});
		this.loader.present();
	}


}
