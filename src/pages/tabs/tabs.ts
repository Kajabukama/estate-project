import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

import { OrdersPage } from '../orders/orders';
import { PropertyPage } from '../property/property';
import { NotificationPage } from '../notification/notification';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})

export class TabsPage {

  // set the root pages for each tab
  tab1Root: any = PropertyPage;
  tab2Root: any = OrdersPage;
  tab3Root: any = NotificationPage;

  mySelectedIndex: number;

  constructor(navParams: NavParams) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }

}
