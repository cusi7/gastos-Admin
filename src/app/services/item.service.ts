import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  items: Item[] = [];
  id: number = 0;

  constructor() { }

  getItems() {
    return this.items
  }

  addItem(item: Item) {
    this.items.unshift(item);
  }

  idGenerate() {
    this.id += 1;
  }

  onDelete(item: Item) {
    this.items = this.items.filter(e => e.id !== item.id);
  }


}
