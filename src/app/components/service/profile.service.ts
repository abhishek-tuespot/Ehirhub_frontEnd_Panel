import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baseUrl from './url-helper';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http:HttpClient) { }

  getData():Observable<any>{
    return this.http.get(`${baseUrl}/candidate/get`);
  }

  updateData(data:any){
    return this.http.put(`${baseUrl}/candidate/update`,data);
  }
}
