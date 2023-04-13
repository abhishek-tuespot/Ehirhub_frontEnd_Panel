import { visitAll } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CandidateService } from '../../service/candidate.service';

import { SignUpService } from '../../service/sign-up.service';

@Component({
  selector: 'app-profile-sign-up',
  templateUrl: './profile-sign-up.component.html',
  styleUrls: ['./profile-sign-up.component.scss']
})
export class ProfileSignUpComponent implements OnInit {

  signUpForm: FormGroup;
  allData: any;
  myForm: any;
  logoUrl: any = "";
  url:any="";
  certificateUrl:any ="";
  resumeUrl:any ="";




  get username() { return this.signUpForm.get("username")}
  // get email() { return this.signUpForm.get("email")}
  get password() { return this.signUpForm.get("password")}
  constructor(private fb:FormBuilder, private service : CandidateService,private signup:SignUpService,private router: Router) {
    this.signUpForm=this.fb.group({
      "fname":['',Validators.required],
      "lname":['',Validators.required],
      "email":['',Validators.required],
      "contactno":['',Validators.required],
      "gender":['',Validators.required],
      "degree":['',Validators.required],
      "orgenization":['',Validators.required],
      "year":['',Validators.required],
      "total":['',Validators.required],
      "obtain":['',Validators.required],
      "grade":['',Validators.required],
      "name":['',Validators.required],
      "month":['',Validators.required],
      "years":['',Validators.required],
      "companyname":['',Validators.required],
      "percentage":['',Validators.required],
      "ctc":['',Validators.required],
      "city":['',Validators.required],
      "state":['',Validators.required],
      "country":['',Validators.required],
      "resume":['',Validators.required],
      "certificate":['',Validators.required],
      "username":['',Validators.required],
      "password":['',Validators.required],
      "image":['',Validators.required]

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
  getResumeUrl(event: any) {
    let resumeUrl = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(resumeUrl);
    reader.onload = (event: any) => {
      this.resumeUrl = reader.result;
      console.log(this.resumeUrl);
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };

  }
  getCertificateUrl(event: any) {
    let certificateUrl = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(certificateUrl);
    reader.onload = (event: any) => {
      this.certificateUrl = reader.result;
      console.log(this.certificateUrl);
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };

  }

 submitForm(){
  let fname=this.signUpForm.get('fname').value;
  let lname=this.signUpForm.get('lname').value;
  let email=this.signUpForm.get('email').value;
  let contactno=this.signUpForm.get('contactno').value;
  let city=this.signUpForm.get('city').value;
  let state=this.signUpForm.get('state').value;
  let country=this.signUpForm.get('country').value;
  let ctc=this.signUpForm.get('ctc').value;
  let degree=this.signUpForm.get('degree').value;
  let orgenization=this.signUpForm.get('orgenization').value;
  let total=this.signUpForm.get('total').value;
  let obtain=this.signUpForm.get('obtain').value;
  let percentage=this.signUpForm.get('percentage').value;
  let grade=this.signUpForm.get('grade').value;
  let name=this.signUpForm.get('name').value;
  let year=this.signUpForm.get('year').value;
  let month=this.signUpForm.get('month').value;
  let years=this.signUpForm.get('years').value;
  let companyname=this.signUpForm.get('companyname').value;
  let username=this.signUpForm.get('username').value;
  let password=this.signUpForm.get('password').value;

  // this.applyJobForm.controls['url'].setValue(this.logoUrl);

  var signup={
    "username":username,
    "password":password,
    "email":email,
    "fname":fname,
    "lname":lname,
    "emails":email,
    "contactno":contactno,
    "resume": this.resumeUrl,
    "image":this.logoUrl,
    "city":city,
    "state":state,
    "country":country,
    "ctc":ctc,
    "degree":degree,
    "orgenization":orgenization,
    "total":total,
    "obtain":obtain,
    "percentage":percentage,
    "grade":grade,
    "certificate": this.certificateUrl,
    "name":name,
    "year":year,
    "month":month,
    "years":years,
    "companyname":companyname,
    "role": [ " " ],
  }
  // alert message
  if(this.resumeUrl == ""){
    Swal.fire("Warning","CV Field is Required !!","warning")
  }else if(this.logoUrl == "" ){
    Swal.fire("Warning","Image Field is Required !!","warning")
  }else if(this.certificateUrl == ""){
    Swal.fire("Warning","Certificate Field is Required !!","warning")
  }else{
          this.signup.saveCandidate(signup).subscribe(
            (data)=>{
              Swal.fire(
                'Success !',
                'User Submitted SuccessFully !!',
                'success'
              )
              this.signUpForm.reset();
              this.router.navigate(['/profile_login'])
            },
          (error)=>{
            console.log("line no 123"+error);
            Swal.fire(
              'warning !',
              'User Submitted SuccessFully !!',
              'success'
            )
          }
          )
    
  }   
  }
}
