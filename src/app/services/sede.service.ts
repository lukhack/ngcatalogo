import { map } from 'rxjs/operators';

import { DtCategoriaModels } from '../models/dtcatadolo.moldels';
import { Injectable } from '@angular/core';
import { DataServices } from './data.service';
import { environment } from 'src/environments/environment';
import { DtSedes } from '../models/dtsedes.models';
import { Dtsesion } from '../models/dtsesion.models';


@Injectable({
  providedIn: 'root'
})
export class SedesService {
  public sedes:DtSedes[]=[];
  public sedeid:string;
  public sede:DtSedes;

  private modelhttp = 'categoriaRest';
  constructor(private dataservice:DataServices<DtSedes>) {  }

  getAll() {
    return this.dataservice.getAll(this.modelhttp)
    .pipe(
      map((resp:DtSedes[])=>resp)
    );
  }

  getId(sedeId:string){
    return this.sedes.find(sd=> sd.id === Number(sedeId));
  }

  processeSedeId(sedeId:string)
  {
    const storageId=localStorage.getItem("sedeId");
    this.sedeid=storageId;
    if(storageId){
        if(sedeId!=undefined)
            if(storageId != sedeId){
              this.sedeid=sedeId;
              localStorage.setItem("sedeId",sedeId);
            }else
              this.sedeid=storageId;
    }else{
      this.sedeid= sedeId===undefined?"1":sedeId;
      localStorage.setItem("sedeId",this.sedeid);
    }

    this.sede = this.getId(this.sedeid);

  }

}
