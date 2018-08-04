import {Component, OnInit, ViewChild} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('loginForm') form: any;

  constructor(private authService: AuthService,
              private router: Router) {
  }

  loginData: any = {};

  ngOnInit() {
    this.authService.getAuth().subscribe(auth => {
      if (auth) {
        this.router.navigate(['/']);
      }
    });
  }

  login(data: any) {
    this.authService.login(this.loginData.email, this.loginData.password)
      .then(userData => {
        this.router.navigate(['/']);
      }).catch(error => {
      console.log(error);
    });
  }
}
