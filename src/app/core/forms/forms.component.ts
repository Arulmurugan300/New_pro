import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { design, designs } from 'src/assets/models';
import { pattern } from 'src/assets/pattern';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  nam={id:10,name:'arul',role:'eng'};
  designation:designs[]=[
    {id:1,value:'Software Engineer'},
    {id:2,value:'Asst.Manager'},
    {id:3,value:'HR Manager'}
  ];
  employee! : FormGroup;
  ngOnInit(){
  this.employee= new FormGroup({
    id : new FormControl(null,[Validators.required,Validators.pattern(pattern.stringvalidation)]),
    name: new FormControl(null, Validators.required),
    created: new FormControl(null, Validators.required),
    modified: new FormControl(null, Validators.required),


  })
  }

}
