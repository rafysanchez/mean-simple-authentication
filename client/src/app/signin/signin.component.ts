import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  user = {};
  token = '';

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  signIn() {
    this.auth.signIn(this.user)
      .subscribe(
        res => {
          this.token = res['token'];
          localStorage.setItem('token', this.token);
          this.router.navigate(['/users']);
        },
        err => console.log(err)
      )
  }

}
