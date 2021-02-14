import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: [
    './progress.component.css'
  ]
})
export class ProgressComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {

  }

  progress1: number = 24
  progress2: number = 50

  get gerProgreso1(){
    return `${this.progress1}%`;
  }

  get gerProgreso2(){
      return `${this.progress2}%`;
  }

  cambioValorHijo(valor: number){
    console.log("Hey!!", valor);
  }

}
