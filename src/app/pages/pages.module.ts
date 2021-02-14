import { ProcesoBasculaService } from './../services/proceso-bascula.service';
import { DataServices } from './../services/data.services';
import { NgModule } from '@angular/core';
import { BasculaModule } from './facturacion/bascula/bascula.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import{ ChartsModule } from 'ng2-charts';

import { ComponentsModule } from './../components/components.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { ObservableComponent } from './observable/observable.component';
import { IngresoComponent } from './facturacion/ingreso/ingreso.component';
import { DonacionesComponent } from './facturacion/donaciones/donaciones.component';
import { FlashMessagesModule } from 'angular2-flash-messages';




@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
    AccountSettingsComponent,
    PromesasComponent,
    ObservableComponent,
    IngresoComponent,
    DonacionesComponent
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
    AccountSettingsComponent,
    IngresoComponent,
    DonacionesComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    ChartsModule,
    SharedModule,
    RouterModule,
    ComponentsModule,
    BasculaModule,
    FlashMessagesModule.forRoot()

  ],
  providers:[
    DataServices,
    ProcesoBasculaService
  ],
})
export class PagesModule {

}
