import { Ingredient } from './../../Shared/Ingredient.model';
import { ApplicationServices } from './../../services/application.services';
import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/Shared/recipe.model';
import { ActivatedRoute, Params, Router } from '@angular/router';

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


  constructor(private appServices: ApplicationServices,
     private route: ActivatedRoute, private router: Router) {

    this.appServices.recipeItemClicked.subscribe((recipe: Recipe) => {

      this.recipeReceived = recipe;
      this.userSelectedRecipe = true;

    });
  }

  ngOnInit(): void {
    this.ingredients = this.appServices.returnIngredients();
   
  }

  onRecipeItemClicked(){
    this.appServices.recipeItemClicked.next();
  }

  onDropdownClicked(){
    if(this.addShowClass === 'show'){
      this.addShowClass = '!show';
    }else{
      this.addShowClass = 'show';
    }3
  }

  onDeleteItemClicked(){
    this.route.params.subscribe((IdParam: Params)=> {
      this.Id = IdParam.id;
      this.appServices.deleteRecipe(this.Id);
      this.router.navigate(['/recipe'])
    })
  }

}