import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class ListingProvider {

    public added: any;
    public listings: any;

    constructor(public http: Http) {
       this.getlisting();
    }

    add(listing){
        if (this.added) {
            return Promise.resolve(this.added);
        }

        return new Promise(resolve => {
            this.http.post('http://realestate.infoconsultancy.com/addlisting.php', listing)
            .map((res) => res.json())
            .subscribe((data) => {
                this.added = data;
                resolve(this.added);
            });
        });
    }

    getlisting(){
        if (this.listings) {
            return Promise.resolve(this.listings);
        }

        return new Promise(resolve => {
            this.http.get('http://realestate.infoconsultancy.com/listings.php')
            .map((res) => res.json())
            .subscribe((data) => {
                this.listings = data;
                resolve(this.listings);
            });
        });
    }

    booking(booking){
        if (this.added) {
            return Promise.resolve(this.added);
        }

        return new Promise(resolve => {
           var baseurl = 'http://realestate.infoconsultancy.com/booking.php'
            this.http.post(baseurl, booking)
            .map((res) => res.json())
            .subscribe((data) => {
                this.added = data;
                resolve(this.added);
            });
        });
    }


}
