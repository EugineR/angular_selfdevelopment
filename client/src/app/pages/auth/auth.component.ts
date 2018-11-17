import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'Services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  public loginControl: FormControl;
  public passwordControl: FormControl;
  public loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.initLoginForm();
  }

  public login() {
    this.authService.login(this.loginForm.value)
      .subscribe(() => {
        this.router.navigate([this.route.snapshot.queryParams.returnUrl || '']);
      }, err => {
        console.log(err);
      });
  }

  private initLoginForm() {
    this.loginControl = new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('^[a-zA-Z]+$')
    ]);
    this.passwordControl = new FormControl('', [Validators.required]);
    this.loginForm = this.formBuilder.group({
      login: this.loginControl,
      password: this.passwordControl
    });
  }
}
