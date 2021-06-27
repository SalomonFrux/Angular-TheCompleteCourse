import { ApplicationServices } from '../../../services/application.services';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from 'src/app/Shared/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
 
  editedValues!: Recipe; 
  recipes: Recipe[] = []; 
 constructor(private appServices:ApplicationServices ) {
 
 }

  ngOnInit(): void {
    this.recipes.push(...this.appServices.recipes)
  }
  
  onRecipeItemClicked(item:Recipe){
    this.appServices.recipeItemClicked.next(item)
  }


}

