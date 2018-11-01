import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenService } from '../token/token.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  public loginForm: FormGroup = this.formBuilder.group({
    'login': ['', [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('^[a-zA-Z]+$')]],
    'password': ['', [Validators.required]]
  });

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private tokenService: TokenService
  ) {
  }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.loginForm.value)
      .subscribe(res => {
        this.tokenService.setToken(res.headers.get('session-token'));
        this.router.navigate([this.route.snapshot.queryParams.returnUrl]);
      }, err => {
        console.log(err)
      });
  }
}
