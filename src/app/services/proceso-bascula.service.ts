import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { DataServices } from './data.services';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProcesoBasculaService {
  constructor(private  http_client: HttpClient, private dataservice: DataServices<any>) {

  }

/*
  objs: Array<DtFactura> = [];
  obj: DtFactura;
  showDialog: boolean = false;
  private modelhttp = 'facturars/';


  ngOnInit(): void {
    console.log(this.modelhttp);
  }

  set(objs: DtFactura[]) {
      this.objs = objs;
      console.log('clientes', this.objs);
  }

  getObj() {
    return this.obj;
  }

  getAll() {
    return this.dataservice.getAll(this.modelhttp)
    .pipe(
      map((resp:DtFactura[])=>resp)
    ) ;

  }

  getAllParameters(parameter:string) {
    return this.dataservice.getAll(this.modelhttp+parameter)
    .pipe(
      map((resp:DtFactura[])=>resp)
    ) ;

  }

  getId(id: number): Observable<DtFactura>{
    return this.dataservice.getId(`${this.modelhttp}${id}`).pipe(
      map((resp:DtFactura)=> resp)
    );
  }

  saveOfUpdate(obj: DtFactura,path:string = ""):Observable<DtFactura> {
    console.log('estoy guardando')
    console.log(obj);
    obj.fecha=new Date();
    obj.fechapago=new Date();
    return this.dataservice.insert(this.modelhttp+path, obj).pipe(
      map((response: DtFactura) => response));
  }

  update(obj: DtFactura): Observable<DtFactura> {
    console.log('estoy actulizando');
    return this.dataservice.update(this.modelhttp, obj).pipe(
      map((response: DtFactura) => response)
    );
  }*/
}

