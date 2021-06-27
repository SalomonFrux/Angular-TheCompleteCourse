import { ApplicationServices } from 'src/app/services/application.services';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  
  constructor(private appService: ApplicationServices) { }

  ngOnInit(): void {
  }

  createNewRecipe(){
   this.appService.addRecipeEvent.next();
  }
}
