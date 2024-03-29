import { ArticuloComponent } from './articulo/articulo.component';
import { CatalogoComponent } from './catalogo/catalogo.component';


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
{
      path: 'catalogo',
      component: PagesComponent,
      children: [
        { path: 'articulos',  data:{titulo: 'Catalogo'},
            children:[
              { path: ':catalogo/:sesion/:catalodo/:sesionid',component: CatalogoComponent, data:{titulo: 'Articulos'} },
            ]
        },
        { path:':articulo/:sesion/:sede/:catalodo/:sesionid/:articulo',component: ArticuloComponent, data:{titulo: 'Articulo'} },

        { path: 'sede/:sede', component: CatalogoComponent, data:{titulo: 'Catalogo'} },
        { path: '', component: CatalogoComponent, data:{titulo: 'Catalogo'} },

      ]
},

];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class PagesRoutingModule {}


