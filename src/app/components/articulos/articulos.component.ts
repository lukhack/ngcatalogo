import { dtArticlesModels } from './../../models/dtarticles.models';
import { DtCategoriaModels } from './../../models/dtcatadolo.moldels';
import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';


const base_url = environment.base_url
@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css'
  ]
})
export class ArticulosComponent implements OnInit {
  @Input() articulo:dtArticlesModels;
  public base_url;
  constructor() {
    this.base_url = base_url;
   }

  ngOnInit(): void {
  }

}
