import { DtFacutraDetalle } from './../models/DtFacturaDetalle.models';
import { DtFactura } from './../models/DtFactura.models';
import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: [ './print.component.css']
})
export class PrintComponent implements OnInit {
  @Input() factura:DtFactura;
  constructor(public sanitizer:DomSanitizer) { }

  ngOnInit(): void {
  }

  sumTotal():number{
    return (this.factura?.dtfacturadetalleList !== undefined)?(
    this.factura?.dtfacturadetalleList
    .reduce((a: number,b:DtFacutraDetalle)=>  a +(b.cantidad * b.valor)
    ,0)):0;

  }

  sumTotalPeso():number{
    return (this.factura?.dtfacturadetalleList !== undefined)?(
    this.factura?.dtfacturadetalleList
    .reduce((a: number,b:DtFacutraDetalle)=>  a + b.cantidad ,0)):0;

  }






}
