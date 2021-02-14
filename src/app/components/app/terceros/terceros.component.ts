import { Terceros } from '../models/Terceros.models';
import { TercerosService } from './../services/terceros.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-terceros',
  templateUrl: './terceros.component.html',
  styleUrls: ['./terceros.component.css']

})
export class TercerosComponent implements OnInit {
  @Input() titulo:string ="Terceros";
  @Output('selectedUser') terceroEmitter: EventEmitter<Terceros> = new EventEmitter;
  @Input('selecTercero') selectedUser: Terceros;

  public terceroList:Terceros[];
  constructor(private terceroService: TercerosService) {


  }

  ngOnInit(): void {
    this.terceroService.get_TercerosJuridico().subscribe(terceros=>{
      this.terceroList=terceros;
    });

    console.log("soy un tercero",this.selectedUser);
  }

  public onChange(value: Terceros){
    this.terceroEmitter.emit(value);
  }

  customSearchFn(term: string, item: any) {
    term = term.toLowerCase();

    // Creating and array of space saperated term and removinf the empty values using filter
    let splitTerm = term.split(' ').filter(t => t);

    let isWordThere = [];

    // Pushing True/False if match is found
    splitTerm.forEach(arr_term => {
      console.log(item);
      let search = item['documento'].toLowerCase();
      let search2 = item['dttercerojuridico']['razonSocial'].toLowerCase();
      isWordThere.push(search.indexOf(arr_term) != -1 || search2.indexOf(arr_term) != -1);
    });

    const all_words = (this_word) => this_word;
    // Every method will return true if all values are true in isWordThere.
    return isWordThere.every(all_words);
  }

}
