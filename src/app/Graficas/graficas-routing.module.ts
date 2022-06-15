import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { DonahttpComponent } from './donahttp/donahttp.component';
import { LineChartComponent } from './line-chart/line-chart.component';

const routes: Routes =[
    {
        path:'',
        children:[
            {path:'barra', component: BarChartComponent},
            {path:'lineas', component: LineChartComponent},
            {path:'donahttp', component: DonahttpComponent},
            {path:'**', redirectTo:'barra'}
        ]
    }
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class GraficasRoutingModule { }