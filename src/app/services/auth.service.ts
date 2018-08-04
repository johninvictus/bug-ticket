import {Injectable} from '@angular/core';
import {Promise} from 'q';
import {AngularFireAuth} from 'angularfire2/auth';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth: AngularFireAuth) {
  }

  register(email: string, password: string) {
    return Promise((resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(email, password)
        .then(userData => resolve(userData), err => reject(err));
    });
  }

  login(email, password) {
    return Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .then(userData => resolve(userData), err => reject(err));
    });
  }

  getAuth() {
    return this.afAuth.authState.pipe(
      map(auth => auth)
    );
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
