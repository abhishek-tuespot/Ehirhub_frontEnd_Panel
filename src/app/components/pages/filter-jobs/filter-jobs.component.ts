import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../../service/category.service';
import { FiltersService } from '../../service/filters.service';
import { JobListService } from '../../service/job-list.service';
import baseUrl, { imgurl } from '../../service/url-helper';

@Component({
  selector: 'app-filter-jobs',
  templateUrl: './filter-jobs.component.html',
  styleUrls: ['./filter-jobs.component.scss']
})
export class FilterJobsComponent implements OnInit {

  users: any

  data: Array<any> = []
  totalRecords: any;
  page: any = 1;
  imageUrl: any = `${imgurl}`
  title:any;
  city:any;
  category:any;
  obj:any;
  constructor(private service: JobListService,private route : ActivatedRoute, private filterService: FiltersService) { }

  ngOnInit(): void {

    this.title=this.route.snapshot.params['title'],
    this.city=this.route.snapshot.params['city'],
    // this.category=this.route.snapshot.params['category'],



    // this.service.getData().subscribe(
    //   (data) => {
    //     console.log(data)
    //     this.users = data;
        
    //   },
    //   (error) => {
    //     console.log(error)
    //   }
    // )

    // for(let data of this.users){
    //   console.log("line no:34"+data);
    // }

    this.obj={
      "title":this.title,
      "city":this.city,
      // "category":this.category,
    }

    this.filterService.filter(this.obj).subscribe(
      (data)=>{
        console.log("line no:28"+data);   
        this.title=data;
      }

     
    )
  }
}
