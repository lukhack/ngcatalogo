import { DtFacturaEstado } from '../../../components/app/models/DtFacturaEstado.models';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashMessajeService } from '../../../services/flash-messaje.service';
import { ProcesoBasculaService } from '../../../services/proceso-bascula.service';
import { PreloaderServices } from '../../../services/preloader.services';
import { DtFactura } from '../../../components/app/models/DtFactura.models';
import { DtFacutraDetalle } from '../../../components/app/models/DtFacturaDetalle.models';
import { DtEcaMaterial } from '../../../components/app/models/DtEcaMaterial.models';
import { Terceros } from '../../../components/app/models/Terceros.models';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';


interface IDescuento{
  porcentaje:number;
  descripcion:string;
}

@Component({
  selector: 'app-bascula',
  templateUrl: './bascula.component.html',
  styles: [
  ]
})
export class BasculaComponent implements OnInit {
  constructor(){}
  ngOnInit(): void {
  }
}
