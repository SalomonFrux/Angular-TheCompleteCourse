import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormControl, FormControlDirective, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { ApplicationServices } from 'src/app/services/application.services';
import { Recipe } from 'src/app/Shared/recipe.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit {
  notEditable = true;
  editForm!: FormGroup;
  recipeToEdit!: Recipe;
  recipes!: Recipe[];
 
  constructor(private activateRoute: ActivatedRoute, 
    private appServices: ApplicationServices) {

     }

  ngOnInit(): void {
    
   this.recipes = this.appServices.recipes;
    this.activateRoute.params.subscribe((params: Params) => {
      let paramId = params.id;
      let edit = params.name;
      this.recipeToEdit = this.appServices.getSingleRecipe(paramId)

      if (edit === "edit") {
        this.notEditable = false;
      }
      this.initEditForm();
    }); 
  }

  private initEditForm(){
  //TODO: need to put this in its own method
  this.editForm = new FormGroup({
    "name": new FormControl(this.recipeToEdit.name),
    "description": new FormControl(this.recipeToEdit.content),
    "imageUrl": new FormControl(this.recipeToEdit.image)
  })
  }

  onSaveBtnClicked(){
     this.recipeToEdit = new Recipe(
     this.editForm.value["name"],
     this.editForm.value["description"],  this.editForm.value["imageUrl"])
    //  this.appServices.updateRecipes(this.recipeToEdit.id, this.recipeToEdit);
    this.appServices.addRecipes(this.recipeToEdit);
     
    
  }

}


