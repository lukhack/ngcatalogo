import { Component, OnInit } from '@angular/core';
import { rejects } from 'assert';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getUsuario().then(usuarios=>{
      console.log(usuarios);
    }).catch(error=> console.log());

    const promesa = new Promise((resolve, reject)=>{
        if(false){
          resolve('Hola mundo');
        }else{
          reject('algo salio mal');
        }
    });
    promesa.then((mensaje)=>{
      console.log(mensaje);
    }).catch((mensaje)=>{
      console.log(mensaje);
    }).finally(()=>{
        console.log("he finalizado");
    });

    console.log('Fin init')
  }



  getUsuario(){
    return new Promise((resolve, reject)=>{
      try{
        fetch('https://reqres.in/api/users?page=2')
        .then( (resp) => resp.json())
        .then(body =>
          resolve(body.data)
        ).catch(error=>reject("Error consultado la patición GET"));
      }catch(e){
        reject("Error consultado la patición GET");
      }
    });

  }

}
