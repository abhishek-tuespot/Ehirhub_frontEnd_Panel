import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './url-helper';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {


  constructor(private http:HttpClient) { }

  insertData(data:any){
    return this.http.post(`${baseUrl}/signup/add`,data);
  }

  saveUser(myData:any){
    return this.http.post(`${baseUrl}/auth/signup`, myData)
  }
 
  saveCandidate(myData:any){
    return this.http.post(`${baseUrl}/auth/candidatesignup`, myData)
  }
  getData(){
    return this.http.get(`${baseUrl}/jobCategory/get`)
  }
}
