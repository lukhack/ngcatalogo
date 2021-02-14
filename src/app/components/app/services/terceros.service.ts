import { map, filter } from 'rxjs/operators';
import { Terceros } from '../models/Terceros.models';
import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

const base_url = environment.base_url

@Injectable({
  providedIn: 'root'
})
export class TercerosService {

  constructor(private  http_client: HttpClient) { }
/**
 *
 *
 * @returns
 * @memberof TercerosService
 */
  get_TercerosNatural(){
      const url = `${base_url}/tercerors`;
      console.log(url);
      return this.http_client.get<Terceros[]>(url).pipe(
        map((resp:Terceros[])=> resp.filter(ter=> ter.dtterceronatural))
      );
  }

  get_TercerosJuridico(){
    const url = `${base_url}/tercerors`;
    console.log(url);
    return this.http_client.get<Terceros[]>(url).pipe(
      map((resp:Terceros[])=> resp.filter(ter=> ter.dttercerojuridico))
    );
}
}
