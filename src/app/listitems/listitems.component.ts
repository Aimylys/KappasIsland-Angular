import { Component } from '@angular/core';
import { ListitemsService } from './listitems.service'
import { Item } from '../myitem/myitem';
import { ChangeDetectorRef } from '@angular/core';
import { MyitemService } from '../myitem/myitem.service';

@Component({
  selector: 'app-mymuseum',
  standalone: true,
  imports: [],
  templateUrl: './listitems.component.html',
  styleUrl: './listitems.component.css'
})
export class ListitemsComponent {
  // On initialise une variable article qui est un tableau d'article et un tableau vide
  public items: Item[] = [];

  // J'injecte mon service dans mon composant
  constructor(private listitemsService: ListitemsService, private cdr: ChangeDetectorRef, private itemService: MyitemService) {
  }

  // When we load the page/component, this will be executed.
  ngOnInit() {
    // J'instancie la variable de mon tableau d'article (celui de mon composant) avec le tableau partagé (de mon service)
    this.listitemsService.getItems().subscribe((data: Item[]) => {
      this.items = data;
      this.listitemsService.items = data;
    });
    // This will add the new value inserted in the form to the ticket component when we press the Add button.
    this.itemService.itemAdded.subscribe((newItem: Item) => {
      // Add the article to the list
      this.items.push(newItem);
    });
  }

  // Je supprime un article par son index en appelant la méthode générique de mon service
  onDeleteArticle(id: number) {
    // When we delete an article, we want to make sure to remove it from the ticket component.
    this.listitemsService.supprimerItem(id).subscribe(
      (response: any) => {
        // We retreive the article by it's id
        const index = this.items.findIndex(item => item.id === id);
        // Make sure we find an article with the corresponding id
        if (index !== -1) {
          // Remove the article from the list
          this.items.splice(index, 1);
        }
      },
    );
  }
}
