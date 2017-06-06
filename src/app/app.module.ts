import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { HttpModule } from '@angular/http';

import { IonicStorageModule } from '@ionic/storage';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ProfilePage } from '../pages/profile/profile';
import { SignupPage } from "../pages/signup/signup";
import { LoginPage } from "../pages/login/login";
import { AddlistingPage } from "../pages/addlisting/addlisting";
import { ListingPage } from "../pages/listing/listing";

import { TabsPage } from "../pages/tabs/tabs";
import { TabsClient } from "../pages/tabsclient/tabs";

import { AboutPage } from "../pages/about/about";
import { TermsPage } from "../pages/terms/terms";
import { SettingsPage } from "../pages/settings/settings";

import { OrdersPage } from '../pages/orders/orders';
import { PropertyPage } from '../pages/property/property';
import { NotificationPage } from '../pages/notification/notification';
import { NotifyPage } from '../pages/notify/notify';
import { ListdetailPage } from "../pages/listdetail/listdetail";
import { BookingPage } from "../pages/booking/booking";


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { UserProvider } from '../providers/user/user';
import { ListingProvider } from '../providers/listing/listing';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProfilePage,
    SignupPage,
    LoginPage,
    AddlistingPage,
    ListingPage,
    AboutPage,
    TermsPage,
    SettingsPage,
    OrdersPage,
    NotificationPage,
    NotifyPage,
    PropertyPage,
    TabsPage,
    TabsClient,
    ListdetailPage,
    BookingPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProfilePage,
    SignupPage,
    LoginPage,
    AddlistingPage,
    ListingPage,
    AboutPage,
    TermsPage,
    SettingsPage,
    OrdersPage,
    NotificationPage,
    NotifyPage,
    PropertyPage,
    TabsPage,
    TabsClient,
    ListdetailPage,
    BookingPage
  ],
  providers: [
    Camera,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider,
    ListingProvider
  ]
})
export class AppModule {}
