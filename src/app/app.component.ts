import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListingPage } from '../pages/listing/listing';
import { LoginPage } from "../pages/login/login";
import { ProfilePage } from "../pages/profile/profile";

import { AboutPage } from "../pages/about/about";
import { TermsPage } from "../pages/terms/terms";
import { SettingsPage } from "../pages/settings/settings";

import { ListingProvider } from "../providers/listing/listing";
import { UserProvider } from "../providers/user/user";

@Component({
  templateUrl: 'app.html'
})

export class MyApp {

    @ViewChild(Nav) nav: Nav;

    rootPage: any = LoginPage;

    pages: Array<{title: string, component: any, icon: string}>;
    extra: Array<{title: string, component: any, icon: string}>;

    constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public listing: ListingProvider, public user:UserProvider) {

        this.initializeApp();

        this.pages = [
        { title: 'Profile', component: ProfilePage, icon:"contact" },
        { title: 'Home', component: ListingPage, icon: "home" }
        ];

        this.extra = [
        { title: 'About', component: AboutPage, icon:"help-circle" },
        { title: 'Terms & Conditions', component: TermsPage, icon: "book" },
        { title: 'Settings', component: SettingsPage, icon: "settings" },
        ];

    }

    initializeApp() {
        this.platform.ready().then(() => {
           this.statusBar.styleDefault();
           this.splashScreen.hide();
           this.listing.getlisting();
           console.log(this.listing.listings);
           this.user.getAllUsers();
        });
    }



    openPage(page) {
        this.nav.push(page.component);
    }

    openOther(page) {
        this.nav.push(page.component);
    }
}
