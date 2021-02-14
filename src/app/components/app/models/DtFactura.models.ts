import { DtFacturaEstado } from './DtFacturaEstado.models';
import { DtFacutraDetalle } from './DtFacturaDetalle.models';
import { DtEcaSucural } from './DtEcaSucursal.models';
import { DtFacturaTipo } from './DtFacturaTipo.models';
import { Terceros } from './Terceros.models';
import { DtMedioTransporte } from './DtMedioTransporte.models';
export class DtFactura{
    public id: number;
    public fecha:Date;
    public hora:Date;
    public fechapago:Date;
    public consecutivo: string;
    public descripcion: string;
    public descripcionpago: string;
    public horario: string;
    public subTotal: number;
    public descuento: number;
    public totalClasificacino: number;
    public total: number;
    public pesovehiculo: number =1000;
    public pesosalida: number =0;
    public dtEcassucursalid: DtEcaSucural;
    public dtTipoFacturaid: DtFacturaTipo;
    public tercero: Terceros ;
    public usuario: string;
    public dtfacturadetalleList:  DtFacutraDetalle[];
    public dttransporte_id: DtMedioTransporte;
    public dtmaEstadoFacturaid?: DtFacturaEstado;
    public consManual?: string;
    public facturaRelacion?: string;
    public placavehiculo?: string;
  constructor(){}
}
