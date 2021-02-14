import { FlashMessajeService } from '../../../../../services/flash-messaje.service';
import { PreloaderServices } from '../../../../../services/preloader.services';
import { NavigationExtras, Router } from '@angular/router';
import { ProcesoBasculaService } from '../../../../../services/proceso-bascula.service';
import { DtFactura } from '../../../../../components/app/models/DtFactura.models';
import { Terceros } from '../../../../../components/app/models/Terceros.models';
import { DtEcaMaterial } from '../../../../../components/app/models/DtEcaMaterial.models';
import { DtFacturaEstado } from '../../../../../components/app/models/DtFacturaEstado.models';
import { DtFacutraDetalle } from '../../../../../components/app/models/DtFacturaDetalle.models';
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

interface IDescuento{
  porcentaje:number;
  descripcion:string;
}


@Component({
  selector: 'app-pendientes',
  templateUrl: './pendientesBascula.component.html',
  styles: []
})
export class PendientesBasculaComponent implements OnInit {
  public ecaId:number = 10;
  public  estado:number =1;
  public  tipofactura:number =1;
  public showTableLoad:boolean=false;
  public showDanger:boolean = false;
  private linkTheme = <HTMLElement> document.querySelector("#onShowModal");

  public modal = document.getElementById("onShowModal");

  public selectTercero:Terceros;
  public selectMaterialEca:DtEcaMaterial;
  public selectDacutraDetalle:DtFacutraDetalle;
  public dtFactura:DtFactura;
  public dtFacutraDetalle:DtFacutraDetalle;
  public dtFacturas:Array<DtFactura>=[];

  public descuento:IDescuento = {
    porcentaje:0,
    descripcion:""
  };
  public pesoVehiculo:number=0;

  constructor(private preloadservices:PreloaderServices, private procesobascula:ProcesoBasculaService,private flashMessage: FlashMessajeService, private router: Router) {
    this.dtFactura=Object.create(DtFactura);
    this.dtFacutraDetalle=Object.create(DtFacutraDetalle);
    this.dtFacutraDetalle.materialid = Object.create(DtEcaMaterial);
    this.selectDacutraDetalle=Object.create(DtFacutraDetalle);

  }

  ngOnInit(): void {
    this.preloadservices.onShowPreloader();
    this.procesobascula.getAllParameters(`${this.ecaId}/${this.tipofactura}/${this.estado}/in`).
    subscribe(x=>this.dtFacturas = x,
      erro=>console.log("Error imprimiendo los datos"),
      ()=>{
        this.showTableLoad = true;
        this.preloadservices.onHidePreloader();
      }

      );

  }





  onAddPeso(value: DtFactura):void{
      let navigationExtras: NavigationExtras = {
        queryParams: {
            "update": 1,
        }
    };
    this.procesobascula.obj=value;
    this.router.navigate(["app/Bascula/IngresoMateriales"], navigationExtras);
  }

  openAddModalMaterial(value: DtFactura){
      this.dtFactura=value;
  }



  isPendiente(facturas:DtFactura[]):DtFactura[]{
      return facturas.filter(factura => factura.dtmaEstadoFacturaid.id==1);
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

  public fecha(fecha:any):String{
    const datepipe: DatePipe = new DatePipe('en-US');
    let formattedDate = datepipe.transform(fecha, 'dd-MMM-yyyy');
    return formattedDate;
  }

  public finalizar():void{
    try{
      if(this.dtFactura.pesosalida == 0 || this.dtFactura.pesosalida==undefined)
        throw new Error("El peso de salida del vehículo no puede ser cero");

      this.dtFactura.dtfacturadetalleList.forEach(x=>{
       if(x.cantidad == 0 || x.cantidad == undefined)
          throw new Error("No se puede cerrar la factura con materiales pendientes por pesar");
      });

      const estadoFActura = new DtFacturaEstado(2);
      this.dtFactura.dtmaEstadoFacturaid = estadoFActura;
      this.preloadservices.onShowPreloader();
      this.procesobascula.saveOfUpdate(this.dtFactura).subscribe(
        resp=>{
          this.dtFactura = resp
          this.flashMessage.onShowSuccess("Datos procesados correctamente");
          this.preloadservices.onHidePreloader();
        },
        err=>{
          const estadoFActura = new DtFacturaEstado(1);
          this.dtFactura.dtmaEstadoFacturaid = estadoFActura;
          this.flashMessage.onShowWarning(`Error procesados correctamente ${err}`);
        },
        ()=>this.preloadservices.onHidePreloader());
    }catch(err){
      this.flashMessage.onShowWarning(err);

    }
  }

}
