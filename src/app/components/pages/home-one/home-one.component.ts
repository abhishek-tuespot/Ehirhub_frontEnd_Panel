import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from '../../service/category.service';
import { FiltersService } from '../../service/filters.service';
import { JobListService } from '../../service/job-list.service';
import baseUrl, { imgurl } from '../../service/url-helper';

@Component({
  selector: 'app-home-one',
  templateUrl: './home-one.component.html',
  styleUrls: ['./home-one.component.scss']
})
export class HomeOneComponent implements OnInit {
  users: any
  imageUrl: any = `${imgurl}`
  totalRecords: any;
  page: any = 1;
  categoryData: any;
  data:any;
seekers:any;  
postedJob:any;
jobseekers:any;
candidate:any;
jobPostFormm:FormGroup;
totalcategory: any;
page2:any

jobTitle:any;
  
  constructor(private fb:FormBuilder,private service: JobListService,private route: Router, private categoryService: CategoryService,private filterService:FiltersService) { 
    this.jobPostFormm=this.fb.group({
      "title":[''],
      "city":[''],
      "category":['']
    })
  }

  ngOnInit(): void {
    this.service.getData().subscribe(
      (data) => {
        console.log(data)
        this.users = data;
      },
      (error) => {
        console.log(error)
      }

    )
    this.categoryService.getData().subscribe(
      (data:any)=>{
        console.log("Line no:35 "+JSON.stringify(data));
         this.categoryData=data;
      }
    )

  
  this.service.totalRows().subscribe(
    (data)=>{
      console.log("line no 16 "+data.postedJob)
      this.data=data;

    console.log("counting "+JSON.stringify(data))
     
    },
    (error)=>{
    console.log(error)
          }     
          
          )

}
filterShow(){
let title=this.jobPostFormm.get("title").value;
let city=this.jobPostFormm.get("city").value;
// let category=this.jobPostFormm.get("category").value;



//  this.jobTitle=title;"

//   console.log(title);
//   this.filterService.filter(title).subscribe(
//     (data)=>{
//       console.log(data);
      
//       // this.candidate=data;
//     }
//   )
// }
// setTitle(){
//   let title=this.jobPostFormm.get("title").value;
//   this.jobTitle=title;
this.route.navigate(["/filter_jobs", title,city])
}

}
