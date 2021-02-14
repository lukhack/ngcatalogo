import { SalidaCerradoComponent } from './facturacion/bascula/salidas/salida-cerrado/salida-cerrado.component';

import { NgModule } from '@angular/core';

import { BasculaComponent } from './facturacion/bascula/bascula.component';
import { DonacionesComponent } from './facturacion/donaciones/donaciones.component';
import { IngresoComponent } from './facturacion/ingreso/ingreso.component';
import { ObservableComponent } from './observable/observable.component';
import { PromesasComponent } from './promesas/promesas.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { IngresoBasculaComponent } from './facturacion/bascula/ingresos/ingresoBascula/ingresoBascula.component';
import { PendientesBasculaComponent } from './facturacion/bascula/ingresos/pendientesBascula/pendientesBascula.component';
import { CerradosBasculaComponent } from './facturacion/bascula/ingresos/cerradosBascula/cerradosBascula.component';
import { SalidaBasculaComponent } from './facturacion/bascula/salidas/salidaBascula/salidaBascula.component';
import { SalidaPendientesComponent } from './facturacion/bascula/salidas/salida-pendientes/salida-pendientes.component';

const routes: Routes = [

    {
        path: 'app',
        component: PagesComponent,
        children: [
          { path: '', component: DashboardComponent, data:{titulo: 'Dashboard'} },
          { path: 'progress', component: ProgressComponent, data:{titulo: 'Progress'} },
          { path: 'grafica1', component: Grafica1Component, data:{titulo: 'grafica1'} },
          { path: 'account-settings', component: AccountSettingsComponent, data:{titulo: 'Ajustes cuenta'} },
          { path: 'promesas', component: PromesasComponent, data:{titulo: 'Promesas'} },
          { path: 'rxjs', component: ObservableComponent, data:{titulo: 'Rxjs Objservable'} },

          { path: 'Facturar', component: IngresoComponent, data:{titulo: 'Facturación Ingreso'} },
          { path: 'Donaciones', component: DonacionesComponent, data:{titulo: 'Donaciones'} },
          { path: 'Bascula', component: BasculaComponent, data:{titulo: 'Bascula'},
              children:[
                { path: 'IngresoMateriales',component: IngresoBasculaComponent, data:{titulo: 'Ingreso Materiales'} },
                { path: 'IngresoPendientes', component: PendientesBasculaComponent, data:{titulo: 'Ingresos Pendientes'} },
                { path: 'IngresosCerrados', component: CerradosBasculaComponent, data:{titulo: 'Ingresos cerrados'} },

                { path: 'SalidaMateriales', component: SalidaBasculaComponent, data:{titulo: 'Salida Materiales'} },
                { path: 'SalidasPMateriales', component: SalidaPendientesComponent, data:{titulo: 'Salida Materiales'} },
                { path: 'SalidasCMateriales', component: SalidaCerradoComponent, data:{titulo: 'Salida Materiales'} },

              ]

          },

          { path: 'Terceros', component: IngresoComponent, data:{titulo: 'Terceros'} },
          { path: 'Materiales', component: DonacionesComponent, data:{titulo: 'Materiales'} },

      ]
  },

];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class PagesRoutingModule {}


