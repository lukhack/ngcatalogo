import { Departamento } from "./Departamento.models";

export class Municipio{
  constructor(
    public id:number,
    public codDane:number,
    public municipio:string,
    public idDepartamento:Departamento
  ){

  }
}
