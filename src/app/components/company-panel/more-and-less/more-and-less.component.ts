import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-more-and-less',
  templateUrl: './more-and-less.component.html',
  styleUrls: ['./more-and-less.component.scss']
})
export class MoreAndLessComponent implements OnInit {

  @Input() text:any;
    @Input() wordLimit:number=0; 
  Showmore:boolean;
  constructor() {
    this.Showmore=false;
   }

  ngOnInit(): void {
  }

}
