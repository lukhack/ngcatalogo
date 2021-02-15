

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [

    {
        path: 'app',
        component: PagesComponent,
        children: [
          { path: '', component: DashboardComponent, data:{titulo: 'Dashboard'} },
          { path: 'Bascula', component: DashboardComponent, data:{titulo: 'Bascula'},
              children:[
                { path: 'IngresoMateriales',component: DashboardComponent, data:{titulo: 'Ingreso Materiales'} },
              ]

          },

      ]
  },

];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class PagesRoutingModule {}


