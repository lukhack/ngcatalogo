import { Observable, interval, Subscription } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styles: [
  ]
})
export class ObservableComponent implements OnInit, OnDestroy {

  constructor() { }

  public interval: Subscription;
  ngOnInit(): void {



    /*this.getObservable$().pipe(
      retry(1)
    ).subscribe(
      valor => console.log('subs:', valor),
      (error)=> console.warn("Error", error),
      ()=> console.info("Proceso terminado")
    );*/

    this.interval = this.getRetornaIntervalo().subscribe((valor)=> console.log(valor));

  }

  ngOnDestroy(): void {
      this.interval.unsubscribe()
  }

  getRetornaIntervalo():Observable<string>{
      return interval(300).pipe(
          map(valor => valor + 1),
          filter(valor => (valor%2==0? true:false )),
          take(20),
          map(valor => "hola mundo"+valor)
      );
  }

  getObservable$(): Observable<number>{
    let dtint: number = 0;
    return  new Observable<number> (observer=>{
        const intervalo = setInterval(()=>{
          dtint++;
          observer.next(dtint);
          if(dtint==5){
            clearInterval(intervalo);
            observer.complete();
          }

          if(dtint==6){
            dtint=0;
            observer.error("error del hilo");

          }
        },1000)
    });
  }

}
