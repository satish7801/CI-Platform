import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe-list/recipe.model';

@Component({
  selector: 'app-recipe-add',
  templateUrl: './recipe-add.component.html',
  styleUrls: ['./recipe-add.component.css']
})
export class RecipeAddComponent {
  @Output() RecipeAdd = new EventEmitter<Recipe>();

   name: string ='' ;
   Description: string ='' ;
   ImagePath: string ='';

    SubmitRecipe(){
      this.RecipeAdd.emit({
        name: this.name,
        description: this.Description,
        ImagePath: this.ImagePath 
      });
    }

}
