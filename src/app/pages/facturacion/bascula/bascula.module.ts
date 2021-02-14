import { ComponentsModule } from './../../../components/components.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BasculaComponent } from './bascula.component';
import { PendientesBasculaComponent } from './ingresos/pendientesBascula/pendientesBascula.component';
import { NgModule } from '@angular/core';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { SalidaCerradoComponent } from './salidas/salida-cerrado/salida-cerrado.component';
import { IngresoBasculaComponent } from './ingresos/ingresoBascula/ingresoBascula.component';
import { SalidaBasculaComponent } from './salidas/salidaBascula/salidaBascula.component';
import { CerradosBasculaComponent } from './ingresos/cerradosBascula/cerradosBascula.component';
import { SalidaPendientesComponent } from './salidas/salida-pendientes/salida-pendientes.component';



@NgModule({
  declarations: [
    BasculaComponent,
    IngresoBasculaComponent,
    SalidaBasculaComponent,
    PendientesBasculaComponent,
    CerradosBasculaComponent,

    SalidaCerradoComponent,
    SalidaCerradoComponent,
    SalidaPendientesComponent],
  exports:[
    BasculaComponent,
    IngresoBasculaComponent,
    PendientesBasculaComponent,
    CerradosBasculaComponent,

    SalidaBasculaComponent,
    SalidaCerradoComponent,
    SalidaPendientesComponent
  ],imports: [
    FormsModule,
    CommonModule,
    RouterModule,
    ComponentsModule,
    FlashMessagesModule.forRoot()
  ]
})
export class BasculaModule { }
