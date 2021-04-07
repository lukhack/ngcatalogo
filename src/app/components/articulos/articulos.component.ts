import { dtArticlesModels } from './../../models/dtarticles.models';
import { DtCategoriaModels } from './../../models/dtcatadolo.moldels';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
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
  @Output() selectArticle:EventEmitter<dtArticlesModels>=new EventEmitter<dtArticlesModels>();
  public base_url;
  constructor() {
    this.base_url = base_url;
  }

  ngOnInit(): void {
  }


  onSelectArticle(selectArticle:dtArticlesModels){
    this.selectArticle.emit(selectArticle);
  }

  whatsappSend(){
    const isMobile = navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOs/i)
    let link:string;
    const phone="573012602167"
    if(isMobile){
      link = `https://wa.me/${phone}?text=${this.articulo}`;
    }else{
      link =  `https://api.whatsapp.com/send?phone=${phone}&text=${this.articulo}`;
    }

    const mywindow = window.open(link,  "Whatsapp", "status=1, height=400, width=400, toolbar=0,resizable=0")

    document.hasFocus();

    setTimeout(() => {
        mywindow.close()
    }, 10000);

  }

}
