import { MaterialService } from './../services/material.service';
import { Mt_Material } from './../models/Mt_Material.models';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-materiales',
  templateUrl: './materiales.component.html',
  styles: [
  ]
})
export class MaterialesComponent implements OnInit {

  public materialesList:Mt_Material[];
  public titulo:String="Material"
  @Output("selectMaterial") material:EventEmitter<Mt_Material>=new EventEmitter();


  constructor(private materialServices:MaterialService) {  }

  ngOnInit(): void {
    this.materialServices.getFindAll().subscribe(res=>this.materialesList=res);
  }

  onChange(valor: Mt_Material){
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
      let search = item['codcorto'].toLowerCase();
      let search2 = item['material'].toLowerCase();
      isWordThere.push(search.indexOf(arr_term) != -1 || search2.indexOf(arr_term) != -1);
    });

    const all_words = (this_word) => this_word;
    // Every method will return true if all values are true in isWordThere.
    return isWordThere.every(all_words);
  }

}
