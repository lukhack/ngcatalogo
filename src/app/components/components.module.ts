import { NgxPrintModule } from 'ngx-print';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncrementadorComponent } from './incrementador/incrementador.component';
import {DonaComponent } from './grafica/dona.component';
import { ChartsModule } from 'ng2-charts';
import { MaterialecasComponent } from './app/materialecas/materialecas.component';
import { TercerosComponent } from './app/terceros/terceros.component';
import { HttpClientModule } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { MaterialesComponent } from './app/materiales/materiales.component';
import { PrintComponent } from './app/print/print.component';



@NgModule({
  declarations: [
    IncrementadorComponent,
    DonaComponent,
    MaterialecasComponent,
    TercerosComponent,
    MaterialesComponent,
    PrintComponent],
  imports: [
    CommonModule,
    NgSelectModule,
    FormsModule,
    ChartsModule,
    HttpClientModule,
    NgxPrintModule
  ],
  exports: [
    IncrementadorComponent,
    DonaComponent,
    MaterialecasComponent,
    TercerosComponent,
    PrintComponent
  ]
})
export class ComponentsModule { }
