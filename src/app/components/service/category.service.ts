import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './url-helper';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  getData(){
    return this.http.get(`${baseUrl}/jobCategory/get`);
  }

  getById(id:any){
    return this.http.get(`${baseUrl}/jobCategory/get/`+id);
  }
}
