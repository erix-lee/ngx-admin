import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxchartComponent ,} from './ngxchart.component';
import { Routes, RouterModule } from '@angular/router';


import { FormsModule } from '@angular/forms';


import { SparklineComponent } from './sparkline/sparkline.component';
import { TimelineFilterBarChartComponent } from './timeline-filter-bar-chart/timeline-filter-bar-chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxUIModule } from '@swimlane/ngx-ui';
import { ComboChartComponent, ComboSeriesVerticalComponent } from './combo-chart';
const routes: Routes = [
  { path: '', component: NgxchartComponent },
];
@NgModule({
  imports: [CommonModule,
    NgxChartsModule,

    FormsModule,
    NgxUIModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NgxchartComponent,SparklineComponent,
    TimelineFilterBarChartComponent,
    ComboChartComponent,
    ComboSeriesVerticalComponent],
  exports: [
    RouterModule
  ]
})
export class NgxchartModule { }
