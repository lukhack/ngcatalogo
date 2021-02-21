import { map } from 'rxjs/operators';

import { DtCategoriaModels } from './../models/dtcatadolo.moldels';
import { Injectable } from '@angular/core';
import { DataServices } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private modelhttp = 'categoriaRest/';
  constructor(private dataservice:DataServices<DtCategoriaModels>) {  }

  getAll() {
    return this.dataservice.getAll(this.modelhttp)
    .pipe(
      map((resp:DtCategoriaModels[])=>resp)
    );

  }
}
