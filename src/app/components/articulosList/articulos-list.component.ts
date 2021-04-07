import { dtArticlesModels } from './../../models/dtarticles.models';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CatalogoService } from '../../services/catalogo.service';


const base_url = environment.base_url
@Component({
  selector: 'app-articulos-list',
  templateUrl: './articulos-list.component.html',
  styleUrls: ['./articulos-list.component.css'
  ]
})
export class ArticulosListComponent implements OnInit {
  @Input() articulo:dtArticlesModels;
  @Output("selectArticle") selectArticle:EventEmitter<dtArticlesModels>=new EventEmitter<dtArticlesModels>();
  public base_url;

  constructor(private wscatalogo:CatalogoService) { }

  ngOnInit(): void {
    this.base_url=base_url;
  }


  remplaceSpace(value:string):string{
  return value.replace('\n',"<br/>")
  }

  onSelectArticle(articulo:dtArticlesModels){
    this.selectArticle.emit(articulo);
    const doc = document.querySelector<HTMLInputElement>('#imagenZoom')
    doc.style.display = "block";
  }
/**
 *
 *
 * @memberof ArticulosListComponent
 */
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
