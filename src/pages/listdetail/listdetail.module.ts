import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListdetailPage } from './listdetail';

@NgModule({
  declarations: [
    ListdetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ListdetailPage),
  ],
  exports: [
    ListdetailPage
  ]
})
export class ListdetailPageModule {}
