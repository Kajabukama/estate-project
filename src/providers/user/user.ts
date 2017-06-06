import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class UserProvider {

    public logged: any;
    public registered: any;
    public users: any;

    constructor(public http: Http) {
        this.getAllUsers();
    }

    signup(user){
        if (this.registered) {
            return Promise.resolve(this.registered);
        }

        return new Promise(resolve => {
        this.http.post('http://realestate.infoconsultancy.com/signup.php', user)
            .map((res) => res.json())
            .subscribe((data) => {
                this.registered = data.id;
                resolve(this.registered);
            });
        });
    }

    authenticate(user) {
        if (this.logged) {
            return Promise.resolve(this.logged);
        }

        return new Promise(resolve => {
            this.http.post('http://realestate.infoconsultancy.com/signin.php', user)
            .map((res) => res.json())
            .subscribe((data) => {
                this.logged = data;
                resolve(this.logged);
            });
        });
    }

    getAllUsers(){
        if (this.users) {
            return Promise.resolve(this.users);
        }

        return new Promise(resolve => {
            this.http.get('http://realestate.infoconsultancy.com/users.php')
            .map((res) => res.json())
            .subscribe((data) => {
                this.users = data;
                resolve(this.users);
            });
        });
    }

    allUsers(){
      this.http.get('http://realestate.infoconsultancy.com/users.php')
         .map((res) => res.json())
         .subscribe((data) => {
            this.users = data;
         });
    }



}
