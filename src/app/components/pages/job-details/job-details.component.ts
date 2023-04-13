import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../../service/category.service';
import { JobListService } from '../../service/job-list.service';
import baseUrl, { imgurl } from '../../service/url-helper';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss']
})
export class JobDetailsComponent implements OnInit {

  users:any
  candidateID:any;
  data:Array<any> =[ ]
  totalRecords:any;
  page:any=1;
  imageUrl:any = `${imgurl}`;
  jobId:any;
  token:any;
  constructor(private service:JobListService,private route:ActivatedRoute,private catService:CategoryService, private navRoute: Router) { }

  ngOnInit(): void {
    // this.service.getData().subscribe(
    //   (data)=>{
    //     console.log(data)
    //     this.users=data;

       
    //   },
    //   (error)=>{
    //   console.log(error)
    //         }     
            
    //         )

    this.token = sessionStorage.getItem("token");
    console.log("line no 40 JobDetailsComponent "+this.token);
    

          this.catService.getById(this.route.snapshot.paramMap.get("id")).subscribe(
            (data)=>{
             // console.log("line 22 getById : "+JSON.stringify(data));
              this.users=data;
             // console.log("line no:41 "+JSON.stringify( this.users));
              
            }
          )
  }


  navigateForApplyJob(id:any){
   
    if(this.token != '' && this.token != null && this.token != undefined){
      this.navRoute.navigate(['/apply_jobs', id])
    }else{
      alert("Please Login First !!!")
    }
   
  }

}
