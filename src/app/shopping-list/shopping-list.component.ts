import { Ingredient } from './../Shared/Ingredient.model';
import { Component, EventEmitter, OnInit, Output, ViewChild, ViewChildren } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApplicationServices } from '../services/application.services';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],

})
export class ShoppingListComponent implements OnInit {

  position = 0;
  ingredients: Ingredient[] = [];
  @ViewChild("f", { static: false }) formEl!: NgForm;
  editMode = false;
  constructor(private appServices: ApplicationServices) { }

  ngOnInit(): void {
    this.ingredients = this.appServices.returnIngredients()
  }

  onAddClicked(form: NgForm) {
    const Value = form.value;
    const newIngredient = new Ingredient(Value.name, Value.amount)
    if (this.editMode) {
      this.updateIngredient(newIngredient)
    } else {
      this.ingredients.push(newIngredient)
    }

    form.reset();
    this.editMode = false
  }


  loadInput(index: number) {
    const selectedIngredient = this.getIngredients(index);
    this.position = index;
    this.formEl.setValue({
      name: selectedIngredient.name,
      amount: selectedIngredient.amount
    })
    this.editMode = true;
  }

  getIngredients(num: number) {
    return this.ingredients[num];
  }

  updateIngredient(ingredient: Ingredient) {
    this.ingredients[this.position] = ingredient;
  }


  onClear() {
    this.formEl.reset()
    this.editMode = false;
  }

  onDelete() {
    this.ingredients.splice(this.position, 1);
    this.onClear();
  }
}
