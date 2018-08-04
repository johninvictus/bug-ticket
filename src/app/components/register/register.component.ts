import {Component, OnInit, ViewChild} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @ViewChild('registrationForm') form: any;

  constructor(private authService: AuthService,
              private router: Router) {
  }

  registerData: any = {};

  ngOnInit() {
    this.authService.getAuth().subscribe(auth => {
      if (auth) {
        this.router.navigate(['/']);
      }
    });
  }

  register(data: any) {
    this.authService.register(this.registerData.email, this.registerData.password)
      .then(userData => {
        this.router.navigate(['/']);
      }).catch(error => {
      console.log(error);
    });
  }
}
