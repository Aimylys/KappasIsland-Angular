import { Injectable } from '@angular/core';
import { Item } from '../myitem/myitem';
import { HttpClient } from "@angular/common/http"
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListitemsService {

  // Notre tableau d'article partagé
  public items: Item[] = [];

  constructor(private http:HttpClient) { }

  // On récupère nos items
  public getItems() {
    return this.http.get<Item[]>('http://localhost:8081/api/items');
  }

  // On supprime un article par son index d'un tableau
  public supprimerItem(i: number): Observable<void> {
    this.items.splice(i,1);
    return this.http.delete<void>('http://localhost:8081/api/items/del/' + i);
  }
}
