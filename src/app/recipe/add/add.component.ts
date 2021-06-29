import { ActivatedRoute, Params, Router } from '@angular/router';
import { ApplicationServices } from 'src/app/services/application.services';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Recipe } from 'src/app/Shared/recipe.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
showForm='';

  constructor(private appService: ApplicationServices, 
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.showAddForm();
  }

  showAddForm(){
    this.appService.addRecipeEvent.subscribe((rep: void)=>
    {
      this.showForm = 'show' 
    })
  }

  onNewrecipeAdded(form:NgForm){
    let formValue = form.value;
    let recipe = new Recipe(formValue.name, formValue.text, formValue.image, formValue['ingredient']);
    this.appService.addRecipes(recipe);
    form.reset();

}
}
