import { DtFacturaEstado } from './../../../../../components/app/models/DtFacturaEstado.models';
import { DtFacutraDetalle } from './../../../../../components/app/models/DtFacturaDetalle.models';
import { DatePipe } from '@angular/common';
import { DtFactura } from './../../../../../components/app/models/DtFactura.models';
import { Router } from '@angular/router';
import { FlashMessajeService } from './../../../../../services/flash-messaje.service';
import { ProcesoBasculaService } from './../../../../../services/proceso-bascula.service';
import { PreloaderServices } from './../../../../../services/preloader.services';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salida-cerrado',
  templateUrl: './salida-cerrado.component.html',
  styleUrls: ['./salida-cerrado.component.css']
})
export class SalidaCerradoComponent implements OnInit {


  public ecaId:number = 10;
  public  estado:number =2;
  public  tipofactura:number =2;
  public dtFacturas:Array<DtFactura>=[];
  public dtFactura:DtFactura;
  public pagarShow:boolean=false;
  private linkTheme = <HTMLElement> document.querySelector("#closeModalPeso");

  constructor(private preloadservices:PreloaderServices, private procesobascula:ProcesoBasculaService,private flashMessage: FlashMessajeService, private router: Router) {
    this.dtFactura = Object.create(DtFactura);
  }


  ngOnInit(): void {
    this.preloadservices.onShowPreloader();
    this.procesobascula.getAllParameters(`${this.ecaId}/${this.tipofactura}/${this.estado}/noIn`).
    subscribe(
        x=>this.dtFacturas = x,
        erro=>console.log("Error imprimiendo los datos"),
        ()=>{
          this.preloadservices.onHidePreloader();
        }
    );
  }

  getFacturaInState(estado:number):DtFactura[]{
    return this.dtFacturas.filter(x=>x.dtmaEstadoFacturaid.id === estado);
  }

  public fecha(fecha:any):String{
    const datepipe: DatePipe = new DatePipe('en-US');
    let formattedDate = datepipe.transform(fecha, 'dd-MMM-yyyy');
    return formattedDate;
  }


  selectObject(value: DtFactura, type:number){
    if(type===1)
      this.pagarShow=true;
    else
      this.pagarShow=false;


    this.dtFactura=value;
  }

  isUndefined(value:any){
    return value!==undefined
  }

  subtotal(item:DtFacutraDetalle){
    if(item.descuento !==undefined){
      let subtotal = item.cantidad * item.valor;
      let descuento = subtotal*item.descuento/100;
      return subtotal- descuento;
    }
    return item.cantidad * item.valor;
  }

  pagar(){
    const estadoFActura = new DtFacturaEstado(4);
    this.dtFactura.dtmaEstadoFacturaid = estadoFActura;
    this.preloadservices.onShowPreloader();
    this.procesobascula.saveOfUpdate(this.dtFactura).subscribe(
      resp=>{
        this.dtFactura = resp
        this.flashMessage.onShowSuccess("Datos procesados correctamente");
        this.preloadservices.onHidePreloader();
        console.log("dato 1:"+this.dtFactura);
        document.getElementById("closeModalPeso").click();
      },
      err=>{
        const estadoFActura = new DtFacturaEstado(2);
        this.dtFactura.dtmaEstadoFacturaid = estadoFActura;
        this.flashMessage.onShowWarning(`Error procesados correctamente ${err}`);
      },
      ()=>this.preloadservices.onHidePreloader());
  }
}
