import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { DtCategoriaModels } from './../../models/dtcatadolo.moldels';
import { SidebarService } from './../../services/sidebar.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: [ './sidebar.component.css'
  ]
})
export class SidebarComponent implements OnInit {
  menuItems: DtCategoriaModels[];
  public render: boolean;
  public sede:number=1;
  constructor(public sidebarService:SidebarService, private router: ActivatedRoute) {
    this.sede = sidebarService.sede;
  }

  ngOnInit(): void{
    this.sidebarService.geCategorias().subscribe({
      next:value=>{
        this.menuItems = value
        console.log(value);
      }

    });


    this.sede = this.sidebarService.sede==undefined?1:this.sidebarService.sede;
    console.log("soy una aventura:",this.sede);
  }



}
