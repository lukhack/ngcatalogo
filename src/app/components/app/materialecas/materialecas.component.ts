import { DtEcaMaterial } from './../models/DtEcaMaterial.models';
import { MaterialecaService } from './../services/materialeca.service';
import { Mt_Material } from './../models/Mt_Material.models';
import { MaterialService } from './../services/material.service';

import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-materialecas',
  templateUrl: './materialecas.component.html',
  styles: []
})
export class MaterialecasComponent implements OnInit {
  public materialecaList:DtEcaMaterial[];
  public titulo:String="Material"
  @Output("selectMaterialeca") material:EventEmitter<DtEcaMaterial>=new EventEmitter();


  constructor(private materialServices:MaterialecaService) { }

  ngOnInit(): void {
    this.materialServices.getFindAll().subscribe(res=>this.materialecaList=res);
  }

  onChange(valor: DtEcaMaterial){
    this.material.emit(valor);
  }


  customSearchFn(term: string, item: any) {
    term = term.toLowerCase();

    // Creating and array of space saperated term and removinf the empty values using filter
    let splitTerm = term.split(' ').filter(t => t);

    let isWordThere = [];

    // Pushing True/False if match is found
    splitTerm.forEach(arr_term => {
      console.log(item);
      let search = item['material']['codcorto'].toLowerCase();
      let search2 = item['material']['material'].toLowerCase();
      isWordThere.push(search.indexOf(arr_term) != -1 || search2.indexOf(arr_term) != -1);
    });

    const all_words = (this_word) => this_word;
    // Every method will return true if all values are true in isWordThere.
    return isWordThere.every(all_words);
  }

}
