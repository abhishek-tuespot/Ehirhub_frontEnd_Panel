import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BuyPackagesService } from '../../service/buy-packages.service';
import { PackagesService } from '../../service/packages.service';

@Component({
  selector: 'app-company-home',
  templateUrl: './company-home.component.html',
  styleUrls: ['./company-home.component.scss']
})
export class CompanyHomeComponent implements OnInit {
  companyId:any;
  comdata:any;
  packageData:any;
  paymentUrl:any;
  constructor(private service:PackagesService,private paymentService:BuyPackagesService) { }

  ngOnInit(): void {
    this.service.getData().subscribe(
      (data)=>{
        console.log(data);
        this.packageData=data;
        this.companyId=sessionStorage.getItem("id");
        console.log("Line no 25 companyId:- "+this.companyId);

     

 
      }
    )
  }

  showData(packageid:any,companyid:any){
    this.paymentService.getData(packageid,companyid).subscribe(
      (data:any)=>{
        console.log("line no 30 "+JSON.stringify(data));
        // console.log("Line no:36 "+JSON.stringify(data.paymentUrl));
        this.comdata=data;
        this.paymentUrl=data.paymentOptions.paymentUrl;
        console.log("line no:38:="+data.paymentOptions.paymentUrl);

       window.open(data.paymentOptions.paymentUrl);
      }
    )
  }

}

