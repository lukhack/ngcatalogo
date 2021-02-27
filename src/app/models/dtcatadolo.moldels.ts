import { Dtsesion } from './dtsesion.models';
export class DtCategoriaModels{
    public id:number;
    public categoria:string;
    public url:string;
    public orden:number;
    public show:boolean;
    public sesion:Dtsesion[];
    public constructor(){

    }
}
