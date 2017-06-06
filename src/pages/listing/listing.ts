import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ListdetailPage } from "../listdetail/listdetail";

import { ListingProvider } from "../../providers/listing/listing";

@IonicPage()

@Component({
  selector: 'page-listing',
  templateUrl: 'listing.html',
})

export class ListingPage {

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public listing: ListingProvider) {
           this.listing.getlisting();
    }

    ionViewDidEnter() {

    }


    details(id: any){
        this.navCtrl.push(ListdetailPage, {lid:id});
    }

}
