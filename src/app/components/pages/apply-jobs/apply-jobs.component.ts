import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { ApplyJobService } from '../../service/apply-job.service';


@Component({
  selector: 'app-apply-jobs',
  templateUrl: './apply-jobs.component.html',
  styleUrls: ['./apply-jobs.component.scss']
})
export class ApplyJobsComponent implements OnInit {

  jobId:any;
  candidateId:any;
  applyJobForm: FormGroup;
  allData: any;
  myForm: any;
  logoUrl: any = "";
  url:any="";

  token:any;

  constructor(private fb:FormBuilder,private service:ApplyJobService,private route:ActivatedRoute) { 
    this.applyJobForm=this.fb.group({
      resume:['',Validators.required],
      fname:['',Validators.required],
      lname:['',Validators.required],
      email:['',Validators.required],
      phoneno:['',Validators.required],
      
      // url:['']
    })

  }

  ngOnInit(): void {

    this.token = sessionStorage.getItem("token");
    console.log("line no 40 ApplyJobsComponent "+this.token);

    this.candidateId=sessionStorage.getItem("id");
    console.log("Line no 44 "+this.candidateId);
    
    console.log(this.route.snapshot.paramMap.get("id"));
    this.jobId = this.route.snapshot.paramMap.get("id") 
  

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

    let fname=this.applyJobForm.get('fname').value;
    let lname=this.applyJobForm.get('lname').value;
    let email=this.applyJobForm.get('email').value;
    let phoneno=this.applyJobForm.get('phoneno').value;
    // this.applyJobForm.controls['url'].setValue(this.logoUrl);
  
 
    var obj={
      "fname":fname,
      "lname":lname,
      "email":email,
      "phoneno":phoneno,
      "resume": this.logoUrl,
      "jobId": this.jobId,
      "candidateId":this.candidateId
    }

    
console.log(obj);

if(this.logoUrl != "" && this.logoUrl != null && this.logoUrl != undefined){
  this.service.insertData(obj).subscribe(
    (data)=>{
      Swal.fire(
        'Applied',
        'Apply Successfully!',
        'success'
      )
      this.applyJobForm.reset();

      console.log(data);
      // alert("successfully!!");   
    },
    (error)=>{
      console.log(error);
    }
  )
}else{
  Swal.fire("Upload CV", "Upload CV is Required !!!", "warning");
}

}
}
