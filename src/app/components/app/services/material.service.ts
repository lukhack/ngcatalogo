import { map } from 'rxjs/operators';
import { Mt_Material } from './../models/Mt_Material.models';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const base_url = environment.base_url
@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  constructor(private httpClient:HttpClient) { }

  getFindAll(){
    const url = `${base_url}/materialrs`;
    return this.httpClient.get<Mt_Material[]>(url).pipe(
      map((resp:Mt_Material[])=>resp)
    );
  }
}


