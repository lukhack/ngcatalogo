import { dtArticlesModels } from './dtarticles.models';
import { stringify } from '@angular/compiler/src/util';
import { Dtclassstyle } from './dtclassstyle.models';

export class Dtsesion{
  public id: number;
  public categoria: string;
  public classstyle: string;
  public classstyleobj: Dtclassstyle;
  public folder: string;
  public orden: Number;
  public session:string;
  public show:boolean;
  public articulos:dtArticlesModels[];
}
