import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl, { paymentUrl } from './url-helper';

@Injectable({
  providedIn: 'root'
})
export class BuyPackagesService {

  constructor(private http:HttpClient) { }

 getData(packageid:any,companyId:any){
    return this.http.get(`${paymentUrl}/payment/v1/`+packageid+`/`+companyId);
  }

  getUser(){
      return this.http.get(`${baseUrl}/auth/all/`)
  }
}
