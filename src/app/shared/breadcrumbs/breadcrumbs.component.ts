import { SidebarService } from './../../services/sidebar.service';
import { filter, map } from 'rxjs/operators';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { pipe, Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {
  public tituloP="";
  public tituloS="";

  public tituloSubcribe:Subscription;
  constructor(private router: Router, private activatedRoute: ActivatedRoute,  public siderService:SidebarService) {
    this.tituloP = this.siderService.tituloP;
    this.tituloS = this.siderService.tituloS;

    this.tituloSubcribe = this.gerRouterTitle().subscribe((data) =>{
      //={{titulo }}== data.titulo
      console.log('navegacion:t',data);
      activatedRoute.data.subscribe(d => console.log('activeRoute:',d));

    });


   }


  ngOnInit(): void {
    console.log('comienzo')


  }

  ngOnDestroy(): void {
    this.tituloSubcribe.unsubscribe();
  }
  gerRouterTitle(){
    return this.router.events
    .pipe(
      filter(event=> event instanceof ActivationEnd),
      filter((event:ActivationEnd) => event.snapshot.firstChild === null),
      map((event: ActivationEnd) => event.snapshot.data)
    )
  }


}
