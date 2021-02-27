import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { DtCategoriaModels } from './../models/dtcatadolo.moldels';
import { CategoriaService } from './categoria.service';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

interface menu_int{
  id:number,
  url:string,
  orden:0,
  show:boolean
}



@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  public menu: DtCategoriaModels[]=[];
  public render:boolean=false;
  public sede:number;

  public tituloP:string="Catalogo";
  public tituloS:string="Articulos";

  /*public menu: any[]=[
    {
      titulo:'Facturacion',
      icono: 'mdi mdi-gauge',
      submenu:[
        {titulo: 'Facturar', url:'Facturar', },
        {titulo: 'Donaciones', url:'Donaciones'},
        {titulo: 'Bascula', url:'Bascula',
         submenu:[
            {titulo: 'Compras', url:'Bascula/IngresoMateriales', submenu:[
                {titulo: 'Compras', url:'Bascula/IngresoMateriales', },
                {titulo: 'Pendientes', url:'Bascula/IngresoPendientes', },
                {titulo: 'Procesados', url:'Bascula/IngresosCerrados', },
              ]
            },
            {titulo: 'Ventas', url:'Bascula/SalidaMateriales', submenu:[
                {titulo: 'Ingreso', url:'Bascula/SalidaMateriales' },
                {titulo: 'Pendientes', url:'Bascula/SalidasPMateriales' },
                {titulo: 'Procesadas', url:'Bascula/SalidasCMateriales' },
              ]
            }
          ]
        },
      ]
    }
  ];*/



  constructor(private categoriSevice:CategoriaService,private route: ActivatedRoute) {
    this.geCategorias();

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }

  getArticulos():DtCategoriaModels[]{
    return this.menu;
  }

  geCategorias(){

    return this.categoriSevice.getAll();

  }


  getRouter(){

  }
}
