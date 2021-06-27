import { Recipe } from './../Shared/recipe.model';
import { Subject } from 'rxjs';
import { Ingredient } from '../Shared/Ingredient.model';
export class ApplicationServices {

    editFormSavedEvt = new Subject<Recipe>()
    recipeItemClicked = new Subject<Recipe>();
    IngredientSub = new Subject<Ingredient>();
    addRecipeEvent = new Subject<void>();
    editClicked =new Subject<void>();

    recipes: Recipe [] =  [  {
        name: "The first  recipe",
        content: "This is the first content of the array of recipes, I have done it. Let watch the vid later to see how he did it.",
        image: "https://static.superiorwallpapers.com/images/lthumbs/2015-10/11205_Your-secret-book-with-food-recipes.jpg"
    },
    {
       
        name: "The Second  recipe",
        content: "this is the second content to show that it  works",
        image: "https://image.freepik.com/free-photo/thai-food-nam-prik-ong-pork-cooked-with-tomato_1150-38207.jpg"
    }]

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

    // getRecipes(id: number){
    //   const recipeWithId = this.recipes.find(x => {
    //       return  x.id === id;
    //     })

    //     return recipeWithId;
    // }

    getSingleRecipe(id: number){
        return this.recipes[id]
    }

    updateRecipes(id: number, recipe: Recipe){
        this.recipes[id] = recipe;
        console.log(this.recipes[id] )
    }
    addRecipes(newRecipe: Recipe){
        this.recipes.push(newRecipe);        
        console.log(newRecipe);
        console.log(this.recipes);
    }
}