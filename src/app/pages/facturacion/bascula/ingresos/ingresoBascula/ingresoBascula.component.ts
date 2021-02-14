import { DtFacturaTipo } from './../../../../../components/app/models/DtFacturaTipo.models';
import { ActivatedRoute, Router } from '@angular/router';
import { DtFacturaEstado } from './../../../../../components/app/models/DtFacturaEstado.models';
import { ProcesoBasculaService } from './../../../../../services/proceso-bascula.service';

import { DtFacutraDetalle } from './../../../../../components/app/models/DtFacturaDetalle.models';
import { DtFactura } from './../../../../../components/app/models/DtFactura.models';
import { DtEcaMaterial } from './../../../../../components/app/models/DtEcaMaterial.models';
import { Terceros } from './../../../../../components/app/models/Terceros.models';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PreloaderServices } from '../../../../../services/preloader.services';
import { FlashMessajeService } from '../../../../../services/flash-messaje.service';

interface IDescuento{
  porcentaje:number;
  descripcion:string;
}


@Component({
  selector: 'app-ingreso',
  templateUrl: './ingresoBascula.component.html',
  styles: [
  ]
})
export class IngresoBasculaComponent implements OnInit {

  public showDanger:boolean = false;

  public modal = document.getElementById("onShowModal");
  @ViewChild('pesovehiculo') header: ElementRef;

  public selectTercero:Terceros;
  public selectMaterialEca:DtEcaMaterial;
  public selectDacutraDetalle:DtFacutraDetalle;
  public dtFactura:DtFactura;
  public dtFacutraDetalle:DtFacutraDetalle;

  public descuento:IDescuento = {
    porcentaje:0,
    descripcion:""
  };
  public pesoVehiculo:number=0;

  constructor(private preloadservices:PreloaderServices, private procesobascula:ProcesoBasculaService,private flashMessage: FlashMessajeService, private routeActive: ActivatedRoute, private router: Router) {
    this.dtFactura=Object.create(DtFactura);
    this.dtFacutraDetalle=Object.create(DtFacutraDetalle);
    this.dtFacutraDetalle.materialid = Object.create(DtEcaMaterial);
    this.selectDacutraDetalle=Object.create(DtFacutraDetalle);
  }

  ngOnInit(): void {
    this.routeActive.queryParams.subscribe(params => {
      if(params["update"]){
        console.log("valor no esta vacio",params["update"]);
        if(params["update"]==1){
          console.log("valor no esta vacio");
          if(this.procesobascula.obj!=undefined)
            this.dtFactura = this.procesobascula.obj;

          console.log("data:",this.dtFactura);
        }
      }
  });
  }


  onChangeTercero(value:Terceros){
    console.log(value)
    this.dtFactura.tercero = value;
  }


  onChangeMaterial(value:DtEcaMaterial){
    this.dtFacutraDetalle = Object.create(DtFacutraDetalle);
    this.dtFacutraDetalle.materialid = value;
    this.dtFacutraDetalle.valor= value.valorCompra;
    console.log(this.dtFacutraDetalle);
  }


  openModalPeso(value: DtFacutraDetalle){
    console.log(this.dtFactura.pesovehiculo)
    if(this.dtFactura.pesovehiculo===0 || this.dtFactura.pesovehiculo===undefined){
      this.flashMessage.onShowWarning("Para agregar el peso de un material ingrea el peso del cambión  ");
    }else{
      document.getElementById("openModalButton").click();
      this.selectDacutraDetalle = value;
    }
  }

  openAddModalMaterial(value: DtFacutraDetalle){
    console.log(this.dtFactura.pesovehiculo)
    if(this.dtFactura.pesovehiculo===0 || this.dtFactura.pesovehiculo===undefined){
       this.flashMessage.onShowWarning("Para agregar el peso de un material ingrea el peso del cambión  ");
    }else{
      this.selectDacutraDetalle=value;
      this.descuento.porcentaje = value.descuento;
      this.descuento.descripcion = value.descripcion;
    }
  }

