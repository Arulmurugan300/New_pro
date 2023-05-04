import { Component, OnInit } from '@angular/core';
import { RegisterService } from './service/register.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  constructor(private message:RegisterService){}
  ngOnInit(){
    this.message.getMessage();
  }

}
