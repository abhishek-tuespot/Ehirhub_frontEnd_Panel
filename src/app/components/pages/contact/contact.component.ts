import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ContactService } from '../../service/contact.service';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm:FormGroup;
  contactData:any;
  constructor(private fb:FormBuilder, private service:ContactService) { 
    this.contactForm=this.fb.group({
      "name":['',Validators.required],
      "email":['',Validators.required],
      "phoneno":['',Validators.required],
      "subject":['',Validators.required],
      "description":['',Validators.required]
    })
  }

  ngOnInit(): void {
  }

  submitform(){
console.log(this.contactForm.value)
    this.service.insertData(this.contactForm.value).subscribe(
      (data)=>{
        this.contactData=data;
        this.contactForm.reset();
        Swal.fire(
          'Submit',
          'Submit Successfully!',
          'success'
        )
      },(error:any)=>{
        console.log(error);
        Swal.fire(
          'warning',
          'Opp ! Login First',
        )
      }
    )
  }
}
