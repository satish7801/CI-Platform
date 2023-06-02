import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from './recipe-list/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export  class RecipesComponent implements OnInit {

  @Output() recipeListUpdated = new EventEmitter<Recipe[]>();

  @Output() recipeDetailOutput = new EventEmitter<Recipe>();

  recipes : Recipe[] = [
    new Recipe('Burger', 'Burger is Very Testy', 'https://cdn.pixabay.com/photo/2023/03/05/11/02/burger-7831128_1280.jpg'),
    new Recipe('Pizza', 'Pizza is Delicious', 'https://img.freepik.com/free-photo/mixed-pizza-with-various-ingridients_140725-3790.jpg?w=2000')
  ];

  recipeItem: Recipe = new Recipe('','','');

  ngOnInit(): void {
    this.recipeListUpdated.emit(this.recipes);
  }

    IsRecipeAdd = false;

    AddRecipe(){
      this.IsRecipeAdd = !this.IsRecipeAdd;
    }

    AddRecipeFromBack(recipe: Recipe){
        this.recipes.push(recipe);
        console.log(this.recipes);
        this.recipeListUpdated.emit(this.recipes);
    }

    RecipeSelectedOnRecipes(recipe: Recipe){
      this.recipeItem = recipe;
    }

}