  onAddMaterialClick(facturaDetalle: DtFacutraDetalle){
    try{
      console.log("cantidad: "+this.dtFactura.pesovehiculo);
      if(this.dtFactura.pesovehiculo < 500 || this.dtFactura.pesovehiculo == undefined )
        throw new Error("El valor del peso del vehículo debe ser mayor a 500kg");


      if(this.dtFacutraDetalle.valor<=0)
        throw new Error("El valor del material debe ser mayor a 0");

      console.log(this.dtFacutraDetalle.materialid);
      if(this.dtFactura.dtfacturadetalleList == undefined)
          this.dtFactura.dtfacturadetalleList = [];


      this.dtFactura.dtfacturadetalleList.push(this.dtFacutraDetalle);
      this.flashMessage.onShowSuccess("Articulo añadido correctamente");

      this.dtFacutraDetalle =  Object.create(DtFacutraDetalle);


    }catch(error){
      this.flashMessage.onShowWarning(error);
    }
  }

  addFactura(){
    try{
      if(this.dtFactura.tercero == undefined)
        throw new Error("Selecciona un tercero");

      if(this.dtFactura.placavehiculo ==="" || this.dtFactura.placavehiculo ==undefined)
        throw new Error("Ingresa las placas del vehiculo")
      console.log("guardando factura")
      const estadoFActura = new DtFacturaEstado(1);
      const tipoFActura = new DtFacturaTipo(1);
      this.dtFactura.dtmaEstadoFacturaid = estadoFActura;
      this.dtFactura.dtTipoFacturaid = tipoFActura;

      this.preloadservices.onShowPreloader();
      this.procesobascula.saveOfUpdate(this.dtFactura).subscribe(
        resp=>{
          this.dtFactura = resp
          this.flashMessage.onShowSuccess("Datos procesados correctamente");
          this.preloadservices.onHidePreloader();
          this.router.navigate(["app/Bascula/IngresoPendientes"]);

        },
        err=>this.flashMessage.onShowWarning(`Error procesados correctamente ${err}`),
        ()=>this.preloadservices.onHidePreloader()

      );
    }catch(err){
      this.flashMessage.onShowWarning(err);
    }

  }

  addDescuento(){
    this.selectDacutraDetalle.descripcion =this.descuento.descripcion;
    this.selectDacutraDetalle.descuento =this.descuento.porcentaje;
    this.descuento={porcentaje:0,descripcion:""};
  }

  addPeso(){
    try{
      console.log("peso vehiculo",this.pesoVehiculo);
      this.selectDacutraDetalle.pesovehiculo= this.pesoVehiculo;
      if(this.selectDacutraDetalle.pesovehiculo==0)
        throw new Error("Ingresa un valor en en el peso");

      if(this.selectDacutraDetalle.pesovehiculo > this.dtFactura.pesovehiculo)
        throw new Error("El peso del material no puede ser mayor al peso inicial del vehículos");


        let totalBascula:number =0;
      console.log("tamaño",this.dtFactura.dtfacturadetalleList.length)
      if(this.dtFactura.dtfacturadetalleList.length>0)
        totalBascula = this.dtFactura.dtfacturadetalleList.reduce((a: number,b:DtFacutraDetalle)=> {

          let valor:number=0;
          if(b.cantidad !==undefined){
            console.log("soy undefinido:",b.cantidad)
            console.log("valor:",b.cantidad)
            valor=b.cantidad
          }
          return Number(a) +  Number(valor);

        } ,0);


      console.log(totalBascula);

      this.selectDacutraDetalle.cantidad= Number(this.dtFactura.pesovehiculo)  - (Number(this.pesoVehiculo)+ Number(totalBascula));
      document.getElementById("closeModalPeso").click();
    }catch(err){
      this.flashMessage.onShowWarning(`Error procesados correctamente ${err}`);
    }
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


  getEstado():boolean{
    return this.dtFactura?.dtfacturadetalleList?.length > 0
  }

}
