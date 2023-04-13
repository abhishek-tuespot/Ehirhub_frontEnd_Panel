import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './url-helper';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient) { }

  insertData(formdata:any){
    return this.http.post(`${baseUrl}/contact/add`,formdata);
  }
}
