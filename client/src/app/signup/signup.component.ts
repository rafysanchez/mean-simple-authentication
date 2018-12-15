import { Component, OnInit } from '@angular/core';

import { AuthService } from '../services/auth.service';

import { Router, Route } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user = {};
  token = '';

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  signUp() {
    this.auth.signUp(this.user)
      .subscribe(
        res => {
          this.token = res['token'];
          localStorage.setItem('token', this.token);
          this.router.navigate(['/users']);
        },
        err => console.log(err)
      );
  }

}
