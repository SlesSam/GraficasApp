import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { HttpClientModule } from '@angular/common/http';

import { BarChartComponent } from './bar-chart/bar-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { DonahttpComponent } from './donahttp/donahttp.component';

@NgModule({
    declarations: [
      BarChartComponent,
      LineChartComponent,
      DonahttpComponent,
       
        
      ],
      imports: [
        CommonModule,
        NgxChartsModule,
        HttpClientModule
        
      ],
      exports:[
        BarChartComponent,
        LineChartComponent,
        

      ]
})

export class GraficasModule { }