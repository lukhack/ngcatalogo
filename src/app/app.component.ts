import { map } from 'rxjs/operators';
import { SettingsService } from './services/settings.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { SidebarService } from './services/sidebar.service';
import { Component, OnInit } from '@angular/core';
import { ConfiguracionService } from './services/configuracion.service';
import { concat, forkJoin } from 'rxjs';
import { SedesService } from './services/sede.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Catalogo';
  constructor(private settinService: SettingsService,
              private configuracion:ConfiguracionService,
              private  sedes:SedesService,
              private router : Router){}

  ngOnInit(): void {


      forkJoin({
        configuracion:this.configuracion.getAll(),
        sedes:this.sedes.getAll(),
      }).subscribe(x=>{
        this.configuracion.configuracion = x.configuracion,
        this.sedes.sedes = x.sedes

        console.log(".....inpresión joins........")
        console.log(this.configuracion)
      })


      console.log("path:",this.router.url);
      console.log("path:",  document.location.hostname);



  }

}
