import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  
  @ViewChild('IngridentName') IngridentName : ElementRef =   new ElementRef(HTMLInputElement);
  @ViewChild('IngridentAmount') IngridentAmount : ElementRef =   new ElementRef(HTMLInputElement);

  @Output() SendIngrident = new EventEmitter<Ingredient>();

  
  OnAddedIngrident(){
    const name = this.IngridentName.nativeElement.value;
    const amount = this.IngridentAmount.nativeElement.value;

      this.SendIngrident.emit(new Ingredient(name, amount))
  }
}
