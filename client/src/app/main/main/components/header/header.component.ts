import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../auth/auth.service';
import { TokenService } from '../../../../token/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService,
              private tokenService: TokenService,
              private router: Router) {
  }

  ngOnInit() {
  }

  logout() {
    this.authService.logout()
      .subscribe(() => {
        this.router.navigate(['/login']);
      }, err => {
        console.log(err)
      });
  }

}
