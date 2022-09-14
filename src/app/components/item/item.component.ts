import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from 'src/app/models/item';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() item: Item = new Item();
  @Output() deleteItem: EventEmitter<Item> = new EventEmitter()
  @Output() changeCompItem: EventEmitter<Item> = new EventEmitter()

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
  }

  onDelete(item: Item) {
    this.itemService.onDelete(item);
    this.deleteItem.emit(item);
  }

  changeCompleted(item: Item) {
    item.completed = !item.completed;
    this.changeCompItem.emit(item);
  }

}
