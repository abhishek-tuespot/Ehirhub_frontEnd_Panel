import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from '../../service/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
users:any;
signUpForm: FormGroup;
allData: any;
myForm: any;
logoUrl: any = "";
url:any="";
certificateUrl:any ="";
resumeUrl:any ="";
  constructor(private fb:FormBuilder, private service : ProfileService ) {
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
    })
   }

  ngOnInit(): void {
    this.service.getData().subscribe(
      (data)=>{
        console.log(data)
        this.users=data;

       
      },
      (error)=>{
      console.log(error)
            }     
            
            )
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

  updateForm(){
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
  
  
 
    var obj={
      "fname":fname,
      "lname":lname,
      "email":email,
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
  
  
    }
    console.log(obj);
  
    // console.log("sing up");
  this.service.updateData(obj).subscribe(
    (data)=>{
     
      console.log(data);
      alert("successfully!!");
     
    },
    (error)=>{
      console.log(error);
      
    }
  )
}
    


}
