import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/models/item';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  title: string = '';
  price: number = 0;
  quantity: number = 1;

  constructor(private itemService:ItemService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.itemService.idGenerate();
    const item = new Item();
    item.id = this.itemService.id;
    item.title = this.title;
    item.price = this.price;
    item.quantity = this.quantity;
    item.completed = false;

    this.itemService.addItem(item);
    this.router.navigate(["/"]);
  }

  disabledButton() {
    if(this.title === '' || this.price === 0) {
      return true
    } else return false
  }

}
