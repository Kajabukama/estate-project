import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

import { ToastController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

import { LoginPage } from "../login/login";

import { UserProvider } from "../../providers/user/user";

@IonicPage()

@Component({
	selector: 'page-signup',
	templateUrl: 'signup.html',
})

export class SignupPage {

	private account: FormGroup;
	public userid: any;
	public loader: any;

	constructor(
		public navCtrl: NavController,
		private formBuilder: FormBuilder, public user: UserProvider,
		public toastCtrl: ToastController,
		public loadingCtrl: LoadingController) {

		this.account = formBuilder.group({
		firstname: ['', Validators.required ],
		lastname: ['', Validators.required ],
		sex: ['', Validators.required ],
		dob: ['1970-02-19', Validators.required ],
		phone: ['', Validators.required ],
		email: ['', Validators.required],
		password: ['', Validators.required ],
		role: ['', Validators.required ]
	})
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad SignupPage');
	}

	signup(){
		this.presentLoading();

		var status = this.account.value.role;

		this.user.signup(this.account.value)
		.then((res) => {
			this.userid = res;
			if(status === "owner"){
				this.loader.dismiss();
				this.navCtrl.push(LoginPage);
			} else {
				this.loader.dismiss();
            this.navCtrl.push(LoginPage);
			}
		}, error => {
			console.log(JSON.stringify(error.err));
		})
		this.account.reset();
	}

	presentToast(sms) {
		let toast = this.toastCtrl.create({
			message: sms,
			duration: 5000,
			position: 'top'
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
