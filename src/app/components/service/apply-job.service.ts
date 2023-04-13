import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './url-helper';

@Injectable({
  providedIn: 'root'
})
export class ApplyJobService {

  constructor(private http:HttpClient) { }

  insertData(data:any){
    return this.http.post(`${baseUrl}/applyJob/add`,data);
  }
}
