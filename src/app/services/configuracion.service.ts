import { map } from 'rxjs/operators';

import { DtCategoriaModels } from '../models/dtcatadolo.moldels';
import { Injectable } from '@angular/core';
import { DataServices } from './data.service';
import { environment } from 'src/environments/environment';
import { DtConfiguracion } from '../models/dtconfiguracion.models';


@Injectable({
  providedIn: 'root'
})
export class ConfiguracionService  {
  public configuracion:DtConfiguracion[]=[];

  private modelhttp = 'categoriaRest';
  constructor(private dataservice:DataServices<DtConfiguracion>) {  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }

  getAll() {
    return this.dataservice.getAll(this.modelhttp)
    .pipe(
      map((resp:DtConfiguracion[])=>resp)
    );

  }
}
