import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/service/register.service';
import { design, designs } from 'src/assets/models';
import { pattern } from 'src/assets/pattern';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

employee!:FormGroup;
roles:any=[];
message:any;
constructor(private registerservice:RegisterService){}

  ngOnInit(): void {
    this.employee=new FormGroup({
      name: new FormControl(null, Validators.required)
    });
    this.registerservice.getRole('getRole').subscribe((res:any)=>{
      console.log(res);
      this.roles=res.role;
    });
    this.registerservice.message.subscribe(res=>{
      this.message=res;
    })

  }
//   this.registerservice.getRole('getRole').subscribe((res:any)=>{
//     console.log(res);
//     this.roles=res.role;
//   })
// }
  // roles: any = [];
  // designations: any =[];
  // constructor(private registerService: RegisterService) { }
  // ngOnInit() {
  //   this.employee = new FormGroup({
  //     // name: new FormControl(null, Validators.required),
  //     name: new FormControl(null, Validators.required),

  //   });
// second
    // this.registerService.getdesignation('getDesignation').subscribe((res:any)=>{
    //   console.log(res.designation);
    //   this.designations = res.designation;

    // })
// first
    //getRole
    // console.log('component: ', 'getRole');
    // console.log('component Return: ', this.registerService.getRole('getRole'));
    // this.registerService.getRole('getRole').subscribe((res: any) => {
    //   console.log("backend response: ", res.role);
    //   this.roles = res.role;
    //   console.log(this.roles);

    // })
  }


