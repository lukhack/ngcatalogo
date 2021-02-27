import { dtArticlesModels } from './../../models/dtarticles.models';
import { DtCategoriaModels } from '../../models/dtcatadolo.moldels';
import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';


const base_url = environment.base_url
@Component({
  selector: 'app-articulos-list',
  templateUrl: './articulos-list.component.html',
  styleUrls: ['./articulos-list.component.css'
  ]
})
export class ArticulosListComponent implements OnInit {
  @Input() articulo:dtArticlesModels;
  public base_url;

  constructor() { }

  ngOnInit(): void {
    this.base_url=base_url;
  }


  remplaceSpace(value:string):string{
  return value.replace('\n',"<br/>")
  }

}
