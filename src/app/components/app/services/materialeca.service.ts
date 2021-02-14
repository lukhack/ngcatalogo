import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { DtEcaMaterial } from './../models/DtEcaMaterial.models';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const base_url = environment.base_url
@Injectable({
  providedIn: 'root'
})
export class MaterialecaService {


  constructor(private httpClient:HttpClient) { }

  getFindAll(){
    const url = `${base_url}/ecamaterialrs/10`;
    return this.httpClient.get<DtEcaMaterial[]>(url).pipe(
      map((resp:DtEcaMaterial[])=>resp)
    );
  }
}
