import { Component, OnInit } from '@angular/core';
import { PackagesService } from '../../service/packages.service';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss']
})
export class PackagesComponent implements OnInit {

  packageData:any;
  constructor(private service:PackagesService) { }

  ngOnInit(): void {
    this.service.getData().subscribe(
      (data)=>{
        console.log(data);
        
        this.packageData=data;
      }
    )
  }

}
