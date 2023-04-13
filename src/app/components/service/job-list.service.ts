import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baseUrl from './url-helper';

@Injectable({
  providedIn: 'root'
})
export class JobListService {

  constructor(private http:HttpClient) { }

  getData():Observable<any>{
    return this.http.get(`${baseUrl}/jobPost/get`);
  }
  getById(id:any){
    //return this.http.get("http://localhost:8080/jobPost/get/"+id)
     return this.http.get(`${baseUrl}/jobPost/get/`+id)
  }
  totalRows(): Observable<any> {
    return this.http.get(`${baseUrl}/dashboard/count`)
  }
 
}
