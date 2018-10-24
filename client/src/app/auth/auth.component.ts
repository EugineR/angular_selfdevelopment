import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

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
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  login() {
    this.authService.authorize(this.loginForm.value)
      .subscribe(() => {
        this.router.navigate(['']);
      }, () => {
      });
  }
}
