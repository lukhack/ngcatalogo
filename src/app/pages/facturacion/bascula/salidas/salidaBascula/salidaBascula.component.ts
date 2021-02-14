import { DtFacturaTipo } from './../../../../../components/app/models/DtFacturaTipo.models';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashMessajeService } from './../../../../../services/flash-messaje.service';
import { ProcesoBasculaService } from './../../../../../services/proceso-bascula.service';
import { PreloaderServices } from './../../../../../services/preloader.services';
import { DtFacturaEstado } from './../../../../../components/app/models/DtFacturaEstado.models';

import { DtFactura } from './../../../../../components/app/models/DtFactura.models';
import { DtEcaMaterial } from './../../../../../components/app/models/DtEcaMaterial.models';
import { Terceros } from './../../../../../components/app/models/Terceros.models';
import { DtFacutraDetalle } from './../../../../../components/app/models/DtFacturaDetalle.models';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

interface IDescuento{
  porcentaje:number;
  descripcion:string;
}


@Component({
  selector: 'app-salida',
  templateUrl: './salida-bascula.component.html',
  styles: [
  ]
})
export class SalidaBasculaComponent implements OnInit {

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
  public pesoMaterial:number=0;

  constructor(private preloadservices:PreloaderServices,
              private procesobascula:ProcesoBasculaService,
              private flashMessage: FlashMessajeService,
              private routeActive: ActivatedRoute,
              private router: Router) {
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
      const tipoFActura = new DtFacturaTipo(2);
      this.dtFactura.dtmaEstadoFacturaid = estadoFActura;
      this.dtFactura.dtTipoFacturaid = tipoFActura;

      this.preloadservices.onShowPreloader();
      this.procesobascula.saveOfUpdate(this.dtFactura).subscribe(
        resp=>{
          this.dtFactura = resp
          this.flashMessage.onShowSuccess("Datos procesados correctamente");
          this.preloadservices.onHidePreloader();
          this.router.navigate(["app/Bascula/SalidasPMateriales"]);

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
      this.selectDacutraDetalle.pesovehiculo= this.pesoMaterial;
      if(this.selectDacutraDetalle.pesovehiculo==0)
        throw new Error("Ingresa un valor en en el peso");

      let totalBascula:number =0;
      this.selectDacutraDetalle.cantidad= Number(this.pesoMaterial);

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

