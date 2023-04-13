import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './url-helper';

@Injectable({
  providedIn: 'root'
})
export class CompanyProfileServiceService {


  constructor(private http:HttpClient) { }

  insertData(data:any){
    return this.http.post(`${baseUrl}/company/add`,data);
  }
}
