import { Component, OnInit } from '@angular/core';
import { PackagesService } from '../../service/packages.service';

@Component({
  selector: 'app-company-packages',
  templateUrl: './company-packages.component.html',
  styleUrls: ['./company-packages.component.scss']
})
export class CompanyPackagesComponent implements OnInit {
  candidateId:any
  packageData:any;
  constructor(private service:PackagesService) { }

  ngOnInit(): void {
    this.service.getData().subscribe(
      (data)=>{
        console.log(data);
        this.candidateId=sessionStorage.getItem("id");
        console.log("Line no 23 "+this.candidateId);
        this.packageData=data;
      }
    )
   
  }

}
