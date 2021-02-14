import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.btnClassInfo = `btn ${this.btnClassInfo}`
    this.btnClassPrymari = `btn ${this.btnClassPrymari}`
  }

  @Input('valor') progress: number = 50;
  @Input() btnClassPrymari: String = 'btn-primary'
  @Input() btnClassInfo: String = 'btn-info'

  @Output('valor') valorSalida: EventEmitter<number> = new EventEmitter;

  cambiarVAlor(valor: number){

    if(this.progress>100){
      this.valorSalida.emit(100);
      this.progress=100
    }else if(this.progress<0){
      this.valorSalida.emit(10);
      this.progress=0
    }

    this.progress = this.progress + valor;
    this.valorSalida.emit(this.progress);

  }

  onChange(valor: number){
    console.log("valores", valor)
    if(valor > 100){
        this.progress = 100;
    }else if(valor < 0){
      this.progress = 0;
    }else{
      this.progress = valor;
    }


    this.valorSalida.emit(this.progress)

  }

}
