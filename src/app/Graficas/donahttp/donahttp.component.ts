import { Component, OnInit } from '@angular/core';
import { Grafica } from 'src/app/models/dataHttpDona.interface';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-donahttp',
  templateUrl: './donahttp.component.html',
  styleUrls: ['./donahttp.component.css']
})
export class DonahttpComponent implements OnInit {

  single: Grafica[]=[];


  
  ngOnInit(): void {

  this.datService.getDatas()
      .subscribe(data =>{
        this.single=data,
         console.log(data)});
  }



  view: [number,number] = [700, 400];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: string = 'Sbelow';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor(private datService: DataService) {
    Object.assign(this, {this:this.datService.getDatas()
      .subscribe(data =>{
        this.single=data,
         console.log(data)})})
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

}
