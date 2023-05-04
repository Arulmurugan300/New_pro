import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpsService {
  apiurl= environment.apiUrl;
  constructor(private httpclient:HttpClient){}

  getMethod(url:string){
    return this.httpclient.get(this.apiurl+url);

  }
  getJson(url:any){
    return this.httpclient.get('./assets/'+ url);
  }

  // apiurl= environment.apiUrl;
  // constructor(private httpclient:HttpClient){}
  // getMethod(url:string){
  //   console.log(this.apiurl + url);
  //   return this.httpclient.get(this.apiurl+url);
  // }
  // apiUrl = environment.apiUrl;
  // constructor(private httpclient: HttpClient) { }

  // // getMethod(url: string) {
  // //   // console.log('HttpsService : ', this.apiUrl + url);
  // //   return this.httpclient.get(this.apiUrl + url);
  // // }
  // getMethod(url: string) {
  //   console.log(this.apiUrl + url);
  //   return this.httpclient.get(this.apiUrl + url);
  // }
  postMethod() { }

}
