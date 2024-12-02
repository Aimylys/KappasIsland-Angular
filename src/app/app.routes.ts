import { Routes } from '@angular/router';
import { MyitemComponent } from './myitem/myitem.component';
import { ListitemsComponent } from './listitems/listitems.component';
import { CheckmontersComponent } from './checkmonters/checkmonters.component';
import {AccueilComponent} from "./accueil/accueil.component";

export const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'myitem', component: MyitemComponent },
  { path: 'listitems', component: ListitemsComponent },
  //{ path: 'mymuseum', loadChildren: () => import('./mymuseum/mymuseum.module').then(m => m.MymuseumModule) },
  { path: 'checkmonsters', component: CheckmontersComponent },
];
