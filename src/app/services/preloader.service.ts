import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { DataServices } from './data.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreloaderServices {
    private preloader = <HTMLElement> document.querySelector(".preloader");

  constructor() {
  }

  onShowPreloader(){
    this.preloader.setAttribute('class', "preloader d-block");
  }

  onHidePreloader(){
     this.preloader.setAttribute('class', "preloader");
  }

}
