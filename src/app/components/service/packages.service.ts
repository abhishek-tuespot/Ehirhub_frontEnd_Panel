import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baseUrl from './url-helper';

@Injectable({
  providedIn: 'root'
})
export class PackagesService {

  constructor(private http:HttpClient) { }

  getData(){
    return this.http.get(`${baseUrl}/packages/get`);
  }
  getById(id:any){
     return this.http.get(`${baseUrl}/packages/get/`+id)
  }
}
