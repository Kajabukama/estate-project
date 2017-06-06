import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { Storage } from '@ionic/storage';
import { ToastController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

import { UserProvider } from "../../providers/user/user";

import { TabsClient } from "../tabsclient/tabs";
import { SignupPage } from "../signup/signup";
import { TabsPage } from "../tabs/tabs";

@IonicPage()

@Component({
	selector: 'page-login',
	templateUrl: 'login.html',
})
export class LoginPage {

	private account: FormGroup;
    public isLogged: any;
    public loader: any;

	constructor(
      public navCtrl: NavController,
      private formBuilder: FormBuilder,
      public user: UserProvider,
      private storage: Storage,
      public toastCtrl: ToastController,
		public loadingCtrl: LoadingController) {

		this.account = formBuilder.group({
			email: ['', Validators.required ],
			password: ['', Validators.required ]
		})

	}

	ionViewCanEnter() {

		this.storage.get('role').then((val) => {

			if(val != null){
				if(val === 'owner'){
                    this.navCtrl.setRoot(TabsPage);
                } else {
                    this.navCtrl.setRoot(TabsClient);
                }
			}

		});
	}

	login(){
      this.presentLoading();
		this.user.authenticate(this.account.value)
		.then((res) => {
            console.log(res);
            if(res.status == true){
               this.storage.set('role', res.role);
               this.storage.set('uid', res.id);

               if(res.role == "client"){
                  this.loader.dismiss();
                  this.navCtrl.setRoot(TabsClient);
               } else {
                  this.loader.dismiss();
                  this.navCtrl.setRoot(TabsPage);
               }
            } else {
               this.loader.dismiss();
               this.presentToast(res.message);
            }


        })

		console.log(this.account.value);
		this.account.reset();
	}

  signup(){
	this.navCtrl.push(SignupPage)
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
			content: "Authenticating ...",
			duration: 5000
		});
		this.loader.present();
	}

}
