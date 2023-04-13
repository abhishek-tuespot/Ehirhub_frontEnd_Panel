import { Component, OnInit } from '@angular/core';
import { JobListService } from '../../service/job-list.service';
import baseUrl, { imgurl } from '../../service/url-helper';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss']
})
export class JobListComponent implements OnInit {

  users:any

  data:Array<any> =[ ]
  totalRecords:any;
  page:any=1;
  imageUrl:any = `${imgurl}`
  constructor(private service:JobListService) { }

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

}
