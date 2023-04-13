import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthenticationService } from '../../common/jwtservice/authentication.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-profile-login',
  templateUrl: './profile-login.component.html',
  styleUrls: ['./profile-login.component.scss']
})
export class ProfileLoginComponent implements OnInit {

  myform = new FormGroup({
    username : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required),
  });

  get username() { return this.myform.get("username")}
  get password() { return this.myform.get("password")}

  // myform : FormGroup;
  invalidLogin = false;

  error:any;
  
  constructor(private fb: FormBuilder,private router: Router,
    private loginservice: AuthenticationService) { 
      // this.myform = this.fb.group({
      //   username: ['', Validators.required],
      //   password: ['', Validators.required]
      // });
    }

  ngOnInit(): void {
  }

  onSubmit() {
      let username= this.myform.get("username")?.value;
    let password= this.myform.get("password")?.value;
   
    (this.loginservice.authenticate(username, password).subscribe(
      data => {
        if(sessionStorage.getItem("roles") ==  "ROLE_COMPANY"){
          this.router.navigate(['/companyHome'])
          // window.location.href='http://localhost:50715';
        }
        else if(sessionStorage.getItem("roles") == "ROLE_USER"){
          
          this.router.navigate([''])
        }
        // else if(sessionStorage.getItem("roles") == "TRAINER"){
        //   this.router.navigate(['/trainer'])
        // }
        else{
          this.invalidLogin = false
          // this.router.navigate(['/login'])
        }
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'User Login  SuccessFully !!',
          timer: 1500
        })

      },
      (error)=>{
        console.log(error);
        this.invalidLogin = true
        this.error = Swal.fire(
          'Invaild !!',
          'Invaild Password and Username !!',
          'warning'
        )
      }
    )
    );

  }
    }
    


