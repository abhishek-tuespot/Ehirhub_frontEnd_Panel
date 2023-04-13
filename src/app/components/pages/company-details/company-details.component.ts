import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../../service/category.service';
import { JobListService } from '../../service/job-list.service';
import baseUrl, { imgurl } from '../../service/url-helper';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.scss']
})
export class CompanyDetailsComponent implements OnInit {

  users:any
  jobId:any;
  imageUrl:any = `${imgurl}`
  constructor(private service:JobListService,private route:ActivatedRoute,private catService:CategoryService) { }

  ngOnInit(): void {

    this.service.getById(this.route.snapshot.paramMap.get("id")).subscribe(
      (data:any)=>{
        console.log("line 22 getById : "+JSON.stringify(data));
        this.users = data;
      },
      (error)=>{
        console.log("Line no:26:"+error);
        
      }
    )
    
  }
 

}
