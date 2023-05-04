import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './core/navbar/navbar.component';
import { FormsComponent } from './core/forms/forms.component';
import { TableComponent } from './core/table/table.component';
import { ChildComponent } from './core/child/child.component';
import { ParentComponent } from './core/parent/parent.component';
import { DynamicTableComponent } from './core/dynamic-table/dynamic-table.component';

const routes: Routes = [
  { path: '', redirectTo: '/app', pathMatch: 'full' },
  {
    path: 'app', component: NavbarComponent, children: [
      { path: 'tools', component: TableComponent },
      { path: 'forms', component: FormsComponent },
      { path: 'table', component: TableComponent },
      { path: 'child', component: ChildComponent },
      { path: 'parent', component: ParentComponent },
      { path: 'dynamic', component: DynamicTableComponent },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
