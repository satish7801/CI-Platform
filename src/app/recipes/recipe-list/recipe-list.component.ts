import { Component, EventEmitter, Inject, Input, OnInit,  Output } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Input() recipes: Recipe[] = [];

  @Output() recipeSelectedReturnFromList = new EventEmitter<Recipe>();

  ngOnInit() {
  }

  RecipeSelectedOnList(recipe: Recipe){
    this.recipeSelectedReturnFromList.emit(recipe);
  }
}
