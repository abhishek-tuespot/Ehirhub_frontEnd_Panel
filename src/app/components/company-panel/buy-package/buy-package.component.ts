import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BuyPackagesService } from '../../service/buy-packages.service';

@Component({
  selector: 'app-buy-package',
  templateUrl: './buy-package.component.html',
  styleUrls: ['./buy-package.component.scss']
})
export class BuyPackageComponent implements OnInit {

  candidateId:any;
  packageid:any;
  paymentData:any;
  paymentForm:FormGroup;
  constructor(private fb:FormBuilder,private service:BuyPackagesService,private route:ActivatedRoute) {
    this.paymentForm=this.fb.group({
      name:['',Validators.required],
      amount:['',Validators.required],
      email:['',Validators.required],
      phone:['',Validators.required],
      description:['',Validators.required]
    })
   }

  ngOnInit(): void {
    this.candidateId=sessionStorage.getItem("id");
    console.log("Line no 44 "+this.candidateId);

    this.packageid = this.route.snapshot.paramMap.get("id") 
  }
  


  submitForm(){

  
    this.service.getData(this.candidateId,this.packageid).subscribe(
      (data)=>{
        this.paymentData=data;
        this.paymentForm.reset();
      }
    )
    
  }

}
