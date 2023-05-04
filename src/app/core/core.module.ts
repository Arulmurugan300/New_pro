import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { MaterialModule } from '../material/material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsComponent } from './forms/forms.component';
import { TableComponent } from './table/table.component';
import { RouterModule } from '@angular/router';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';



@NgModule({
  declarations: [
    ParentComponent,
    ChildComponent,
    NavbarComponent,
    FormsComponent,
    TableComponent,
    DynamicTableComponent,


  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    ParentComponent,
    ChildComponent,
    FormsComponent,
    NavbarComponent,
    TableComponent,
    DynamicTableComponent,

  ]
})
export class CoreModule { }
