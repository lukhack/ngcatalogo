import { TerceroJuridico } from './Tercerojuridico.models';
import { Municipio } from "./Municipios.models";
import { TerceroNatural } from "./Terceronatural.models";

export class Terceros{
  public id:number;
    public documento:string;
    public idmunicipio:Municipio;
    public dtterceronatural?:TerceroNatural;
    public dttercerojuridico?:TerceroJuridico;
    public cargoPersonas?:string;
    public telefono?:string;
    public direccion?:string;
    public correo?:string
  constructor(
    ){}
}
