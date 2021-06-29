import { Ingredient } from './../../Shared/Ingredient.model';
import { ApplicationServices } from './../../services/application.services';
import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/Shared/recipe.model';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  userSelectedRecipe = false;
  recipeReceived!: Recipe;
  ingredients: Ingredient[] = [];
  Id: number = 0;
  singleRecipe!: Recipe;
  addShowClass = '!show'

  constructor(private applicationServices: ApplicationServices,
     private route: ActivatedRoute) {

    this.applicationServices.recipeItemClicked.subscribe((recipe: Recipe) => {

      this.recipeReceived = recipe;
      this.userSelectedRecipe = true;

    });
  }

  ngOnInit(): void {
    this.ingredients = this.applicationServices.returnIngredients();

    this.route.params
      .subscribe((params: Params) => {
        this.Id= params.id;
      })

  }

  onRecipeItemClicked(){
    this.applicationServices.recipeItemClicked.next()
  }

  onDropdownClicked(){
    if(this.addShowClass === 'show'){
      this.addShowClass = '!show'
    }else{
      this.addShowClass = 'show'
    }
    
  }
}