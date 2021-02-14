import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component implements OnInit {
  public label1 = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public data1: MultiDataSet = [[350, 450, 50],];
  public colors : Color[] = [{backgroundColor: ['#9E120H','#FF5800', 'red']}];

  constructor() { }

  ngOnInit(): void {
  }


}
