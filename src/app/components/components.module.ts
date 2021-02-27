import { ArticulosListComponent } from './articulosList/articulos-list.component';
import { NgxPrintModule } from 'ngx-print';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { ArticulosComponent } from './articulos/articulos.component';



@NgModule({
  declarations: [
    ArticulosComponent,
    ArticulosListComponent],
  imports: [
    CommonModule,
    NgSelectModule,
    FormsModule,
    ChartsModule,
    HttpClientModule,
    NgxPrintModule,
  ],
  exports: [
    ArticulosComponent,
    ArticulosListComponent

  ]
})
export class ComponentsModule { }
