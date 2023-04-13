import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../jwtservice/authentication.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements CanActivate {
  isShown: boolean = false;
  ishidden: boolean = true;
  // logout=true;
  username: any;
  login: boolean;

  constructor(private router: Router,
    private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.username = sessionStorage.getItem("username");
    if (this.username != null) {
      this.login = true;
    } else {
      this.login = false;
    }
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    if (this.authService.isUserLoggedIn()) {
      return true
    }
  }

  logout() {
    this.authService.logOut();
    this.router.navigate(['profile_login']);
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Logout',
      showConfirmButton: false,
      timer: 1000
    })
  }
}
