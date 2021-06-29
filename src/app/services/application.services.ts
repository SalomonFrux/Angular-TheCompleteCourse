import { Recipe } from './../Shared/recipe.model';
import { Subject } from 'rxjs';
import { Ingredient } from '../Shared/Ingredient.model';
export class ApplicationServices {

    editFormSavedEvt = new Subject<Recipe>()
    recipeItemClicked = new Subject<Recipe>();
    IngredientSub = new Subject<Ingredient>();
    addRecipeEvent = new Subject<void>();
    editClicked =new Subject<void>();

    recipes: Recipe [] =  [  new Recipe( "The first  recipe",
     "This is the first content of the array of recipes, I have done it. Let watch the vid later to see how he did it.",
    "https://static.superiorwallpapers.com/images/lthumbs/2015-10/11205_Your-secret-book-with-food-recipes.jpg",
    
    [
        new Ingredient('Meat', 1),
        new Ingredient('saussage', 6),
        new Ingredient('Tomato', 4)
    ]
    )
       
     
  ]

    ingredients: Ingredient [] = [{
        name: "Tomato",
        amount: 3 
    },
    {
        name: "onion",
        amount: 4
    }
]
  returnIngredients(){
     return this.ingredients; 
  }

 //TODO Ingredient Error ...... to solve

    getSingleRecipe(id: number){
        return this.recipes[id]
    }

    updateRecipes(id: number, recipe: Recipe){
        this.recipes[id] = recipe;
    }
    addRecipes(newRecipe: Recipe){
       const shrinked = this.shrinkContent(newRecipe)
        this.recipes.push(shrinked);        
    }

    getRecipes(){
      return this.recipes;
    }

    private shrinkContent(recipe:Recipe){
        let subStr = ''
        if(recipe.content.length >110){
           subStr = recipe.content.substr(0, 110) + '...';
        }
        return new Recipe(recipe.name, subStr, recipe.image, recipe.ingredient);
    }
}