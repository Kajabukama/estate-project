import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

import { BookingPage } from '../booking/booking';
import { ListingPage } from '../listing/listing';
import { NotifyPage } from '../notify/notify';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})

export class TabsClient {

  // set the root pages for each tab
  tab1Root: any = ListingPage;
  tab2Root: any = BookingPage;
  tab3Root: any = NotifyPage;

  mySelectedIndex: number;

  constructor(navParams: NavParams) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }

}
