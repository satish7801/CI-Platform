import { Component, Inject, Input, OnInit, Optional } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  // recipes : Recipe[] = [];

  @Input() recipes: Recipe[] = [];

  ngOnInit() {
  }
}
