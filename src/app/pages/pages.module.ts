import { ProcesoBasculaService } from './../services/proceso-bascula.service';
import { DataServices } from './../services/data.services';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import{ ChartsModule } from 'ng2-charts';

import { ComponentsModule } from './../components/components.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { FlashMessagesModule } from 'angular2-flash-messages';




@NgModule({
  declarations: [
    DashboardComponent,
    PagesComponent,
  ],
  exports: [
    DashboardComponent,
    PagesComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    ChartsModule,
    SharedModule,
    RouterModule,
    ComponentsModule,
    FlashMessagesModule.forRoot()

  ],
  providers:[
    DataServices,
    ProcesoBasculaService
  ],
})
export class PagesModule {

}
