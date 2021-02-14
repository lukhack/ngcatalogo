import { DtEcaMaterial } from './DtEcaMaterial.models';
import { Terceros } from './Terceros.models';
export class DtFacutraDetalle{
  public iddetalleFactura: number;
  public pesovehiculo: number=0 ;
  public cantidad: number;
  public valor: number;
  public descuento:number=0;
  public descripcion: string;
  public clasificacion: string;
  public convenio: boolean;
  public materialid: DtEcaMaterial;
  public terceroconvenio_id?: Terceros;
  public subTotal?: string;
  public iva?: string
  constructor(){}
}
