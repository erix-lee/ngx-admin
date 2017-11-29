import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { NgxUIModule } from '@swimlane/ngx-ui';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
const routes: Routes = [
    { path: '', component: HomeComponent },
];

@NgModule({
    imports: [
        NgxUIModule,NgxDatatableModule,
        RouterModule.forChild(routes)
    ],
    declarations: [HomeComponent],
    exports: [
        RouterModule
    ]
})
export class HomeModule { }
