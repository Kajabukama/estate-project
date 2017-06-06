import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { Storage } from '@ionic/storage';

import { ToastController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

import { ListingProvider } from "../../providers/listing/listing";

@IonicPage()

@Component({
  selector: 'page-addlisting',
  templateUrl: 'addlisting.html',
})
export class AddlistingPage {

  private listing: FormGroup;
  public userid: number;
  public loader: any;

  constructor(
      private formBuilder: FormBuilder, public _listing: ListingProvider,
      public viewCtrl: ViewController, public nav: NavParams,
      private storage: Storage, public toastCtrl: ToastController,
      public loadingCtrl: LoadingController) {

    this.storage.get('uid').then((value) =>{
        this.userid = value;
        console.log(this.userid);
    })


    this.listing = formBuilder.group({

        category: ['', Validators.required ],
        type: ['', Validators.required ],
        price: ['', Validators.required ],
        location: ['', Validators.required ],
        address: ['', Validators.required ],
        description: ['', Validators.required ],
        owner: [this.nav.get('uid')]
    })
  }

  addlisting(){

      this.presentLoading();

      this._listing.add(this.listing.value)
      .then((res) => {
          this.loader.dismiss();
          this.dismiss();
          console.log(res);
        }, error => {
            console.log(JSON.stringify(error.err));
        })
		this.listing.reset();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  presentToast(sms) {
		let toast = this.toastCtrl.create({
			message: sms,
			duration: 4000,
			position: 'top'
		});
		toast.present();
	}

	presentLoading() {
		this.loader = this.loadingCtrl.create({
			content: "Please wait ...",
			duration: 4000
		});
		this.loader.present();
	}

}
