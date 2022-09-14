import { Component, OnInit } from '@angular/core';

import { Item } from '../../models/item';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[] = [];
  total: number = 0;

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.items= this.itemService.getItems();

    this.getTotal();
  }

  deleteProduct(item: Item) {
    this.items = this.items.filter(e => e.id !== item.id);
    this.getTotal();
  }

  changeCompProduct(item: Item) {
    this.getTotal();
  }

  getTotal() {
    this.total = this.items.filter(e => !e.completed)
                 .map(e => e.price * e.quantity)
                 .reduce( (acc, item) => acc += item ,0);
  }

}
