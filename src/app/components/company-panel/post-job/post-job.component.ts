import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ApplyJobService } from '../../service/apply-job.service';
import { CategoryService } from '../../service/category.service';
import { PostJobService } from '../../service/post-job.service';

@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.scss']
})
export class PostJobComponent implements OnInit {
  listData: any;
  logoUrl: any = "";
  url: any = "";
  catData: any;
  myForm = new FormGroup({
    title: new FormControl('', Validators.required),
    descripition: new FormControl('', Validators.required),
    companyName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    jobType: new FormControl('', Validators.required),
    skills: new FormControl('', Validators.required),
    salaryOffer: new FormControl('', Validators.required),

    experience: new FormControl('', Validators.required),
    startDate: new FormControl('', Validators.required),

    deadlineDate: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    // category: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required)
    // country : new FormControl('',Validators.required),
    // city : new FormControl('',Validators.required),
  })
  router: any;
  constructor(private service: PostJobService, private route: Router, private catService: CategoryService) {

  }

  ngOnInit() {
    this.service.getData().subscribe(
      (data) => {
        console.log(data)
      },
      (error) => {
        console.log(error)
      }
    )
    this.catService.getData().subscribe(
      (data) => {
        console.log(data);
        this.catData = data;

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

  formSubmit() {
    let title = this.myForm.get('title')?.value;
    let descripition = this.myForm.get('descripition')?.value;
    let companyName = this.myForm.get('companyName')?.value;
    let email = this.myForm.get('email')?.value;
    let jobType = this.myForm.get('jobType')?.value;
    let skills = this.myForm.get('skills')?.value;
    let salaryOffer = this.myForm.get('salaryOffer')?.value;
    let experience = this.myForm.get('experience')?.value;
    let startDate = this.myForm.get('startDate')?.value;
    let deadlineDate = this.myForm.get('deadlineDate')?.value;
    let country = this.myForm.get('country')?.value
    let city = this.myForm.get('city')?.value;
    let category = this.myForm.get('category')?.value;

    var obj = {
      "title": title,
      "descripition": descripition,
      "companyName": companyName,
      "email": email,
      "jobType": jobType,
      "skills": skills,
      "salaryOffer": salaryOffer,
      "experience": experience,
      "startDate": startDate,
      "deadlineDate": deadlineDate,
      "country": country,
      "city": city,
      "category": category,
      "image": this.logoUrl,
    }
    console.warn(obj);


    this.service.postdata(obj).subscribe(
      (data) => {
        console.log(data);
        this.catData = data;
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'New job is added Successfully',
          showConfirmButton: true,
          confirmButtonText: 'Ok',
        }
        )
        this.route.navigate(["/jobs"])
      },
      (error) => {
        console.log(error.status)
        if (error.status) {
          Swal.fire("Warning", "Company Logo Feild is Required !!!", "warning")
        }
      }

    )



  }

}

