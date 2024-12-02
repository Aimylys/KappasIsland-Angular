import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Item } from "./myitem";

@Injectable({
  providedIn: 'root'
})
export class MyitemService {
  private apiUrl = 'http://localhost:8081/api/items';

  // We'll use this to talk to ticket service
  itemAdded = new EventEmitter<Item>();

  constructor(private http: HttpClient) { }

  addItem(item: Item): Observable<Item> {
    // Makes the request
    return this.http.post<Item>(`${this.apiUrl}/add`, item).pipe(
      // Tell ticket component that the new was added to the list
      tap((newItem: Item) => {
        this.itemAdded.emit(newItem);
      })
    );
  }
}
