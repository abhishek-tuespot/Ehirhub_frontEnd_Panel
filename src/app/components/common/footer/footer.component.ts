import { Component, OnInit } from '@angular/core';
import { SignUpService } from '../../service/sign-up.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  categoryData:any
  constructor( private service:SignUpService) { }

  ngOnInit(): void {
    this.service.getData().subscribe(
      (data)=>{
        this.categoryData=data;
        console.log(this.categoryData[5]);
        
      }
    )
  }

}
