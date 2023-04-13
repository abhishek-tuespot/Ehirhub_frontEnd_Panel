import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baseUrl from './url-helper';

@Injectable({
  providedIn: 'root'
})
export class PostJobService {

  constructor(private http:HttpClient) {
    
  }


postdata(data:any){

 console.log("line 17 "+data)

 //  return this.http.post(`${baseUrl}/jobPost/add`,data)
  return this.http.post(`${baseUrl}/jobPost/add`,data)
}
  getData():Observable<any>{
   // return this.http.get(`${baseUrl}/jobPost/get`)
   return this.http.get(`${baseUrl}/jobPost/get`)
}
deleteRecord(id:any){
 return this.http.delete(`${baseUrl}/jobPost/delete/`+id)
 // return this.http.delete(`${baseUrl}/jobPost/delete/`+id)
}
totalRows(): Observable<any> {
 return this.http.get(`${baseUrl}/jobPost/getid`)
}

totalCandidateRows(): Observable<any> {
 return this.http.get(`${baseUrl}/candidates/getid`)
}
}
