import { Component, OnInit } from '@angular/core';
import { AuthService } from '@/common/services/auth.service';
import { TokenService } from '@/common/services/token.service';
import { Router } from '@angular/router';
import { IUser } from 'Interfaces/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public user: IUser;
  constructor(private authService: AuthService,
              private tokenService: TokenService,
              private router: Router) {
  }

  ngOnInit() {
    this.user = this.authService.getCurrentUser();
  }

  logout() {
    this.authService.logout()
      .subscribe(() => {
        this.router.navigate(['/login']);
      }, err => {
        console.log(err);
      });
  }

}
