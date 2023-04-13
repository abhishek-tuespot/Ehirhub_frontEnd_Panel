import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CompanyProfileServiceService } from '../../service/company-profile-service.service';
import { SignUpService } from '../../service/sign-up.service';

@Component({
  selector: 'app-company-profile-sign-up',
  templateUrl: './company-profile-sign-up.component.html',
  styleUrls: ['./company-profile-sign-up.component.scss']
})
export class CompanyProfileSignUpComponent implements OnInit {

  companyData:any;
  companyForm:FormGroup;
  logoUrl: any;
  constructor(private fb:FormBuilder,private service:CompanyProfileServiceService,private signup:SignUpService,private router:Router) { 
    this.companyForm=this.fb.group({
      companyName:['',Validators.required],
      email:['',Validators.required],
      contactNumber:['',Validators.required],
      ownerName:['',Validators.required],
      city:['',Validators.required],
      state:['',Validators.required],
      country:['',Validators.required],
      industry:['',Validators.required],
      website:['',Validators.required],
      username:['',Validators.required],
      password:['',Validators.required]
    })
  }

  ngOnInit(): void {
  }
  getLogoUrl(event: any) {
    let logoUrl = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(logoUrl);
    reader.onload = (event: any) => {
      this.logoUrl = reader.result;
      console.log(this.logoUrl);
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };

  }
  submitForm(){
    let companyName=this.companyForm.get('companyName').value;
    let email=this.companyForm.get('email').value;
    let ownerName=this.companyForm.get('ownerName').value;
    let contactNumber=this.companyForm.get('contactNumber').value;
    let city=this.companyForm.get('city').value;
    let state=this.companyForm.get('state').value;
    let country=this.companyForm.get('country').value;
    let industry=this.companyForm.get('industry').value;
    let website=this.companyForm.get('website').value;
    let username=this.companyForm.get('username').value;
    let password=this.companyForm.get('password').value;

    var signup={
        "email":email,
        "password":password,
        "role": [
             "mod"
          ],
        "username":username,
        "companyName":companyName,
        "emails":email,
        "ownerName":ownerName,
        "contactNumber":contactNumber,
        "city":city,
        "state":state,
        "country":country,
        "industry":industry,
        "website":website,
        "companyLogo":this.logoUrl
      }
      // console.log(obj);
      // this.service.insertData(obj).subscribe(
      //   (data)=>{
         
      //     console.log(data);
         
      //    // this.companyForm.reset();
      //   },
      // ),
        this.signup.saveUser(signup).subscribe(
          (data:any)=>{
            Swal.fire(
              'Success !',
              'Company Singup SuccessFully !!',
              'success'
            )
          //  this.companyForm.reset();
            this.router.navigate(['/companyHome'])
          },
        (error)=>{
          console.log(error);
          
        }
        )
  }
}
