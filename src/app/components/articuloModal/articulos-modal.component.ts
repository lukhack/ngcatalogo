import { dtArticlesModels } from '../../models/dtarticles.models';
import { DtCategoriaModels } from '../../models/dtcatadolo.moldels';
import { Component, Input, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { environment } from 'src/environments/environment';


const base_url = environment.base_url
@Component({
  selector: 'app-articulos-modal',
  templateUrl: './articulos-modal.component.html',
  styleUrls: ['./articulos-modal.component.css'
  ]
})
export class ArticulosModalComponent implements OnInit {
  @ViewChild('imagenZoom') modalImg:ElementRef;

  @Input() articulo:dtArticlesModels;
  @Output() selectArticle:EventEmitter<dtArticlesModels>=new EventEmitter<dtArticlesModels>();
  public base_url;

  constructor() { }

  ngOnInit(): void {
    this.base_url=base_url;
  }


  remplaceSpace(value:string):string{
  return value.replace('\n',"<br/>")
  }

  onSelectArticle(selectArticle:dtArticlesModels){
    this.selectArticle.emit(selectArticle);
  }

  onShowModal(){
    const doc = document.querySelector<HTMLInputElement>('#imagenZoom')
    doc.style.display = "block";
  }


}
