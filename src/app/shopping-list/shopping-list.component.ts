import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  Ingredients: Ingredient[] = [
    new Ingredient('Bread', 1),
    new Ingredient('Aloo Tikki', 1)
  ];
}
