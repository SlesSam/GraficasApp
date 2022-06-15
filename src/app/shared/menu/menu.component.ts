import { Component, OnInit } from '@angular/core';

interface MenuItem{
  rute: string;
  texto:string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menu: MenuItem[]=[
    {rute:'/graficas/barra', texto:'barra'},
    {rute:'/graficas/lineas', texto:'lineas'},
    {rute:'/graficas/donahttp', texto:'donahttp'},
  
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
