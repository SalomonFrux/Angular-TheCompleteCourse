import { Ingredient } from './Ingredient.model';
export class Recipe {

    public name: string;
    public content: string;
    public image: string;
    public ingredient: Ingredient[];

    constructor(  name:string, 
        content: string,  image: string,   ingredient:Ingredient []) {
       
          this.name = name;
          this.content = content;
          this.image = image;
          this.ingredient = ingredient
    }

}