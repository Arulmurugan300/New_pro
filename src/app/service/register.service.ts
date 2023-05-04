import { Injectable } from '@angular/core';
import { HttpsService } from './https.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  constructor(private httpservice: HttpsService) { }

  message= new BehaviorSubject<any> (null);

  getRole(url: string) {
    console.log('v1' + url);
    return this.httpservice.getMethod('v1/' + url);
  }
  //message service
  getMessage(){
    this.httpservice.getJson('message.json').subscribe(res=>{
      console.log("res",res);
      this.message.next(res);
    })
  }
//
  //finish
  // constructor (private httpservice: HttpsService){}

  // getRole(url:string){
  //   console.log('v1/' + url);
  //   return this.httpservice.getMethod('v1/' + url);
  // }

  // constructor(private httpService: HttpsService) { }

  // getRole(url: string) {
  //   console.log('registerService : ', 'v1/' + url);
  //   // console.log('registerService Return : ', this.httpService.getMethod('v1/' + url));

  //   return this.httpService.getMethod('v1/' + url);
  // }
  // getdesignation(url:string){
  //   return this.httpService.getMethod('v1/'+url);

  // }
}
