import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ApplyJobService } from '../../service/apply-job.service';
import { CategoryService } from '../../service/category.service';
import { PostJobService } from '../../service/post-job.service';
import { imgurl } from '../../service/url-helper';

@Component({
  selector: 'app-posted-job',
  templateUrl: './posted-job.component.html',
  styleUrls: ['./posted-job.component.scss']
})
export class PostedJobComponent implements OnInit {

  applyjob:any

  data:Array<any> =[ ]
  totalRecords:any;
  page:any=1;
category:any;

  imageUrl:any = `${imgurl}`


  constructor(
  private service:PostJobService,private catService:CategoryService,
  ) { }

  ngOnInit(): void {

    this.service.getData().subscribe(
      (data)=>{
        console.log("Ram "+data)
        this.applyjob=data;

       
      },
      (error)=>{
      console.log(error)
            }     
            
            )
            this.catService.getData().subscribe(
              (data)=>{
                console.log("Line no:44: "+JSON.stringify(data));
                
                this.category=data;
                console.log("Line no:47 "+JSON.stringify(this.category));
              }
            )
  }

  deleteRecord(id:any){
    this.service.deleteRecord(id).subscribe(
      (data:any)=>{
        console.log(data)
        this.applyjob = data;

        (error:any)=>{
          console.log(error)
        }



        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Record Deleted SuccessFully',
          showConfirmButton: false,
          timer: 1500
        })
    
  },
 
    )
  }
}
