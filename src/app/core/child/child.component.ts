import { Component, Input } from '@angular/core';
import { type } from 'src/assets/models';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  
show=false;
  Name = "Arul";
  click() {
    this.show = !this.show;
    console.log(this.show);

  }

}
