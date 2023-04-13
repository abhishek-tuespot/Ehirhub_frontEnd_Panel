import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobListService } from '../../service/job-list.service';
import { imgurl } from '../../service/url-helper';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {

  users:any
  imageUrl: any = `${imgurl}`
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
