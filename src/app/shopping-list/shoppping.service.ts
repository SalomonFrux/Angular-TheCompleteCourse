import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from './../Shared/Ingredient.model';

export class ShoppingService {

    ingredient: Ingredient[] = [
        new Ingredient("Tomato", 5),
        new Ingredient("Onion", 3)
    ]
    
    shoppingBtnClicked = new Subject<{inputName: string, inputContent: string}>()
}