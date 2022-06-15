import { Component, OnInit } from '@angular/core';
import { ChartData } from '../../models/dataChart.interface';
import { DataCharts } from '../../models/datosChart';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {


  data: ChartData[] = [];
  multi: any[] = [];

  ngOnInit(): void {
    this.data = DataCharts
  }


  view: [number,number] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() {
    Object.assign(this, { DataCharts })
  }

  onSelect(event: any) {
    console.log(event);
  }

}
