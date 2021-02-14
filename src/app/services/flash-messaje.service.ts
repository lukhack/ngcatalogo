import { Injectable } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';

@Injectable({
  providedIn: 'root'
})
export class FlashMessajeService {
/* this.flashMessagesService.show("Datos Procesando lo datos ",{
        cssClass: 'alert alert-danger', timeout: 4000,
        [close]="true/false"
          [closeBtnClass]="'some-class1 some-class2'"
      });*/

  constructor(private flashMessage: FlashMessagesService) {}

    onShowSuccess(mensaje:string='Datos Procesador correctamente',navigate:string="", timeOut:number=4000):void {
        this.flashMessage.show(mensaje,{
          close: true,
          closeBtnClass: 'class1 class2',
          navigate: navigate,
          cssClass: 'alert alert-success',
          timeout: timeOut
        });

        /*this.flashMessagesService.show("Datos Procesando lo datos ",{
          cssClass: 'alert alert-danger'
        });*/
    }

    onShowInfo(mensaje:string='Mensaje de información',navigate:string="", timeOut:number=4000) {
        this.flashMessage.show(mensaje,{
          close: true,
          closeBtnClass: 'class1 class2',
          navigate: navigate,
          cssClass: 'alert alert-infoz',
          timeout: timeOut
        });
    }

    onShowWarning(mensaje:string='Error procesando los datos',navigate:string="", timeOut:number=4000) {
        this.flashMessage.show(mensaje,{
          close: true,
          closeBtnClass: 'class1 class2',
          navigate: navigate,
          cssClass: 'alert alert-danger',
          timeout: timeOut
        });
    }

}
