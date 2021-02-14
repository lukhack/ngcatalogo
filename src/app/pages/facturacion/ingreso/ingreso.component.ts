import { FlashMessagesService } from 'angular2-flash-messages';

import { DtFacutraDetalle } from './../../../components/app/models/DtFacturaDetalle.models';
import { DtFactura } from './../../../components/app/models/DtFactura.models';
import { DtEcaMaterial } from './../../../components/app/models/DtEcaMaterial.models';
import { Terceros } from './../../../components/app/models/Terceros.models';
import { Component, OnInit, ViewChild } from '@angular/core';

interface IDescuento{
  porcentaje:number;
  descripcion:string;
}

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css'
  ]
})
export class IngresoComponent implements OnInit {
  public showDanger:boolean = false;
  private linkTheme = <HTMLElement> document.querySelector("#onShowModal");

  public modal = document.getElementById("onShowModal");

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

  constructor(private flashMessagesService: FlashMessagesService) {
    this.dtFactura=Object.create(DtFactura);
    this.dtFacutraDetalle=Object.create(DtFacutraDetalle);
    this.dtFacutraDetalle.materialid = Object.create(DtEcaMaterial);
    this.selectDacutraDetalle=Object.create(DtFacutraDetalle);
  }

  ngOnInit(): void {
  }


  onChangeTercero(value:Terceros){
    console.log(value)
    this.dtFactura.tercero = value;
  }

  onChangeMaterial(value:DtEcaMaterial){
    this.dtFacutraDetalle.materialid = value;
    this.dtFacutraDetalle.valor= value.valorCompra;
    console.log(this.dtFacutraDetalle);
  }


  openModalPeso(value: DtFacutraDetalle){
    console.log(this.dtFactura.pesovehiculo)
    if(this.dtFactura.pesovehiculo===0 || this.dtFactura.pesovehiculo===undefined){
      this.flashMessagesService.show("Para agregar el peso de un material ingrea el peso del cambión  ",{
        cssClass: 'alert alert-danger', timeout: 10000
      });
    }else{
      document.getElementById("openModalButton").click();
      this.selectDacutraDetalle = value;
    }
  }

  openAddModalMaterial(value: DtFacutraDetalle){
    console.log(this.dtFactura.pesovehiculo)
    if(this.dtFactura.pesovehiculo===0 || this.dtFactura.pesovehiculo===undefined){
      this.flashMessagesService.show("Para agregar el peso de un material ingrea el peso del cambión  ",{
        cssClass: 'alert alert-danger', timeout: 10000
      });
    }else{
      this.selectDacutraDetalle=value;
      this.descuento.porcentaje = value.descuento;
      this.descuento.descripcion = value.descripcion;
    }
  }

  onAddMaterialClick(){
    try{
      console.log(this.dtFacutraDetalle.materialid);
      if(typeof this.dtFactura.dtfacturadetalleList === "undefined")
          this.dtFactura.dtfacturadetalleList = [];

          this.dtFactura.dtfacturadetalleList.push(this.dtFacutraDetalle);
          this.flashMessagesService.show("Articulo añadido correctamente ",{
            cssClass: 'alert alert-success', timeout: 1000
          });

    }catch(error){
      this.flashMessagesService.show("Datos Procesando lo datos ",{
        cssClass: 'alert alert-danger', timeout: 4000
      });
    }finally{
      console.log("DAta 1",this.dtFacutraDetalle);
      this.dtFacutraDetalle =  Object.create(DtFacutraDetalle);
      this.dtFacutraDetalle.materialid = Object.create(DtFacutraDetalle);

      console.log("DAta 2",this.dtFacutraDetalle);
      console.log("DAta 3", this.dtFactura.dtfacturadetalleList);

    }




  }

  addDescuento(){
    this.selectDacutraDetalle.descripcion =this.descuento.descripcion;
    this.selectDacutraDetalle.descuento =this.descuento.porcentaje;
    this.descuento={porcentaje:0,descripcion:""};
  }

  addPeso(){
    console.log("peso vehiculo",this.pesoVehiculo);
    this.selectDacutraDetalle.pesovehiculo= this.pesoVehiculo;
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

}
