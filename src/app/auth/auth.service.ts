import { Injectable, NgZone } from  '@angular/core';
import { Router } from  "@angular/router";
import { auth } from  'firebase/app';
import { AngularFireAuth } from  "@angular/fire/auth";
import { User } from  'firebase';
@Injectable({
    providedIn:  'root'
})
export  class  AuthService {
    user:  User;
    constructor(public ngZone: NgZone, public  afAuth:  AngularFireAuth, public  router:  Router) { 
        this.afAuth.authState.subscribe(user => {
            if (user){
              this.user = user;
              localStorage.setItem('user', JSON.stringify(this.user));
            } else {
              localStorage.setItem('user', null);
            }
          })
    }

    async login(email: string, password: string) {
        return this.afAuth.signInWithEmailAndPassword(email, password)
        .then((result) => {
            this.router.navigate(['/']);
        }).catch((error) => {
          window.alert(error.message)
        });
    }

    async register(email: string, password: string) {
        return this.afAuth.createUserWithEmailAndPassword(email, password)
        .then((result) => {
            this.router.navigate(['/']);
        }).catch((error) => {
          window.alert(error.message)
        });
    }

    async logout(){
        await this.afAuth.signOut();
        localStorage.removeItem('user');
        this.router.navigate(['admin/login']);
    }

    // Sign in with Google
    GoogleAuth() {
        return this.AuthLogin(new auth.GoogleAuthProvider());
    }

    // Auth logic to run auth providers
    AuthLogin(provider) {
        return this.afAuth.signInWithPopup(provider)
        .then((result) => {
            this.ngZone.run(() => {
                this.router.navigate(['/']);
            })
        }).catch((error) => {
            window.alert(error)
        })
    }

    get isLoggedIn(): boolean {
        const  user  =  JSON.parse(localStorage.getItem('user'));
        return  user !==  null;
    }

    public isAuthenticated(): boolean {
        const user = JSON.parse(localStorage.getItem('user'));
        return  user !==  null;
      }
}