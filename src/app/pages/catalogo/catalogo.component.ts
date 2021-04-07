import { DtCategoriaModels } from './../../models/dtcatadolo.moldels';
import { dtArticlesModels } from './../../models/dtarticles.models';
import { SidebarService } from './../../services/sidebar.service';
import { map, takeWhile } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, ElementRef,  OnInit, ViewChild } from '@angular/core';
import { interval } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SedesService } from '../../services/sede.service';


const base_url = environment.base_url;

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css'
  ]
})
export class CatalogoComponent implements OnInit {

  @ViewChild('imagenZoom') private modalImg:ElementRef;
  public articulos:dtArticlesModels[];
  public selectArticulo:dtArticlesModels;
  public currentURL='';
  public showGrid:boolean=false;
  public base_url;

  constructor(private router : Router,
    private activateRoute: ActivatedRoute,
    private siderService:SidebarService,
    private sedeSerivces:SedesService) {
    this.currentURL = window.location.href;
    this.base_url=base_url;
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
      this.sedeSerivces.processeSedeId(parameter.sede);
      console.log('sedeId:',this.sedeSerivces.sedeid);

      this.siderService.tituloP = parameter.catalogo==undefined?"Catalogo":parameter.catalogo;
      this.siderService.tituloS = parameter.sesion==undefined?"Articulos":parameter.sesion;
      this.catalogoId= parameter.catalodo==undefined?1:parameter.catalodo;
      this.sessionId= parameter.sesionid==undefined?1:parameter.sesionid;
      this.getArticulos();
    });
}


  onSelectArticle(value: dtArticlesModels, idModal:string){
      console.log(this.selectArticulo)

      document.getElementById(idModal).click();
      this.selectArticulo = value;
  }


  public getArticulos(){

      const interval$=interval(100);
      let estadoRespose=true;
      interval$.pipe(
        takeWhile(x=>estadoRespose)
      ).subscribe({
        next:value=>{
          try{
            //console.log("id:",value)
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

  onCloseModal(){
    this.modalImg.nativeElement.style.display ="none";
  }
  showgrid(showGrid:boolean){
    this.showGrid=showGrid;
  }
}
