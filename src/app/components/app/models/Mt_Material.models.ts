import { Mt_MaterialGrupo } from './Mt_MaterialGrupo.models';
import { Mt_MaterialUnidadMedida } from './Mt_MaterialUnidadMedida.models';
export class Mt_Material{
  public id:number;
  public codReferencia:string;
  public codcorto:string;
  public material:string;
  public receptor:string;
  public pesokg:number;
  public showbascula:boolean;
  public dtmagrupomaterial:Mt_MaterialGrupo;
  public unidadMedida:Mt_MaterialUnidadMedida;
  public total:number;
  constructor(

  ){}
}
