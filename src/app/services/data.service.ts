import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

const base_url = environment.base_url
@Injectable()
export class DataServices<T> implements OnInit {
  respuestEvent = new EventEmitter();

  httpUrl = `${base_url}`;
  //httpUrl = 'http://192.168.1.62:9090/FabricaBackend/apiRest/';
  type = '.json';

  constructor(public httpClient: HttpClient) {}

  ngOnInit (): void {
      this.respuestEvent.subscribe((res) => alert(res));
  }


  getAll(modelhttp: string): Observable<T[]> {
    const path = this.httpUrl + modelhttp;
    console.log("path:" + path);
    const dt =   this.httpClient.get<T[]>(path);
    return dt;
  }

  getId(modelhttp: string) {
    const path = this.httpUrl + modelhttp;
    return this.httpClient.get<T>(path);
  }

  update(modelhttp: string, object: T) {
    const path = `${this.httpUrl}${modelhttp}`;
    return this.httpClient.put(path, object);
  }

  insert(modelhttp: string, object: T) {
    const path = this.httpUrl + modelhttp;
    return this.httpClient.post(path, object);
  }

  delete(modelhttp: string) {
    const path = `${this.httpUrl}${modelhttp}`;
    return this.httpClient.delete(path);
  }

}
