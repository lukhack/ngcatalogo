import { DtCategoriaModels } from './../../models/dtcatadolo.moldels';
import { dtArticlesModels } from './../../models/dtarticles.models';
import { SidebarService } from './../../services/sidebar.service';
import { map, takeWhile } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css'
  ]
})
export class CatalogoComponent implements OnInit {

  public articulos:dtArticlesModels[];
  public currentURL='';
  public showGrid:boolean=false;

  constructor(private router : Router, private activateRoute: ActivatedRoute, private siderService:SidebarService) {
    this.currentURL = window.location.href;
  }

  catalogoId:number=1;
  sessionId:number=1;
  catalogo:DtCategoriaModels[];

  ngOnInit(): void {

    this.siderService.geCategorias().subscribe({
      next:value=>{
        this.catalogo = value
      }
    });


    this.activateRoute.params.pipe(map(p => p))
    .subscribe(parameter=>{
      console.log('parameters:',parameter);
      this.siderService.sede = parameter.sede==undefined?1:parameter.sede;
      this.siderService.tituloP = parameter.catalogo==undefined?"Catalogo":parameter.catalogo;
      this.siderService.tituloS = parameter.sesion==undefined?"Articulos":parameter.sesion;
      this.catalogoId= parameter.catalodo==undefined?1:parameter.catalodo;
      this.sessionId= parameter.sesionid==undefined?1:parameter.sesionid;
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
            this.articulos= this.catalogo
            .find(c=>c.id==this.catalogoId).sesion
            .find(a=>a.id ==this.sessionId).articulos;
            console.log(this.articulos)

            estadoRespose  = false
          }catch(error){
            estadoRespose=true
          }
        }
      });

  }


  showgrid(showGrid:boolean){
    this.showGrid=showGrid;
  }
}
