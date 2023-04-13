import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../../common/jwtservice/authentication.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-company-header',
  templateUrl: './company-header.component.html',
  styleUrls: ['./company-header.component.scss']
})
export class CompanyHeaderComponent implements OnInit {

  isShown: boolean = false;
  ishidden: boolean = true;
  // logout=true;
  username: any;
  login: boolean;

  constructor(private router: Router,
    private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.username = sessionStorage.getItem("username");

  }



  logout() {
    this.authService.logOut();
    this.router.navigate(['profile_login']);
  }
}
