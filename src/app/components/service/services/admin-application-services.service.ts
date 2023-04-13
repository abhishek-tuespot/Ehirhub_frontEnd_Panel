import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {identity, Observable} from 'rxjs';
import baseUrl from '../config/config';
@Injectable({
  providedIn: 'root'
})
export class AdminApplicationServicesService {

  constructor(private http:HttpClient) { }

  postdata(data:any){

    console.log("line 13 "+data)
  
     return this.http.post("http://localhost:8080/candidate/add",data)
    // return this.http.post(`${baseUrl}/candidate/add`,data)
  }
     getData():Observable<any>{
    return this.http.get("http://localhost:8080/candidate/get")
    // return this.http.get(`${baseUrl}/candidate/get`)
  }

  deleteRecord(id:any){
    return this.http.delete("http://localhost:8080/candidate/delete/"+id)
    // return this.http.delete(`${baseUrl}/candidate/delete/`+id)
    
  }
  getById(id:any){
    return this.http.get("http://localhost:8080/candidate/get/"+id)
    // return this.http.get(`${baseUrl}/candidate/get/`+id)
  }
  totalRows(): Observable<any> {
    return this.http.get("http://localhost:8080/jobPost/getdashboard")
  }
  totalCandidateRows(): Observable<any> {
    return this.http.get("http://localhost:8080/candidates/getid")
  }


}
