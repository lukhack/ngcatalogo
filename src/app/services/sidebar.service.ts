import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  public menu: any[]=[
    {
      titulo:'DashBoard',
      icono: 'mdi mdi-gauge',
      submenu:[
        {titulo: 'Main', url:'/'},
        {titulo: 'Progressbar', url:'progress'},
        {titulo: 'Gráficas', url:'grafica1'},
        {titulo: 'Promesas', url:'promesas'},
        {titulo: 'rxjs', url:'rxjs'},]
    },
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
  ]
  constructor() { }
}
