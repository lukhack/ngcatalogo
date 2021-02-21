import { CategoriaService } from './categoria.service';
import { Injectable, OnInit } from '@angular/core';

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
  public menu: any[]=[
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
  ];

  constructor(private categoriSevice:CategoriaService) {


  }

  ngOnInit():void{
      this.geCategorias();
  }


  geCategorias(){
    console.log('pruebas de data');
    this.categoriSevice.getAll().subscribe(x=>{
        console.log('data',x);
    });

  }
}
