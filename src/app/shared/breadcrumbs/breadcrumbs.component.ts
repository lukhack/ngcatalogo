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
  public titulo="";
  public tituloSubcribe:Subscription;
  constructor(private router: Router, private route: ActivatedRoute) {
    console.log("ActivatedRoute"+ route.snapshot.children[0].data);
    this.tituloSubcribe = this.gerRouterTitle().subscribe(({titulo}) =>{
      //={{titulo }}== data.titulo
      console.log(this.titulo);
      this.titulo = titulo
    });
   }


  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.tituloSubcribe.unsubscribe();
  }
  gerRouterTitle(){
    return this.router.events
    .pipe(
      filter(event=> event instanceof ActivationEnd),
      filter((event:ActivationEnd) => event.snapshot.firstChild === null),
      map((event: ActivationEnd) => event.snapshot.data)
    );
  }


}
