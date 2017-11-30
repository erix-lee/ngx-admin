import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxuiComponent } from './ngxui.component';
import { Routes, RouterModule } from '@angular/router';
import { NgxUIModule } from '@swimlane/ngx-ui';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
const routes: Routes = [
  { path: '', component: NgxuiComponent },
];
@NgModule({
  imports: [
    NgxUIModule,NgxDatatableModule,
    CommonModule, RouterModule.forChild(routes)
  ],
  declarations: [NgxuiComponent],
  exports: [
    RouterModule
  ]
})
export class NgxuiModule { }
