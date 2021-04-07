import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { SidebarService } from './../services/sidebar.service';
import { SettingsService } from './../services/settings.service';
import { Component, OnInit } from '@angular/core';
import { SedesService } from '../services/sede.service';
import { Route } from '@angular/compiler/src/core';

declare function customInitFunctions();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  constructor(private  sedes:SedesService,
    private router:Router) { }

  ngOnInit(): void {
    console.log("router",this.router)
    console.log("idparameter async:",this.sedes.sedeid)
  }


}
