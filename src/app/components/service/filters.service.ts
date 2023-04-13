import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './url-helper';

@Injectable({
  providedIn: 'root'
})
export class FiltersService {

  constructor(private http:HttpClient) { }

  filter(title:any){
    return this.http.post(`${baseUrl}/jobPost/searched`,title);
  }
}
