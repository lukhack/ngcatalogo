import { DtEcaSucural } from './DtEcaSucursal.models';
import { Mt_Material } from './Mt_Material.models';
export class MtMaterialEcas{
  constructor(
    public id: number,
    public fecha: Date,
    public valorCompra: number,
    public valorVenta: number,
    public material: Mt_Material,
    public ecaSucursal: DtEcaSucural

  ){

  }
}
