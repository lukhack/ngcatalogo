import { DtCategoriaModels } from './../../models/dtcatadolo.moldels';
import { takeWhile, map } from 'rxjs/operators';

import { SidebarService } from './../../services/sidebar.service';

import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { dtArticlesModels } from 'src/app/models/dtarticles.models';
import { interval } from 'rxjs';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {
  public articulo:dtArticlesModels;

  catalogo:DtCategoriaModels[];
  catalogoId:number=1;
  sessionId:number=1;
  articuloId:number=1;


  constructor(private router : Router, private activateRoute: ActivatedRoute, private siderService:SidebarService) { }



  ngOnInit(): void {
    this.activateRoute.params.pipe(map(p => p))
    .subscribe(parameter=>{
      console.log('parameters:',parameter);
      this.siderService.sede = parameter.sede==undefined?1:parameter.sede;
      this.siderService.tituloP = parameter.catalogo==undefined?"Catalogo":parameter.catalogo;
      this.siderService.tituloS = parameter.sesion==undefined?"Articulos":parameter.sesion;
      this.siderService.tituloS = parameter.sesion==undefined?"Articulos":parameter.sesion;

      this.catalogoId= parameter.catalodo==undefined?1:parameter.catalodo;
      this.sessionId= parameter.sesionid==undefined?1:parameter.sesionid;
      this.articuloId= parameter.articuloid==undefined?1:parameter.articuloid;


      this.getArticulos();
    });
  }

  public getArticulos(){

    const interval$=interval(100);
    let estadoRespose=true;
    interval$.pipe(
      takeWhile(x=>estadoRespose)
    ).subscribe({
      next:value=>{
        try{
          console.log("id:",value)
          this.articulo= this.catalogo
          .find(c=>c.id==this.catalogoId).sesion
          .find(s=>s.id ==this.sessionId).articulos
          .find(a=>a.id ==this.articuloId);
          console.log(this.articulo)

          estadoRespose  = false
        }catch(error){
          estadoRespose=true
        }
      }
    });

}

}
