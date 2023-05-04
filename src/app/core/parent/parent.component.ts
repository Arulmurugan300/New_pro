import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { type } from 'src/assets/models';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
// show=true;
  aer:unknown;
  @Input() name: any;

  // database:type[]=[
  //   { id: 1, data: 'select', employee: 'temp' },
  //   { id: 2, data: 'not sele', employee: 'Permenent' },
  //   { id: 3, data: 'select', employee: 'temp' },
  // ]
  ngOnInit(){

    let data =new Observable(subscribe=>{
      subscribe.next(3);
      subscribe.next(4);
      // subscribe.error('form field error');
      subscribe.next(5);
      subscribe.complete();
    });
    data.subscribe(res=>{
      (this.aer=res);
      console.log("ans",this.aer);
    }, err =>{
      console.log("error",err);
    },()=>{
      console.log("complete");

    }
    );
  }
;
    // let data= new Observable(subscribe=>{
    //   subscribe.next(2);
    // });
    // data.subscribe(res=>{
    //   (this.aer=res);
    //   console.log('response',res);
    // });

}

